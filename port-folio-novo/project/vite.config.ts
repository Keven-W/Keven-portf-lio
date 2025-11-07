import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// substitua /repo-name/ pelo nome do seu repo
export default defineConfig({
  base: '/Keven-portf-lio/',
  plugins: [react()],
})
