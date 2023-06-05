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
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                exports: "named",
            },
        ],
        plugins: [
            external(),
            replace({
                "process.env.NODE_ENV": JSON.stringify("production"),
            }),
            resolve(),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                minimize: true,
                inject: {
                    insertAt: "top",
                },
                plugins: [tailwindcss(tailwindConfig)],
                modules: false,
                purge: true
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
           
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
