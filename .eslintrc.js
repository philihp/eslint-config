const exportedConfig = require('.')

const internalConfig = {
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = {
  ...exportedConfig,
  ...internalConfig,
}
