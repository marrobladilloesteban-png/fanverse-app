import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/fanverse-app/',  // 👈 ESTA LÍNEA ES NECESARIA PARA GITHUB PAGES
  plugins: [react(), tailwindcss()],
})
