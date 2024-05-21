document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['githubToken', 'selectedRepo', 'ownerName'], function(result) {
    if (result.githubToken) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('logout').style.display = 'block';
      document.getElementById('ownerSection').style.display = 'flex';
      if (result.selectedRepo) {
        showSelectedRepo(result.selectedRepo);
        document.getElementById('selectedRepoP').style.display = 'flex';
        document.getElementById('postSection').style.display = 'flex';
        if (result.ownerName) {
          showOwnerName(result.ownerName);
          document.getElementById('ownerNameP').style.display = 'flex';
        } else {
          fetchRepos(result.githubToken);
        }
      } else {
        fetchRepos(result.githubToken);
      }
    } else {
      document.getElementById('login').style.display = 'block';
      document.getElementById('logout').style.display = 'none';
    }
  });

  document.getElementById('login').addEventListener('click', function() {
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
          document.getElementById('login').style.display = 'none';
          document.getElementById('logout').style.display = 'block';
          fetchRepos(token);
        });
        fetchOwnerName(token);
      });
    });
  });

  document.getElementById('logout').addEventListener('click', function() {
    chrome.storage.local.remove(['githubToken', 'selectedRepo', 'ownerName'], function() {
      document.getElementById('login').style.display = 'block';
      document.getElementById('logout').style.display = 'none';
      document.getElementById('ownerSection').style.display = 'none';
      document.getElementById('repoSection').style.display = 'none';
      document.getElementById('postSection').style.display = 'none';
    });
    let token = chrome.storage.local.get('githubToken');
    console.log(token)
  });

  document.getElementById('submitPost').addEventListener('click', function() {
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
        const content = document.getElementById('postInput').value;

        const fileName = `${getCurrentDate()}.md`;
        chrome.storage.local.get('ownerName', function(ownerResult){
          const ownerName = ownerResult.ownerName;
          if (!ownerName){
            console.error('No owner name found');
            return;
          }
          createFileAndCommit(token, repoName, fileName, content, ownerName);
        })
      });
    });
  });
});

function encodeBase64(input) {
  const utf8Bytes = new TextEncoder().encode(input);
  return btoa(String.fromCharCode(...utf8Bytes));
}

function decodeBase64(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  let day = today.getDate().toString().padStart(2, '0');

  return `${year}${month}${day}`;
}

function fetchOwnerName(token) {
  console.log(token);
  fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => response.json())
  .then(userData => {
    const ownerName = userData.login;
    chrome.storage.local.set({ ownerName: ownerName }, function() {
      console.log('Owner name stored:', ownerName);
    });
  });
}

function fetchRepos(token) {
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json()).then(repos => {
    const repoList = document.getElementById('repoList');
    repoList.innerHTML = '';
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.textContent = repo.name;
      li.addEventListener('click', function() {
        chrome.storage.local.set({ selectedRepo: repo.name }, function() {
          showSelectedRepo(repo.name);
          document.getElementById('postSection').style.display = 'flex';
        });
      });
      repoList.appendChild(li);
    });
    document.getElementById('repoSection').style.display = 'flex';
  });
}

function showSelectedRepo(repoName) {
  document.getElementById('repoSection').style.display='none';
  document.getElementById('ownerSection').style.display='flex';
  const selectedRepoSpan = document.getElementById('selectedRepoSpan');
  selectedRepoSpan.innerHTML = repoName;
}

function showOwnerName(ownerName) {
  const ownerNameSpan = document.getElementById('ownerNameSpan');
  ownerNameSpan.innerHTML = ownerName;
}


function createFileAndCommit(token, repoName, fileName, content, ownerName) {
  let latestCommitSha; // latestCommitSha 변수를 함수 내에서 선언

  function createFileInFolder(token, repoName, fileName, content, ownerName, folderPath) {
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${folderPath}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => {
      if (response.status === 404) {
        // 폴더가 없으므로 생성
        return createFolderAndFile(token, repoName, fileName, content, ownerName, folderPath);
      } else {
        // 폴더가 이미 존재하므로 파일 생성
        return createNewFile(token, repoName, fileName, content, ownerName, folderPath);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function createFolderAndFile(token, repoName, fileName, content, ownerName, folderPath) {
    const folderName = folderPath.split('/').pop();
    const parentFolder = folderPath.split('/').slice(0, -1).join('/');
    const folderData = {
      path: folderPath,
      message: 'Create new folder',
      content: encodeBase64(''), // 빈 내용으로 폴더 생성
      branch: 'main' // 변경 필요 시 수정
    };

    fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${parentFolder}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const baseTreeSha = data.sha;

      return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/trees`, {
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

      return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/commits`, {
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

      return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/refs/heads/main`, {
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
      return createNewFile(token, repoName, fileName, content, ownerName, folderPath);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function createNewFile(token, repoName, fileName, content, ownerName, folderPath) {
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${folderPath}/${fileName}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => {
      if (response.status === 404) {
        // 파일이 존재하지 않으므로 생성
        return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${folderPath}/${fileName}`, {
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
          return createNewFile(token, repoName, myFileName, content, ownerName, folderPath);
        } else {
          // 사용자가 입력을 취소한 경우
          throw new Error('파일 이름 입력이 취소되었습니다.');
        }
      }
    })
    .then(response => {
      if (response.status === 201) {
        alert(`파일 ${fileName}이(가) 생성되었습니다.`);
        document.getElementById('postInput').value = '';
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

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const folderPath = `${year}/${month}`;

  createFileInFolder(token, repoName, fileName, content, ownerName, folderPath);
}
