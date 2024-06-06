// 로그인했지만 아직 repo를 선택하지 않은 상태.
export function setChooseRepoScreen(){
  document.getElementById('login-button').style.display = 'none';
  document.getElementById('logout-button').style.display = 'none';
  document.getElementById('repoList-section').style.display = 'flex';
  document.getElementById('user-section').style.display='none';
  document.getElementById('post-section').style.display = 'none';
}