import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["components/**/*.tsx", "components/index.ts"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: false,
  external: ["react"],
  ...options,
}));
