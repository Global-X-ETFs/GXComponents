import type { Config } from "tailwindcss";
import sharedConfig from "@global-x-etfs/gx-components/tailwind.config.ts";

const config: Pick<Config, "presets" | "content"> = {
  presets: [sharedConfig],
  content: [
    "./node_modules/@global-x-etfs/gx-components/dist/**/*.js",
    "./stories/*.{js,ts,jsx,tsx}",
  ]
};

export default config;
