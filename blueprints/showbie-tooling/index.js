/* eslint-env node */
module.exports = {
  description:
    'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    // eslint-disable-next-line ember/named-functions-in-promises
    return this.addPackagesToProject([
      // Used for config/release.
      { name: 'lodash.samplesize', target: '~4.2.0' },
      { name: 'node-slack', target: '~0.0.7' },

      // Linting & formatting packages.
      { name: 'babel-plugin-transform-object-rest-spread', target: '~6.26.0' },
      { name: 'eslint-plugin-ember', target: '~5.0.3' },
      { name: 'prettier-eslint-cli', target: '~4.7.0' },
      { name: 'prettier-stylelint', target: '~0.4.2' },
      { name: 'stylelint', target: '~9.0.0' },
      {
        name: 'stylelint-config-property-sort-order-smacss',
        target: '~2.0.0',
      },
      { name: 'stylelint-config-sass-guidelines', target: '~5.0.0' },
      { name: 'stylelint-order', target: '~0.8.0' },
      { name: 'stylelint-scss', target: '~2.2.0' },
    ]).then(() => {
      return this.addAddonsToProject({
        packages: [
          { name: 'ember-cli-eslint', target: '~4.2.3' },
          { name: 'ember-cli-code-coverage', target: '~0.3.12' },
          { name: 'ember-cli-template-lint', target: '~0.7.5' },
          { name: 'ember-cli-release', target: '~0.2.9' },
        ],
      });
    });
  },
};
