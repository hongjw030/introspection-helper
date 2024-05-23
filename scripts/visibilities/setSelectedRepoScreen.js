export function setSelectedRepoScreen(repoName, nickname) {
  const selectedRepoSpan = document.getElementById('extension-user-selectedRepo-span');
  selectedRepoSpan.innerHTML = `<a href="https://www.github.com/${nickname}/${repoName}" target="_blank" class="text--highlighted">${repoName}</a>`;
}