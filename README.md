[![Dependencies](https://status.david-dm.org/gh/philihp/eslint-config.svg)](https://david-dm.org/philihp/eslint-config)
[![devDependencies](https://status.david-dm.org/gh/philihp/eslint-config.svg?type=dev)](https://david-dm.org/philihp/eslint-config?type=dev)

## Installation

Includes peer dependencies and sets up everything. All you need to do is have a package.json that looks like

```bash
npm install --save-dev @philihp/eslint-config
```

and then create an `.eslintrc` (or add `eslintConfig` to your package.json) with the following

```json
{
  "extends": ["@philihp"]
}
```

## Usage

The following packages use this config, and can be seen as examples of how to use and extend the package, e.g. [turning off specific rules](https://github.com/philihp/fast-shuffle/blob/d77d997d773c43493f61e6333c1033e2c06ddd03/package.json#L79-L82).

- https://github.com/philihp/thirtyrails/
- https://github.com/philihp/fast-shuffle/
- https://github.com/philihp/score/
- https://github.com/philihp/nanbox/
- https://github.com/theunhatched/unhatched/
- https://github.com/philihp/openskill.js
