import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js";
import tailwindNesting from "@tailwindcss/nesting";

export default {
  plugins: [tailwindNesting, tailwind(tailwindConfig), autoprefixer],
};
