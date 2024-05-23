// 로그아웃하면 login 버튼만 보이고 나머지는 다 안보이게 됨.
export function setLogoutScreen(){
  document.getElementById('extension-login-button').style.display = 'flex';
  document.getElementById('extension-logout-button').style.display = 'none';
  document.getElementById('extension-user-section').style.display = 'none';
  document.getElementById('extension-repoList-section').style.display = 'none';
  document.getElementById('extension-post-section').style.display = 'none';
}