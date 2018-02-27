module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  rules: {
    // Code style.
    semi: ['error', 'always'],

    // Custom Ember rules.
    'ember/no-empty-attrs': 'warn',
    'ember/no-observers': 'warn',
    'ember/use-ember-get-and-set': 'warn',

    'ember/order-in-components': 'warn',
    'ember/order-in-controllers': 'warn',
    'ember/order-in-models': 'warn',
    'ember/order-in-routes': 'warn',
  },
  globals: {},
};
