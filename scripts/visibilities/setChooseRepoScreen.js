// 로그인했지만 아직 repo를 선택하지 않은 상태.
export function setChooseRepoScreen(){
  document.getElementById('extension-login-button').style.display = 'none';
  document.getElementById('extension-logout-button').style.display = 'none';
  document.getElementById('extension-repoList-section').style.display = 'flex';
  document.getElementById('extension-user-section').style.display='none';
  document.getElementById('extension-post-section').style.display = 'none';
}