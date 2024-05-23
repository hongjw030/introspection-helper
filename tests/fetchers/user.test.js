// user nickname fetch 테스트
import { getUserNickname } from '../../scripts/fetchers/getUserNickname';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getUserNickname', () => {
  const token = 'mocked_token';
  const mockUserData = {
    login: 'mocked_nickname'
  };

  beforeAll(() => {
    // fetch mock 초기화
    fetchMock.resetMocks();
    // chrome.storage.local mock 초기화
    global.chrome = {
      storage: {
        local: {
          set: jest.fn((data, callback) => callback())
        }
      }
    };
  });
  it('chrome.storage.local에 닉네임을 받아 저장하는가?', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockUserData), { status: 201 });

    await getUserNickname(token);
    expect(chrome.storage.local.set).toHaveBeenCalledWith({ nickname: 'mocked_nickname' }, expect.any(Function));
  });
});
