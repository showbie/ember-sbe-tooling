module.exports = {
  // extends: 'recommended',
  ignore: [
    'showbie/templates/noscript',
    'showbie-styleguide/**/*',
    'showbie-ui/**/*',
  ],
  rules: {
    'bare-strings': [
      'Showbie',
      'PRO',
      '‹',
      '›',
      '/',
      '|',
      '*',
      ':',
      '.',
      '...',
      '!',
    ],
    'self-closing-void-elements': false,
  },
};
