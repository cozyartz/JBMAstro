import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    server: {
      fs: {
        strict: true, // Prevents Vite from accessing files outside project root
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});