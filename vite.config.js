import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemapPlugin from 'vite-plugin-sitemap'
import path from 'path'

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
        '/resume',
        '/content-policy',
      ],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: ['/'],
        }
      ],
    })
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: 'https://0.0.0.0:3000'
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
