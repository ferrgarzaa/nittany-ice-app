import { nodeResolve } from "@rollup/plugin-node-resolve";
import { copy } from "@web/rollup-plugin-copy";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "nittany-ice-app.js",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
    entryFileNames: "[name].js",
    chunkFileNames: "chunks/[name]-[hash].js",
  },
  preserveEntrySignatures: false,
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
      dedupe: ["lit", "lit-element", "lit-html"],
    }),
    esbuild({
      minify: true,
      target: ["chrome64", "firefox67", "safari13", "edge88"],
    }),
    copy({
      patterns: [
        "index.html",
        "favicon.ico",
        "assets/**/*",
      ],
      rootDir: ".",
    }),
  ],
};