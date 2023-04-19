import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [],
    resolve:{
      alias:{
        '@':'/src'
      },
    },
    server: {
      port:3301,
      cors:true,
    },
    base:'./',
    build:{
      outDir:'docs',
      rollupOptions:{
        output:{
          assetFileNames:`html-native-ui.min.css`,
          entryFileNames:`js/demo.js`,
          //dir:"components"
        }
      },
      cssCodeSplit:false
    }
  })