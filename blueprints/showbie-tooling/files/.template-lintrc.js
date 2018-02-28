module.exports = {
  extends: 'recommended',
  ignore: ['dummy/**/*'],
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
  },
};
