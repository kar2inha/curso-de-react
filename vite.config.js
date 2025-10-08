import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
   server:{
   host:"0.0.0.0",
   watch:{
    usePolling: true,
    interval: 100,
   },
   port: 5173,
  },
})
