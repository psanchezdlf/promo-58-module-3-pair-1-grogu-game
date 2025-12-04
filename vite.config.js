import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/promo-58-module-3-pair-1-grogu-game',
  server: {
    open: '/',
    watch: {
      usePolling: true
    }
  }
})
