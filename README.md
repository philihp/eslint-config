## Installation

Includes peer dependencies and sets everything up. All you need to do is have a package.json that looks like

```bash
npm install --save-dev @philihp/eslint-config
```

and then create an `.eslintrc` (or add `eslintConfig` to your package.json) with the following

```json
{
  "extends": ["@philihp"]
}
```
