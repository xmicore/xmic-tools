import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "target/dist",
    assetsDir: "static"
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8070',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
