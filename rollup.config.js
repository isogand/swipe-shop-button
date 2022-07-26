import {nodeResolve} from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-polyfill-node";
import sourcemaps from "rollup-plugin-sourcemaps";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import external from "@yelo/rollup-node-external";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";

const split = pkg.main.split("/");
const fileName = split[split.length - 1].split(".")[0];

const PRODUCTION =
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

export default [
    {
        input: `src/main.ts`,
        plugins: [
            nodeResolve(),
            nodePolyfills(),
            sourcemaps(),
            commonjs(),
            typescript({
                clean: true,
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                    },
                },
            }),
            babel({
                babelrc: true,
                extensions: [".js", ".ts", ".tsx"],
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ],
            }),
            // PRODUCTION && terser(),
        ],
        external: external(),
        output: [
            {
                file: `lib/${fileName}.es.js`,
                format: "es",
                sourcemap: true,
                globals: [],
            },
        ],
    },
    {
        input: "./lib/main.d.ts",
        output: [{file: "lib/index.d.ts", format: "es"}],
        plugins: [dts()],
        watch: true,
    },
];
