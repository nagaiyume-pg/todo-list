import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "react/react-in-jsx-scope": "off",
  },
  // Add Prettier plugin and config
  "plugin:prettier/recommended",
  {
    // Optionally, disable some ESLint rules that Prettier handles
    rules: {
      "prettier/prettier": ["error"],
    },
  },
];
