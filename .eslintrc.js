const exportedConfig = require('.')

const internalConfig = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    requireConfigFile: false,
  },
}

module.exports = {
  ...exportedConfig,
  ...internalConfig,
}
