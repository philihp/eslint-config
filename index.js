import js from '@eslint/js'
import json from '@eslint/json'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import jest from 'eslint-plugin-jest'
import importX from 'eslint-plugin-import-x'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const noUnusedVarsOptions = {
  argsIgnorePattern: '^_',
  varsIgnorePattern: '^_',
  caughtErrorsIgnorePattern: '^_',
}

const SOURCE_FILES = ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}']
const TS_FILES = ['**/*.{ts,tsx,mts,cts}']
const TEST_FILES = ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{test,spec}.{js,jsx,ts,tsx}']

const scoped = (files, config) => ({ ...config, files })

export default [
  {
    ignores: ['node_modules/**', 'coverage/**', 'build/**', 'dist/**', '.next/**'],
  },

  {
    files: SOURCE_FILES,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  scoped(SOURCE_FILES, js.configs.recommended),
  ...tseslint.configs.recommended.map((c) => scoped(SOURCE_FILES, c)),
  scoped(SOURCE_FILES, importX.flatConfigs.recommended),
  scoped(TS_FILES, importX.flatConfigs.typescript),
  scoped(SOURCE_FILES, react.configs.flat.recommended),
  scoped(SOURCE_FILES, react.configs.flat['jsx-runtime']),
  scoped(SOURCE_FILES, reactHooks.configs.flat.recommended),
  scoped(SOURCE_FILES, jsxA11y.flatConfigs.recommended),

  scoped(TEST_FILES, jest.configs['flat/recommended']),
  scoped(TEST_FILES, jest.configs['flat/style']),

  // JSON
  {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json'],
    language: 'json/json',
    plugins: { json },
    rules: json.configs.recommended.rules,
  },
  {
    files: ['**/*.jsonc', '**/tsconfig*.json', '**/.vscode/*.json'],
    language: 'json/jsonc',
    plugins: { json },
    rules: json.configs.recommended.rules,
  },

  scoped(SOURCE_FILES, prettierRecommended),

  // Personal preferences — applied last so they win
  {
    files: SOURCE_FILES,
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': ['error', noUnusedVarsOptions],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'import-x/extensions': [
        'error',
        'ignorePackages',
        { js: 'always', jsx: 'always', mjs: 'always', cjs: 'always', ts: 'never', tsx: 'never' },
      ],
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'setup-tests.{js,ts}',
            '**/__tests__/**',
            '**/*.{test,spec}.{js,jsx,ts,tsx}',
            'eslint.config.{js,mjs,cjs}',
          ],
        },
      ],
    },
  },

  // TypeScript: defer no-unused-vars to the TS-aware rule
  {
    files: TS_FILES,
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', noUnusedVarsOptions],
    },
  },
]
