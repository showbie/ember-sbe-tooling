/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sbe-tooling',

  config() {
    return {
      babel: {
        plugins: ['transform-object-rest-spread'],
      },
      'ember-cli-babel': {
        includePolyfill: true,
      },
    };
  },
};
