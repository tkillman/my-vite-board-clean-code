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
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '~/components',
        replacement: path.resolve(__dirname, 'src/ui/components'),
      },
      {
        find: '~/views',
        replacement: path.resolve(__dirname, 'src/ui/views'),
      },
      {
        find: '~/controllers',
        replacement: path.resolve(__dirname, 'src/application/controllers'),
      },
      {
        find: '~/presenters',
        replacement: path.resolve(__dirname, 'src/application/presenters'),
      },
      {
        find: '~/services',
        replacement: path.resolve(__dirname, 'src/application/services'),
      },
      {
        find: '~/entities',
        replacement: path.resolve(__dirname, 'src/entities/'),
      },
    ],
  },
});
