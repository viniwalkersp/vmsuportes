import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vmsuportes/', // 🔹 Certifique-se de que esse é o nome EXATO do seu repositório!
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
