import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    circleDependency({
      outputFilePath: './circleDep',
    }),
  ],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, '.') }],
  },
});
