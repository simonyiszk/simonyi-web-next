import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'public',
      'src/@types/generated',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig
