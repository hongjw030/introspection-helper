import { getDateInformation } from '../../scripts/utils/getDate';

describe('날짜 함수', () => {
  beforeAll(() => {
    // 현재 날짜를 고정하여 테스트를 예측 가능하게 만듭니다.
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2024-05-23T00:00:00Z'));
  });

  afterAll(() => {
    // 모든 테스트가 끝난 후 타이머를 원래대로 되돌립니다.
    jest.useRealTimers();
  });

  test('getDateInformation 함수가 현재 날짜에 따른 적절한 문자열 배열을 리턴하는가?', () => {
    const [year, month, day] = getDateInformation();
    expect(year).toBe('2024');
    expect(month).toBe('05');
    expect(day).toBe('23');
  });

});
