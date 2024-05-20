document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['githubToken', 'selectedRepo', 'ownerName'], function(result) {
    if (result.githubToken) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('logout').style.display = 'block';
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
    chrome.storage.local.remove(['githubToken', 'selectedRepo'], function() {
      document.getElementById('login').style.display = 'block';
      document.getElementById('logout').style.display = 'none';
      document.getElementById('repoSection').style.display = 'none';
      document.getElementById('repoList').innerHTML = '';
      document.getElementById('selectedRepo').innerHTML = '';
      document.getElementById('postSection').style.display = 'none';
      document.getElementById('postInput').value = '';
    });
    chrome.storage.local.remove('ownerName', function(){
      console.log('Owner name removed');
    })
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
  document.getElementById('repoList').innerHTML = '';
  const selectedRepoSpan = document.getElementById('selectedRepoSpan');
  selectedRepoSpan.innerHTML = repoName;
}

function showOwnerName(ownerName) {
  const ownerNameSpan = document.getElementById('ownerNameSpan');
  ownerNameSpan.innerHTML = ownerName;
}

function createFileAndCommit(token, repoName, fileName, content, ownerName) {
  let latestCommitSha; // latestCommitSha 변수를 함수 내에서 선언

  function createFileAndCommitRecursive(fileName) {
    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${fileName}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Create new Markdown file',
        content: btoa(content) // encode content to base64
      })
    })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 422) {
        // 중복된 파일이 있을 경우 사용자에게 새 파일 이름을 입력받기
        const newFileName = prompt("같은 이름의 파일이 존재합니다! 새 파일 이름을 입력해주세요.") + ".md";
        if (newFileName) {
          // 사용자가 입력한 새 파일 이름이 있는 경우 재귀 호출
          return createFileAndCommitRecursive(newFileName);
        } else {
          // 사용자가 입력을 취소한 경우
          throw new Error("취소되었습니다.");
        }
      } else {
        throw new Error('Failed to create file');
      }
    });
  }

  return createFileAndCommitRecursive(fileName).then(data => {
    const commitMessage = 'Add new Markdown file';
    const branch = 'main'; // Change to your default branch if needed
    const sha = data.content.sha;

    // Get the latest commit
    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/refs/heads/${branch}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    });
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to get branch reference');
    }
  })
  .then(refData => {
    latestCommitSha = refData.object.sha; // latestCommitSha 변수에 할당
    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/commits/${latestCommitSha}`, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    });
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to get latest commit data');
    }
  })
  .then(commitData => {
    // Create tree
    const treeSha = commitData.tree.sha;

    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        base_tree: treeSha, // latestCommitSha를 참조
        tree: [{
          path: fileName,
          mode: '100644',
          type: 'blob',
          content: btoa(content) // encode content to base64
        }]
      })
    });
  })
  .then(response => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error('Failed to create tree');
    }
  })
  .then(treeData => {
    const treeSha = treeData.sha;
  
    // Create commit
    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: commitMessage,
        parents: [latestCommitSha],
        tree: treeSha
      })
    });
  })
  .then(response => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error('Failed to create commit');
    }
  })
  .then(commitData => {
    const commitSha = commitData.sha;
  
    // Update branch reference
    return fetch(`https://api.github.com/repos/${ownerName}/${repoName}/git/refs/heads/${branch}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sha: commitSha,
        force: false
      })
    });
  })
  .then(response => {
    if (response.status === 200) {
      console.log('Commit created successfully');
    } else {
      throw new Error('Failed to update branch reference');
    }
  })
  .catch(error => {
    console.log(error)
  }).finally(()=>{
    alert("finally console!")
  })
}
