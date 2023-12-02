import autoprefixer from "autoprefixer";
import { resolve } from "path";
import pxtorem from "postcss-pxtorem";
import { ConfigEnv, defineConfig } from "vite";
import dts from "vite-plugin-dts";
import removeConsole from "vite-plugin-remove-console";
import {
  dependencies,
  devDependencies,
  peerDependencies,
} from "./package.json";

export default (props: ConfigEnv) => {
  // windows에서는 '/'로 path를 구분하지 않고 '\\'로 구분해서 호환성 추가
  // const name: string =
  //   __dirname.replaceAll("\\", "/").split("/").pop() ?? "temp";

  console.log(`@@ Executed vite config file path is ${process.cwd()}`);
  return defineConfig({
    ...props,
    build: {
      lib: {
        entry: resolve(__dirname, "./lib/index.tsx"),
        // name: "index",
        formats: ["es"],
      },
      target: "esnext",
      rollupOptions: {
        external: [
          ...Object.keys(dependencies),
          ...Object.keys(peerDependencies),
          ...Object.keys(devDependencies),
          "react/jsx-runtime",
        ],
        output: {
          esModule: true,
          exports: "named",
          // inlineDynamicImports: true,
          globals: {
            react: "React",
            "react/jsx-runtime": "React.JSX",
            i18next: "i18next",
          },
          // preserveModules: true,
          // preserveModulesRoot: "./lib",
        },
      },
    },
    // envDir: ROOT_PATH,
    // envPrefix: ["VITE_", "LC_"],
    plugins: [
      removeConsole(),
      dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" }),
    ],
    css: {
      // https://vitejs.dev/config/shared-options.html#css-postcss
      postcss: {
        plugins: [
          // https://github.com/postcss/autoprefixer
          // add vendor prefixes
          autoprefixer(),
          // https://github.com/cuth/postcss-pxtorem
          // Figma 단위인 px을 rem으로 일괄 변경 관리
          pxtorem({
            propList: ["*"],
          }),
        ],
      },
    },
  });
};
