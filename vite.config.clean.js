import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          motion: ['framer-motion']
        }
      }
    },
    target: 'es2015',
    minify: 'terser',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
})
