module.exports = {
  parser: '@babel/eslint-parser',
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
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['setup-tests.js', '**/__tests__/*.test.js'],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-shadow': 'off', // this can result in cleaner code, and is mitigated by decent testing
    'import/prefer-default-export': 'off', // https://stackoverflow.com/a/68665805/643928
    'import/no-default-export': 'warn', // https://stackoverflow.com/a/68665805/643928
  },
}
