<<<<<<< HEAD
import vue                      from '@vitejs/plugin-vue'
import { defineConfig }         from 'vite'
// import svgLoader                from 'vite-svg-loader'
// import vitePluginRequire        from 'vite-plugin-require'
import { fileURLToPath, URL }   from "url";
=======
import { fileURLToPath, URL }   from 'url'
import { defineConfig }         from 'vite'
import vue                      from '@vitejs/plugin-vue'
>>>>>>> 51dbd1a378cc52d4227c9ffdc7a7e0369efb5f86

export default defineConfig({
  resolve:{
    alias: [
      { find: '@',        replacement: fileURLToPath(new URL('./src',         import.meta.url)) },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
<<<<<<< HEAD
        additionalData: `@use "@/assets/scss/_global.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    // svgLoader(),
    // vitePluginRequire,
  ],
=======
        additionalData: `@use "@/styles/global" as *;`
      }
    }
  },
>>>>>>> 51dbd1a378cc52d4227c9ffdc7a7e0369efb5f86
})
