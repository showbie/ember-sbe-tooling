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
    'ember/new-module-imports': 'warn',
    'ember/no-attrs-in-components': 'warn',
    'ember/no-duplicate-dependent-keys': 'warn',
    'ember/no-global-jquery': 'warn',
    'ember/require-super-in-init': 'warn',
  },
}
