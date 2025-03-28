import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "absproxy/5173",
  server: {
    allowedHosts: [
      'localhost',
      'd2uy18bs8rszpj.cloudfront.net'
    ]
  }
})