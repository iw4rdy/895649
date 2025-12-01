import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // If you are deploying under a sub-path (for example GitHub Pages at
  // https://<user>.github.io/sentrix-cybersecurity/), set the base path
  // so built asset URLs resolve correctly in production.
  //
  // If you host at the domain root (e.g. https://example.com/), you can
  // change this back to '/'.
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
