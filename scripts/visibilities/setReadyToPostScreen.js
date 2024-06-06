// setChooseRepoScreen에서 레포를 선택한 후 글쓰기 창으로 넘어간 화면
// 로그인했고 repo도 선택한 상태.

export function setReadyToPostScreen(nickname, repoName){
  document.getElementById('login-button').style.display = 'none';
  document.getElementById('repoList-section').style.display = 'none';

  document.getElementById('logout-button').style.display = 'flex';
  document.getElementById('post-section').style.display = 'flex';
  document.getElementById('user-section').style.display='flex';

  const selectedRepoSpan = document.getElementById('user-selectedRepo-span');
  selectedRepoSpan.innerHTML = `<a href="https://www.github.com/${nickname}/${repoName}" target="_blank" class="text--highlighted">${repoName}</a>`;
}