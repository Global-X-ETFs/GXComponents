import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import tailwindcss from 'tailwindcss';
import tailwindConfig from "./tailwind.config.js";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            replace({
                "process.env.NODE_ENV": JSON.stringify("production"),
            }),
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extensions: [".css"],
                minimize: true,
                inject: {
                    insertAt: "top",
                },
                plugins: [tailwindcss(tailwindConfig)],
                modules: false
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            dts()
        ],
    }
];
