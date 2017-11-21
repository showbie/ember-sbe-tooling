/* eslint-env node */
module.exports = {
  description:
    'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    // eslint-disable-next-line ember/named-functions-in-promises
    return this.addPackagesToProject([
      { name: 'eslint-plugin-ember', target: '^4.5.0' },
      { name: 'lodash.samplesize', target: '~4.2.0' }, // strictly for config/release
      { name: 'node-slack', target: '~0.0.7' }, // strictly for config/release
      { name: 'stylelint', target: '~8.2.0' },
      {
        name: 'stylelint-config-property-sort-order-smacss',
        target: '~2.0.0',
      },
      { name: 'stylelint-config-sass-guidelines', target: '~4.0.1' },
      { name: 'stylelint-order', target: '^0.7.0' },
      { name: 'stylelint-scss', target: '~2.1.0' },
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            { name: 'ember-cli-eslint', target: '^4.0.0' },
            { name: 'ember-cli-code-coverage', target: '~0.3.4' },
            { name: 'ember-cli-template-lint', target: '~0.7.5' },
            { name: 'ember-cli-release', target: '^0.2.9' },
          ],
        });
      })
      .then(() => {
        return this.removePackagesFromProject([
          { name: 'ember-suave' },
          { name: 'eslint-plugin-ember-suave' },
        ]);
      });
  },
};
