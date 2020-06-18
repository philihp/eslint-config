module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:unicorn/all',
    'plugin:jest/all',
    // trust in jordan on everything, except he's wrong about semi
    'airbnb',
    'airbnb/hooks',
    // always put prettier last to avoid thrashing conflicts
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['setupTests.js', '**/__tests__/*.test.js'],
      },
    ],
  },
}
