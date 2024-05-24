import { getNickname } from "./fetchers/getNickname";
import { getRepoList } from "./fetchers/getRepoList";
import { getToken } from "./fetchers/getToken";
import { revokeToken } from "./fetchers/revokeToken";
import { getDateInformation } from "./utils/getDate";
import { encodeBase64 } from "./utils/setTextEncode";
import { setChooseRepoScreen } from "./visibilities/setChooseRepoScreen";
import { setLogoutScreen } from "./visibilities/setLogoutScreen";
import { setReadyToPostScreen } from "./visibilities/setReadyToPostScreen";
import { setRepoListScreen } from "./visibilities/setRepoListScreen";

const [YEAR, MONTH, DAY] = getDateInformation();
const SUBMISSION_DATE = `${YEAR}${MONTH}${DAY}`;

const CLIENT_ID = 'Ov23liS8uJ1LJSioNTPc';
const CLIENT_SECRET = '904fcc78be315af16780349f2f74d701aeb3fd34';

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['githubToken', 'selectedRepo', 'nickname', 'savedText', 'savedTemplate', 'habit', 'submissionDate'], async function(result) {
    if (result.githubToken) {
      // 깃헙 토큰이 있다면 로그인된 상태.
      if (result.selectedRepo) {
        // 이미 레포를 선택했었다면 ReadyToPost 화면을 보여줌.
        setReadyToPostScreen(result.nickname, result.selectedRepo);

        const textarea = document.getElementById('extension-post-textarea');
        if (result.savedText){
          // 저장했던 글이 있다면 불러오기.
          textarea.value = result.savedText;
        }else if (result.savedTemplate){
          // 저장한 글이 없다면 , 템플릿이 있다면 그거 불러오기
          textarea.value = result.savedTemplate;
        }

        const habitSection = document.getElementById('extension-optional-habit-article');
        if(result.habit){
          // 오늘 회고 작성했는지 여부 볼 수 있음.
          habitSection.style.display='flex';
          const prevDate = result.submissionDate;
          if (prevDate !== SUBMISSION_DATE){
            // 오늘 제출 안했다면?
            habitSection.setAttribute('data-isChecked', 'false')
            habitSection.textContent = `${YEAR}년 ${MONTH}월 ${DAY}일 회고를 작성하지 않았어요! 😐`;
          }else{
            // 오늘 제출했다면?
            habitSection.setAttribute('data-isChecked', 'true')
            habitSection.textContent = `${YEAR}년 ${MONTH}월 ${DAY}일 회고를 작성했어요! 💯`;
          }
        }else{
          habitSection.style.display='none';
        }
        
      } else {
        // 레포 선택안한 채로 창을 끄면 재로그인해야 함.
        let deleteToken = result.githubToken;
        revokeToken(CLIENT_ID, CLIENT_SECRET, deleteToken);
        chrome.storage.local.clear();
        setLogoutScreen();
      }
    } else {
      // github 토큰이 없다면 로그인이 안된 상태이므로 LogoutScreen 상태 보여짐.
      setLogoutScreen();
    }
  });

  // 로그인 버튼 기능
  document.getElementById('extension-login-button').addEventListener('click', function() {
    const redirectUri = chrome.identity.getRedirectURL();
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;

    chrome.identity.launchWebAuthFlow({
      url: authUrl,
      interactive: true
    }, async function(redirectUrl) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }

      const params = new URLSearchParams(new URL(redirectUrl).search);
      const code = params.get('code');
      // 로그인 시 토큰 받아오기
      const token = await getToken(code, redirectUri);
      chrome.storage.local.set({githubToken: token}, ()=>{
        setChooseRepoScreen();
      })
      // 토큰 받으면 바로 유저 닉네임 받아오기
      const nickname = await getNickname(token);
      chrome.storage.local.set({nickname: nickname}, ()=>{
      });
      // 유저 닉네임 받으면 바로 레포 리스트 받아오기
      const repoList = await getRepoList(token);
      setRepoListScreen(repoList, nickname);
    });
  });

  // 로그아웃 버튼 기능
  document.getElementById('extension-logout-button').addEventListener('click', function() {
    let deleteToken = chrome.storage.local.get('githubToken');
    let isRevoked = revokeToken(CLIENT_ID, CLIENT_SECRET, deleteToken);
    if (isRevoked){
      chrome.storage.local.clear();
      setLogoutScreen();
    }else return;
  });

// 임시저장 버튼 기능
  document.getElementById('extension-save-button').addEventListener('click', function(){
    const textarea = document.getElementById('extension-post-textarea');
    chrome.storage.local.set({savedText: textarea.value});
    alert("임시 저장되었습니다! submit 버튼으로 제출하면 자동으로 저장된 내용은 사라집니다.");
  })

  // 제출 버튼 기능
  document.getElementById('extension-submit-button').addEventListener('click', function() {
    chrome.storage.local.get('githubToken', function(result) {
      const token = result.githubToken;

      chrome.storage.local.get('selectedRepo', function(repoResult) {
        const repoName = repoResult.selectedRepo;
        const content = document.getElementById('extension-post-textarea').value;

        const fileName = `${SUBMISSION_DATE}.md`;
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

function createFileAndCommit(token, repoName, fileName, content, nickname) {
  let latestCommitSha; 

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
    .then(async response => {
      if (response.status === 201) {
        chrome.storage.local.set({'submissionDate': SUBMISSION_DATE})
        if(chrome.storage.local.get('habit')){
          const habitSection = document.getElementById('extension-optional-habit-article');
          habitSection.setAttribute("data-isChecked", 'true')
          habitSection.textContent = `${YEAR}년 ${MONTH}월 ${DAY}일 회고를 작성했어요! 💯`;
        }
        chrome.storage.local.get('savedTemplate', (result)=>{
          document.getElementById('extension-post-textarea').value = result.savedTemplate ?? "";
          alert(`파일 ${fileName}이(가) 생성되었습니다.`);
        })
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
  const folderPath = `${YEAR}/${MONTH}`;

  createFileInFolder(token, repoName, fileName, content, nickname, folderPath);
}
