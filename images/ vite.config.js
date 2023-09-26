// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    exclude: ['node_modules', 'dist', '_script', '_extra']
  },
  esbuild: {
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment',
    //jsxInject: `import React from 'react'`,
  },
})