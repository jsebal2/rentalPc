import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  // plugins: [vue(), mkcert()],
  plugins: [vue(),],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // https: true, // ✅ HTTPS 개발 서버 활성화
    proxy: {
      '/auth': 'http://211.239.114.71:3000'
    }
  }
});