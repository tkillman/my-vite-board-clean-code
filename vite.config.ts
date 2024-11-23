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
    alias: [
      { find: '~/src', replacement: path.resolve(__dirname, 'src') },
      {
        find: '~/pages',
        replacement: path.resolve(__dirname, 'src/ui/pages'),
      },
      {
        find: '~/component',
        replacement: path.resolve(__dirname, 'src/ui/component'),
      },
      {
        find: '~/controllers',
        replacement: path.resolve(__dirname, 'src/application/controllers'),
      },
      {
        find: '~/entities',
        replacement: path.resolve(__dirname, 'src/entities/'),
      },
    ],
  },
});
