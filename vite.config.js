import { fileURLToPath, URL }   from 'url'
import { defineConfig }         from 'vite'
import vue                      from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/global" as *;`
      }
    }
  },
})
