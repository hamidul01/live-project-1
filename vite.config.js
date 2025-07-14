import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
      },
    },
  },
});



// // vite.config.js
// import { defineConfig } from 'vite'
// import { resolve } from 'path'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         blog: resolve(__dirname, 'blog.html'),
//       },
//     },
//   },
//   base: './', // যেন relative path হয় Netlify এর জন্য
// })
