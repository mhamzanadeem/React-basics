import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // use relative base for GitHub Pages; or '/REPO_NAME/' for project pages
  plugins: [react()]
})