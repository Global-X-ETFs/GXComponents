import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { exec } from "child_process";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["./components/index.ts", "./tailwind.config.js"],
  // @ts-expect-error - bug due to inconsistent esbuild versions
  esbuildPlugins: [cssModulesPlugin()],
  format: "esm",
  injectStyle: true,
  splitting: true,
  async onSuccess() {
    // To share the config file with the consuming projects, we need to export it
    exec("cp tailwind.config.js dist/tailwind.config.js");
  },
});
