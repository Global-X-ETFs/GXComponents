import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { exec } from "child_process";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["./components/**/*.ts", "./components/index.ts"],
  esbuildPlugins: [cssModulesPlugin()],
  format: "esm",
  injectStyle: true,
  dts: {
    entry: "./components/index.ts",
  },
  splitting: false,
  outDir: "dist",
  async onSuccess() {
    exec("cp dist/components/ dist/ -r");
    // To share the config file with the consuming projects, we need to export it
    exec("cp tailwind.config.js dist/tailwind.config.js");
  },
});
