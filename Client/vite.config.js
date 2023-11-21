import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "server": {
      target: "http://localhost:1001",
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
});


