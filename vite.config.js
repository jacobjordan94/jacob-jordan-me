import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    sitemapPlugin({
      hostname: 'https://jacob-jordan.me',
      dynamicRoutes: [
        '/about',
        '/projects',
        '/experience',
        '/skills',
        '/resume'
      ],
    })
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: 'https://0.0.0.0:3000'
  }
})
