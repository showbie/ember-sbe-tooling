module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  rules: {
    // Code style.
    semi: ['error', 'always'],

    // Custom Ember rules.
    'ember/new-module-imports': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-global-jquery': 'error',
    'ember/require-super-in-init': 'error',
  },
};
