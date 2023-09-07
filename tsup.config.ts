import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { exec } from "child_process";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["./components/**/*.ts"],
  esbuildPlugins: [cssModulesPlugin()],
  format: "esm",
  injectStyle: true,
  dts: true,
  splitting: true,
  outDir: "dist",
  // esbuildOptions(options, context) {
  //   options.banner = {
  //     js: '"use client";',
  //   };
  // },
  async onSuccess() {
    exec("mv dist/components/* dist");
    // To share the config file with the consuming projects, we need to export it
    exec("cp tailwind.config.js dist/tailwind.config.js");
  },
});
