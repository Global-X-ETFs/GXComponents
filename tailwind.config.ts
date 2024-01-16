import type { Config } from "tailwindcss";
import sharedConfig from "@global-x-etfs/tailwind-config/tailwind.config.ts";

const config: Pick<Config, "presets" | "corePlugins" | "important"> = {
  presets: [sharedConfig],
  corePlugins: {
    preflight: true,
  },
  important: false,
};

export default config;
