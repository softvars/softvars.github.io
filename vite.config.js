import { defineConfig } from "vite";

export default defineConfig({
  build: {
    exclude: ["node_modules", "dist", "_script", "_extra"],
  },
  esbuild: {
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment',
    //jsxInject: `import React from 'react'`,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost/softvars/",
        changeOrigin: true,
      },
    },
  },
});
