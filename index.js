module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
}
