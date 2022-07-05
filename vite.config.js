import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from './postcss.config'
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

// https://vitejs.dev/config/
export default defineConfig({
  mode,
  plugins: [react()],
  css: {
    postcss,
  },

})
