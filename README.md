[![Version](https://img.shields.io/npm/v/@philihp/eslint-config)](https://www.npmjs.com/package/@philihp/eslint-config)
[![tests](https://github.com/philihp/eslint-config/actions/workflows/tests.yml/badge.svg)](https://github.com/philihp/eslint-config/actions/workflows/tests.yml)
![Downloads](https://img.shields.io/npm/dt/@philihp/eslint-config)
![License](https://img.shields.io/npm/l/@philihp/eslint-config)

A personal flat-config preset for ESLint 9, covering JavaScript, TypeScript, React, Jest, JSON, and Prettier.

## Installation

```bash
npm install --save-dev @philihp/eslint-config eslint
```

Create an `eslint.config.js` at the root of your project:

```js
import config from '@philihp/eslint-config'

export default config
```

To extend or override, spread the array and append your own entries:

```js
import config from '@philihp/eslint-config'

export default [
  ...config,
  {
    rules: {
      'no-console': 'off',
    },
  },
]
```

## Requirements

- Node.js 20 or newer
- ESLint 9

## What's included

- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react` (flat) + `jsx-runtime`
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-jsx-a11y` recommended
- `eslint-plugin-import-x` recommended (+ TypeScript resolver)
- `eslint-plugin-jest` recommended + style, scoped to test files
- `@eslint/json` recommended, for `.json` and `.jsonc`
- `eslint-plugin-prettier` recommended, applied last

## Usage

The following packages use this config and can be referenced as examples:

- https://github.com/philihp/thirtyrails/
- https://github.com/philihp/fast-shuffle/
- https://github.com/philihp/score/
- https://github.com/philihp/nanbox/
- https://github.com/theunhatched/unhatched/
- https://github.com/philihp/openskill.js
