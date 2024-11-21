import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore
      '@components': path.resolve(__dirname, 'src/components'),
      // @ts-ignore
      '@composables': path.resolve(__dirname, 'src/composables'),
      // @ts-ignore
      '@stores': path.resolve(__dirname, 'src/stores'),
      // @ts-ignore
      '@models': path.resolve(__dirname, 'src/models'),
    }
  }
})
