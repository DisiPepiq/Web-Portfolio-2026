import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/Web-Portfolio-2026/', 
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
});
