/* eslint-env node */
module.exports = {
  description:
    'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  beforeInstall() {
    // eslint-disable-next-line ember/named-functions-in-promises
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-eslint', target: '~3.0.0' },
        { name: 'ember-cli-code-coverage', target: '~0.3.4' },
      ],
    }).then(() => {
      return this.addPackagesToProject([
        { name: 'eslint-plugin-ember', target: '^4.5.0' },
        { name: 'lodash.samplesize', target: '^4.2.0' },
        { name: 'ember-cli-code-coverage', target: '~0.3.4' },
        { name: 'stylelint', target: '~8.2.0' },
        {
          name: 'stylelint-config-property-sort-order-smacss',
          target: '~2.0.0',
        },
        { name: 'stylelint-config-sass-guidelines', target: '~3.1.0' },
        { name: 'stylelint-order', target: '^0.7.0' },
        { name: 'stylelint-scss', target: '~2.1.0' },
        { name: 'stylelint-selector-bem-pattern', target: '~2.0.0' },
      ]);
    });
  },

  afterInstall() {
    return this.removePackagesFromProject([
      { name: 'ember-suave' },
      { name: 'eslint-plugin-ember-suave' },
    ]);
  },
};
