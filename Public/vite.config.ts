import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
  // build: {
  //   rollupOptions: {
  //     external: ['aos/dist/aos.css'] // Si deseas externalizar el módulo
  //   }
  // }
})
