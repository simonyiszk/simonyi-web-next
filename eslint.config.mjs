import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "react/no-unescaped-entities": "off",
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/app/globals.css",
      },
    },
  },
  {
    ignores: [
      ".next",
      ".vercel",
      "node_modules",
      "dist",
      "build",
      "coverage",
      "public",
      "src/@types/generated",
    ],
  },
]

export default eslintConfig
