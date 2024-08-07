import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: ['html'], // vitest 결과 html 출력물 생성
  },
});
