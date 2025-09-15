import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

import json from "@eslint/json";
import css from "@eslint/css";

import svelteConfig from "./svelte.config.js";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [
      "!.env.example",
      ".DS_Store",
      ".env.*",
      ".env",
      ".svelte-kit/",
      ".vscode",
      "build/",
      "node_modules/",
      "package.json",
      "package-lock.json",
      "package/",
      "pnpm-lock.yaml",
      "tsconfig.json",
      "yarn.lock",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: tseslint.parser,
        svelteConfig,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    rules: {
      "svelte/no-navigation-without-resolve": ["error", { ignoreLinks: true }],
      "svelte/require-each-key": "warn",
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
);
