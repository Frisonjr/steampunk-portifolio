import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminho do site no GitHub Pages: https://frisonjr.github.io/steampunk-portifolio/
  base: '/steampunk-portifolio/',
})
