import { defineConfig } from 'vite'

export default defineConfig({
  // Sostituisci 'dovesivola' con il nome esatto del tuo repository GitHub
  base: '/dovesivola/',
  server: {
    open: '/dovesivola/',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
