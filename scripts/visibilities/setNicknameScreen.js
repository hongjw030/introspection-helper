export function setNicknameScreen(nickname) {
  document.getElementById('extension-user-nickname-p').style.display = 'flex';
  const nicknameSpan = document.getElementById('extension-user-nickname-span');
  nicknameSpan.innerHTML = `<a href="https://www.github.com/${nickname}" target="_blank" class="text--highlighted">${nickname}</a>`;
}
