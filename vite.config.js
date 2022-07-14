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
      outDir:'docs'
    }
  })