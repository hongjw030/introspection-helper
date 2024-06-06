// 로그아웃하면 login 버튼만 보이고 나머지는 다 안보이게 됨.
export function setLogoutScreen(){
  document.getElementById('login-button').style.display = 'flex';
  document.getElementById('logout-button').style.display = 'none';
  document.getElementById('user-section').style.display = 'none';
  document.getElementById('repoList-section').style.display = 'none';
  document.getElementById('post-section').style.display = 'none';
}