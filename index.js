module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    // trust in jordan on everything, except he's wrong about semi
    'airbnb',
    'airbnb/hooks',
    // always put prettier last to avoid thrashing conflicts
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/function-component-definition': [
      // these are prettier
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'import/no-default-export': 'off', // things like next.js need this for components, but otherwise it would be a warn
    // especially because of this: https://github.com/philihp/openskill.js/issues/627
    'import/extensions': [
      // typescript
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['setup-tests.js', '**/__tests__/*.test.js'],
      },
    ],
    'import/prefer-default-export': 'off', // https://stackoverflow.com/a/68665805/643928
    'jsx-a11y/anchor-is-valid': 0,
    'no-bitwise': 'off', // but what if you want to use bitwise operators?
    'no-plusplus': 'off', // but what if you want to use the ++ operator?
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-shadow': 'off', // this can result in cleaner code, and is mitigated by decent testing
  },
}
