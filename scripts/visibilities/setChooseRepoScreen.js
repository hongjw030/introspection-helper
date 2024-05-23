// 로그인 버튼을 누르면 다음 페이지로 choose repo 페이지로 이동함.
export function setChooseRepoScreen(){
  document.getElementById('extension-login-button').style.display = 'none';
  document.getElementById('extension-logout-button').style.display = 'flex';
  document.getElementById('extension-repoList-section').style.display = 'flex';
}