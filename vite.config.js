import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages project site path
  base: '/paraglidespot/',
  server: {
    open: '/paraglidespot/',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
