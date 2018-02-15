module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-property-sort-order-smacss',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'selector-class-pattern': ['^[a-z0-9\\-_]+$'],
    'selector-no-qualifying-type': [true, { ignore: 'class' }],

    'order/properties-alphabetical-order': null,

    // Temporary rules to reduce error noise.
    'max-nesting-depth': [
      1,
      {
        severity: 'warning',
        ignore: 'blockless-at-rules',
        ignoreAtRules: ['include'],
      },
    ],
    'media-feature-name-no-vendor-prefix': [true, { severity: 'warning' }],
    'property-no-vendor-prefix': [true, { severity: 'warning' }],
    'selector-no-vendor-prefix': [true, { severity: 'warning' }],
    'selector-max-compound-selectors': [3, { severity: 'warning' }],
    'value-no-vendor-prefix': [true, { severity: 'warning' }],

    'scss/selector-no-redundant-nesting-selector': [
      true,
      { severity: 'warning' },
    ],
  },
};
