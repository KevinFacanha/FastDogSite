import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const reactChunkPattern = /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/;
const supabaseChunkPattern = /[\\/]node_modules[\\/]@supabase[\\/]auth-js[\\/]/;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }

          if (reactChunkPattern.test(id)) {
            return 'react-vendor';
          }

          if (supabaseChunkPattern.test(id)) {
            return 'supabase';
          }

          return 'vendor';
        },
      },
    },
  },
});
