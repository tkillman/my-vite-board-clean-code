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
});
