// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        destination: resolve(__dirname, "src/pages/destinations.html"),
        crew: resolve(__dirname, "src/pages/crew.html"),
        technology: resolve(__dirname, "src/pages/technology.html"),
      },
    },
  },
});
