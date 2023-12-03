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

export default ({ mode }: ConfigEnv) => {
  console.log(`@@ Executed vite config file path is ${process.cwd()}`);
  return defineConfig({
    mode,
    build: {
      lib: {
        entry: [
          resolve(__dirname, "./lib/index.tsx"),
          resolve(__dirname, "./lib/components/index.tsx"),
          resolve(__dirname, "./lib/core/index.tsx"),
          resolve(__dirname, "./lib/utils/index.ts"),
        ],
        name: "index",
        formats: ["es"],
        fileName: "index",
      },
      target: "esnext",
      ssr: true,
      rollupOptions: {
        external: [
          ...Object.keys(dependencies),
          ...Object.keys(peerDependencies),
          ...Object.keys(devDependencies),
          "react/jsx-runtime",
        ],
        output: {
          esModule: true,
          compact: true,
          minifyInternalExports: true,
          indent: false,
          exports: "named",
          // inlineDynamicImports: true,
          globals: {
            react: "React",
            "react/jsx-runtime": "React.JSX",
            "react-dom": "ReactDOM",
            "emotion/react": "@emoton/react",
            "emotion/styled": "styled",
            i18next: "i18next",
          },
          preserveModules: true,
        },
      },
    },
    // envDir: ROOT_PATH,
    // envPrefix: ["VITE_", "LC_"],
    plugins: [
      removeConsole(),
      dts({
        // rollupTypes: true,
        tsconfigPath: "./tsconfig.json",
        exclude: [
          "__tests__",
          ".storybook",
          "dist",
          "**/*.stories.tsx",
          "**/*.test.tsx",
          "vite.config.ts",
        ],
      }),
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
