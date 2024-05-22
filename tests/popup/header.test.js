// /popup/header.test.js
describe('Header', () => {
  test('id 이름이 extension-header 인 header 태그가 항상 display:flex 상태인가?', () => {
    document.body.innerHTML = `
      <header id="extension-header" style="display: flex;">Hello</header>
    `;

    const header = document.getElementById('extension-header');
    expect(header.style.display).toBe('flex');
  });
});
