import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages: base path is repo name (e.g. /Building-the-Digital-Future-of-Saudi-Arabia/)
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  plugins: [vue()],
  base,
})
