import { setReadyToPostScreen } from "./setReadyToPostScreen";

export function setRepoListScreen(repos, nickname) {
  const repoList = document.getElementById('extension-repoList-ul');
  if (!repoList) return;

  repoList.innerHTML = '';
  repoList.addEventListener('click', ({target})=>{
    if (target.tagName === 'LI'){
      chrome.storage.local.set({selectedRepo: target.textContent}, ()=>{
        setReadyToPostScreen(nickname, target.textContent);
      })
    }
  })

  if (repos.length > 0){
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.setAttribute('class', "extension-li")
      li.textContent = repo.name;
      repoList.appendChild(li);
    });
  }else{
    repoList.innerHTML = "Your repository not exist!! Please make your own."
  }
}