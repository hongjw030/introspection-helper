export async function getRepoList(token) {
  try{
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    });
    const reposData = await response.json();
    return reposData;
  }catch(error){
    return;
  }
}