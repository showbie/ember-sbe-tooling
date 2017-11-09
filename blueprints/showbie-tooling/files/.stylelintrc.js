module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'selector-class-pattern': ['^[a-z0-9\\-_]+$'],

    'order/properties-alphabetical-order': null,
  },
};
