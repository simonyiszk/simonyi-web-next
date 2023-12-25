/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
    "@typescript-eslint",
  ],
  rules: {
    "react/no-unescaped-entities": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "internal",
            "position": "after",
          },
        ],
        "groups": [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "array-bracket-newline": [
      "warn",
      "consistent",
    ],
    "array-element-newline": [
      "warn",
      "consistent",
    ],
    "object-curly-newline": [
      "warn",
      {
        "consistent": true,
      },
    ],
    "quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": false,
      },
    ],
    "comma-dangle": [
      "warn",
      "always-multiline",
    ],
    "object-curly-spacing": [
      "warn",
      "always",
    ],
    "array-bracket-spacing": [
      "warn",
      "never",
    ],
    "arrow-parens": [
      "warn",
      "always",
    ],
    "semi": [
      "warn",
      "always",
    ],
    "indent": [
      "warn",
      2,
    ],
    "linebreak-style": [
      "warn",
      "unix",
    ],
    "function-paren-newline": [
      "warn",
      "multiline-arguments",
    ],
    "eol-last": [
      "warn",
      "always",
    ],
    "no-trailing-spaces": [
      "warn",
    ],
  },
  "settings": {
    "react": {
      "version": "detect",
    },
    "import/resolver": {
      "typescript": true,
      "node": true,
    },
  },
};

module.exports = config;
