import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: "./src",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    viteCommonjs(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
