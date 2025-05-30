/// <reference types='vitest' />
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
// Ensure @nx/vite is installed to resolve this import
// The import path for vite-tsconfig-paths plugin is typically '@nx/vite/plugins/vite-tsconfig-paths.plugin'
// If you are seeing a "Cannot find module" error, ensure @nx/vite is installed correctly.
// If the path below is incorrect for your version of @nx/vite, you might need to adjust it.
// import { viteTsConfigPaths } from '@nx/vite/plugins/vite-tsconfig-paths.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

// @ts-ignore
export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react(), splitVendorChunkPlugin(), nxViteTsPaths({
    root: '../../' // Chemin vers la racine du workspace
  })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    }
  },

  resolve: {
    alias: {
      '@globals': path.resolve(__dirname, './src/app/globals'),
      '@components': path.resolve(__dirname, './src/app/components'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@hooks': path.resolve(__dirname, './src/app/hooks'),
      '@utils': path.resolve(__dirname, './src/app/utils'),
      '@assets': path.resolve(__dirname, './src/app/assets'),
      '@services': path.resolve(__dirname, './src/app/services'),
      '@types': path.resolve(__dirname, './src/app/types'),
      '@contexts': path.resolve(__dirname, './src/app/contexts'),
      '@store': path.resolve(__dirname, './src/app/store'),

      // ... vos autres alias
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, './src/app/globals/_var.css')}";`,
      },
    },
  },

}));
