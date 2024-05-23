/*
 * 유저 닉네임 리턴 함수
 * 
 * desc: token 값을 가지고 현재 로그인한 유저의 깃허브 닉네임을 알아와 nickname 에 저장하는 함수.
 * params: 문자열 token
 * returns: 
 * test: 
 */
export function getUserNickname(token) {
  fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => response.json())
  .then(userData => {
    const nickname = userData.login;
    chrome.storage.local.set({ nickname: nickname }, function() {});
  });
}
