import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const repoName = process.env.REPO_NAME || '';
const BASE_PATH = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  define: {
    __BASE_PATH__: JSON.stringify(BASE_PATH),
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/test/setup.ts',
  },
});
