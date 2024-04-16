import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { config } from 'dotenv'

config({ path: '../.env' })

const clientPort = parseInt(process.env.CLIENT_PORT as string) || 5173
const serverPort = parseInt(process.env.SERVER_PORT as string) || 3000
const serverUrl = process.env.SERVER_URL || `http://localhost:${serverPort}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    port: clientPort,
    proxy: {
      '/api': serverUrl
    }
  }
})
