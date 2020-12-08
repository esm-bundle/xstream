import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("xstream"),
    output: {
      file: `${dir}/xstream.js`,
      sourcemap: true,
      format,
    },
    plugins: [commonjs(), terser()],
  };
}

export default [createConfig("module"), createConfig("system")];
