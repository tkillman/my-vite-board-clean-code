console.log('vite env', import.meta.env);

const isMock = import.meta.env.VITE_MOCK_SERVER_YN === 'Y';

/**
 * vite 환경변수에 따른 도메인 설정
 * @returns {string} 도메인
 */
export const targetApiDomain = (): string => {
  if (isMock) {
    return import.meta.env.VITE_MOCK_API_DOMAIN;
  }
  return import.meta.env.VITE_API_DOMAIN;
};
