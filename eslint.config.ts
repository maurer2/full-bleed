import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

export default defineConfig(
  globalIgnores(["dist/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        // Let the svelte parser hand <script lang="ts"> blocks to the TS parser.
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
        svelteConfig,
      },
    },
  },
);
