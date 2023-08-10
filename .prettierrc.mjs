// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Options} */
const config = {
  plugins: [import('prettier-plugin-tailwindcss')],
  printWidth: 140,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  semi: true,
  tabWidth: 2,
  endOfLine: 'lf'
};

export default config;
