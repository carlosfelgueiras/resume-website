import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

pluginReactConfig.rules["react/react-in-jsx-scope"] = "off";

export default [
  { ignores: ["dist/"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { settings: { react: { version: "detect" } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
