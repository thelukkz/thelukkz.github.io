import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'legacy-js-api']
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})
