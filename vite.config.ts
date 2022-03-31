import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // NOTE: scssファイルの読み込み
        // https://www.fixes.pub/program/925087.html
        additionalData: `@import "@/assets/_variables.scss";`
      }
    }
  },
})
