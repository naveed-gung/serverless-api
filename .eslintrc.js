module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off', // Allow console in Lambda functions
    'comma-dangle': ['error', 'never'],
    'max-len': ['warn', { code: 120 }],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off'
  }
};
