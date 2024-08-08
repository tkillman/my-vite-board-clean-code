import path from 'path';

import { defineConfig, coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: ['html'], // vitest 결과 html 출력물 생성
    coverage: {
      exclude: ['**/html/**', ...coverageConfigDefaults.exclude], // coverage 제외대상, html 폴더는 제외
    },
  },
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, '.') }],
  },
});
