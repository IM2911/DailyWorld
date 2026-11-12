import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3002',
    viewport: { width: 1440, height: 900 },
  },
  projects: [
    {
      name: 'chromium',
    },
    {
      name: 'Mobile Chrome',
      use: {
        viewport: { width: 390, height: 844 },
      },
    },
  ],
});
