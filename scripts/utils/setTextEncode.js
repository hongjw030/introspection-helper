/*
 * input -> base64 텍스트 변환 함수
 * 
 * desc: 한글, 이모지 등 특정 문자는 base64로 인식되지 않는 문제로 encode, decode 함수를 새로 정의함.
 * params: string형 문자열
 * returns: base64로 인코딩된 문자열
 * test: 
 */
export function encodeBase64(input) {
  const utf8Bytes = new TextEncoder().encode(input);
  return btoa(String.fromCharCode(...utf8Bytes));
}