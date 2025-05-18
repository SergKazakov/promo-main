import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import eslintPluginImport from "eslint-plugin-import"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

export default defineConfig([
  { ignores: ["dist"] },
  js.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReactHooks.configs["recommended-latest"],
  eslintPluginPrettier,
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: { globals: globals.browser },
    plugins: { import: eslintPluginImport },
    settings: { react: { version: "detect" } },
    rules: {
      "import/order": [
        "error",
        { "newlines-between": "always", alphabetize: { order: "asc" } },
      ],
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-sort-props": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
    },
  },
])
