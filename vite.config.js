import vue                      from '@vitejs/plugin-vue'
import { defineConfig }         from 'vite'
// import svgLoader                from 'vite-svg-loader'
// import vitePluginRequire        from 'vite-plugin-require'
import { fileURLToPath, URL }   from 'url'


export default defineConfig({
  resolve: {
    alias: [
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_global.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    // svgLoader(),
    // vitePluginRequire,
  ]
})

