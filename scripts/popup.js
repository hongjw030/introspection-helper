import { getUserNickname } from "./fetchers/getUserNickname";
import { getDateInformation, getInitialFileName } from "./utils/getDate";
import { encodeBase64 } from "./utils/setTextEncode";

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['githubToken', 'selectedRepo', 'nickname', 'savedText'], function(result) {
    if (result.githubToken) {
      document.getElementById('extension-login-button').style.display = 'none';
      document.getElementById('extension-logout-button').style.display = 'block';
      document.getElementById('extension-user-section').style.display = 'flex';
      if (result.nickname) {
        showOwnerName(result.nickname);
        document.getElementById('extension-user-nickname-p').style.display = 'flex';
        if (result.selectedRepo) {
          showSelectedRepo(result.selectedRepo, result.nickname);
          document.getElementById('extension-post-section').style.display = 'flex';
          document.getElementById('extension-user-selectedRepo-p').style.display = 'flex';
          if (result.savedText){
            const textarea = document.getElementById('extension-post-textarea');
            textarea.value = result.savedText;
          }
        } else {
          fetchRepos(result.githubToken);
        }
      } else {
        fetchRepos(result.githubToken);
      }
    } else {
      document.getElementById('extension-login-button').style.display = 'block';
      document.getElementById('extension-logout-button').style.display = 'none';
    }
  });

  document.getElementById('extension-login-button').addEventListener('click', function() {
    const redirectUri = chrome.identity.getRedirectURL();
    const authUrl = `https://github.com/login/oauth/authorize?client_id=Ov23liS8uJ1LJSioNTPc&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;

    chrome.identity.launchWebAuthFlow({
      url: authUrl,
      interactive: true
    }, function(redirectUrl) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }

      const params = new URLSearchParams(new URL(redirectUrl).search);
      const code = params.get('code');

      fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: 'Ov23liS8uJ1LJSioNTPc',
          client_secret: '904fcc78be315af16780349f2f74d701aeb3fd34',
          code: code,
          redirect_uri: redirectUri
        })
      }).then(response => response.json()).then(data => {
        const token = data.access_token;
        chrome.storage.local.set({ githubToken: token }, function() {
          document.getElementById('extension-login-button').style.display = 'none';
          document.getElementById('extension-logout-button').style.display = 'block';
          fetchRepos(token);
        });
        getUserNickname(token);
      });
    });
  });

  document.getElementById('extension-logout-button').addEventListener('click', function() {
    chrome.storage.local.remove(['githubToken', 'selectedRepo', 'nickname', 'savedText'], function() {
      document.getElementById('extension-login-button').style.display = 'block';
      document.getElementById('extension-logout-button').style.display = 'none';
      document.getElementById('extension-user-section').style.display = 'none';
      document.getElementById('extension-repoList-section').style.display = 'none';
      document.getElementById('extension-post-section').style.display = 'none';
    });
    let token = chrome.storage.local.get('githubToken');
    console.log(token)
  });

  document.getElementById('extension-save-button').addEventListener('click', function(){
    const textarea = document.getElementById('extension-post-textarea');
    chrome.storage.local.set({savedText: textarea.value});
    alert("임시 저장되었습니다! submit 버튼으로 제출하면 자동으로 저장된 내용은 사라집니다.");
  })

  document.getElementById('extension-submit-button').addEventListener('click', function() {
    chrome.storage.local.get('githubToken', function(result) {
      const token = result.githubToken;
      if (!token) {
        console.error('GitHub token not found');
        return;
      }

      chrome.storage.local.get('selectedRepo', function(repoResult) {
        const repoName = repoResult.selectedRepo;
        if (!repoName) {
          console.error('Selected repository not found');
          return;
        }
        const content = document.getElementById('extension-post-textarea').value;

        const fileName = `${getInitialFileName()}.md`;
        chrome.storage.local.get('nickname', function(ownerResult){
          const nickname = ownerResult.nickname;
          if (!nickname){
            console.error('No owner name found');
            return;
          }
          createFileAndCommit(token, repoName, fileName, content, nickname);
        })
      });
    });
    chrome.storage.local.remove(['savedText'], function() {})
  });
});

function fetchRepos(token) {
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json()).then(repos => {
    const repoList = document.getElementById('extension-repoList-ul');
    let nickname = ''
    chrome.storage.local.get(['nickname'], function(result){
      if (result.nickname) nickname = result.nickname;
    })
    console.log(nickname);
    repoList.innerHTML = '';
    if (repos.length > 0){
      repos.forEach(repo => {
        const li = document.createElement('li');
        li.setAttribute('class', "extension-li")
        li.textContent = repo.name;
        li.addEventListener('click', function() {
          chrome.storage.local.set({ selectedRepo: repo.name }, function() {
            showSelectedRepo(repo.name, nickname);
            document.getElementById('extension-post-section').style.display = 'flex';
          });
        });
        repoList.appendChild(li);
      });
    }else{
      repoList.innerHTML = "Your repository not exist!! Please make your own."
    }
    document.getElementById('extension-repoList-section').style.display = 'flex';
  });
}

function showSelectedRepo(repoName, nickname) {
  document.getElementById('extension-repoList-section').style.display='none';
  document.getElementById('extension-user-section').style.display='flex';
  const selectedRepoSpan = document.getElementById('extension-user-selectedRepo-span');
  selectedRepoSpan.innerHTML = `<a href="https://www.github.com/${nickname}/${repoName}" target="_blank" class="highlighted">${repoName}</a>`;
}

function showOwnerName(nickname) {
  const nicknameSpan = document.getElementById('extension-user-nickname-span');
  console.log(nickname)
  nicknameSpan.innerHTML = `<a href="https://www.github.com/${nickname}" target="_blank" class="highlighted">${nickname}</a>`;
}


function createFileAndCommit(token, repoName, fileName, content, nickname) {
  let latestCommitSha; // latestCommitSha 변수를 함수 내에서 선언

  function createFileInFolder(token, repoName, fileName, content, nickname, folderPath) {
    fetch(`https://api.github.com/repos/${nickname}/${repoName}/contents/${folderPath}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => {
      if (response.status === 404) {
        // 폴더가 없으므로 생성
        return createFolderAndFile(token, repoName, fileName, content, nickname, folderPath);
      } else {
        // 폴더가 이미 존재하므로 파일 생성
        return createNewFile(token, repoName, fileName, content, nickname, folderPath);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function createFolderAndFile(token, repoName, fileName, content, nickname, folderPath) {
    const folderName = folderPath.split('/').pop();
    const parentFolder = folderPath.split('/').slice(0, -1).join('/');
    const folderData = {
      path: folderPath,
      message: 'Create new folder',
      content: encodeBase64(''), // 빈 내용으로 폴더 생성
      branch: 'main' // 변경 필요 시 수정
    };

    fetch(`https://api.github.com/repos/${nickname}/${repoName}/contents/${parentFolder}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const baseTreeSha = data.sha;

      return fetch(`https://api.github.com/repos/${nickname}/${repoName}/git/trees`, {
        method: 'POST',
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          base_tree: baseTreeSha,
          tree: [{
            path: folderName,
            mode: '040000', // 디렉터리 모드
            type: 'tree',
            content: '', // 빈 내용
          }]
        })
      });
    })
    .then(response => response.json())
    .then(data => {
      const newTreeSha = data.sha;

      return fetch(`https://api.github.com/repos/${nickname}/${repoName}/git/commits`, {
        method: 'POST',
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Create new folder',
          tree: newTreeSha,
          parents: []
        })
      });
    })
    .then(response => response.json())
    .then(data => {
      const newCommitSha = data.sha;

      return fetch(`https://api.github.com/repos/${nickname}/${repoName}/git/refs/heads/main`, {
        method: 'PATCH',
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sha: newCommitSha
        })
      });
    })
    .then(() => {
      // 폴더 생성 후 파일 생성
      return createNewFile(token, repoName, fileName, content, nickname, folderPath);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function createNewFile(token, repoName, fileName, content, nickname, folderPath) {
    fetch(`https://api.github.com/repos/${nickname}/${repoName}/contents/${folderPath}/${fileName}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => {
      if (response.status === 404) {
        // 파일이 존재하지 않으므로 생성
        return fetch(`https://api.github.com/repos/${nickname}/${repoName}/contents/${folderPath}/${fileName}`, {
          method: 'PUT',
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Create new Markdown file',
            content: encodeBase64(content) // encode content to base64
          })
        });
      } else {
        // 파일이 이미 존재하므로 새 파일 이름을 입력받음
        const newFileName = prompt(`파일 이름 '${fileName}'이 이미 존재합니다. 새 파일 이름을 입력하세요.`);
        if (newFileName) {
          // 사용자가 새 파일 이름을 입력한 경우 파일 생성 함수 재귀 호출
          let myFileName = newFileName + ".md";
          return createNewFile(token, repoName, myFileName, content, nickname, folderPath);
        } else {
          // 사용자가 입력을 취소한 경우
          throw new Error('파일 이름 입력이 취소되었습니다.');
        }
      }
    })
    .then(response => {
      if (response.status === 201) {
        alert(`파일 ${fileName}이(가) 생성되었습니다.`);
        document.getElementById('extension-post-textarea').value = '';
      } else {
        throw new Error('Failed to create file');
      }
    })
    .catch(error => {
      if (error.message === 'Failed to create file'){
        alert("Error: 커밋에 실패했습니다.");
      }
      console.error('Error:', error);
    });
  }
  const [year, month, day] = getDateInformation();
  const folderPath = `${year}/${month}`;

  createFileInFolder(token, repoName, fileName, content, nickname, folderPath);
}
