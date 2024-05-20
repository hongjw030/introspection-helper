document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('githubToken', function(result) {
    if (result.githubToken) {
      // Token exists, show logout button and fetch repos
      document.getElementById('login').style.display = 'none';
      document.getElementById('logout').style.display = 'block';
      fetchRepos(result.githubToken);
    } else {
      // No token, show login button
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
      });
    });
  });

  document.getElementById('logout').addEventListener('click', function() {
    chrome.storage.local.remove('githubToken', function() {
      document.getElementById('login').style.display = 'block';
      document.getElementById('logout').style.display = 'none';
      document.getElementById('repoSection').style.display = 'none';
      document.getElementById('repoList').innerHTML = '';
    });
  });
});

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
      repoList.appendChild(li);
    });
    document.getElementById('repoSection').style.display = 'block';
  });
}
