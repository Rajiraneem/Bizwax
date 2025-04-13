import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss(),
    compression({
    verbose: true,
    disable: false,
    threshold: 10240, // Only compress files bigger than 10kb
    algorithm: 'gzip', // or 'brotliCompress'
    ext: '.gz',
  }),
  compression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'brotliCompress',
    ext: '.br',
  }),],
});