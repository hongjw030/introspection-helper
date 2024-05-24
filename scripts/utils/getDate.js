/*
 * 현재 날짜 리턴 함수
 * 
 * desc: 오늘의 날짜를 [year, month, day] 배열에 담아 리턴하는 함수.
 * params: 
 * returns: [year: string, month: string, day: string]
 * test: 
 */
export function getDateInformation() {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  let day = today.getDate().toString().padStart(2, '0');
  return [year, month, day];
}