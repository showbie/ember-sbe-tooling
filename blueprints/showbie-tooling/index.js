/* eslint-env node */
module.exports = {
  description:
    'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    // eslint-disable-next-line ember/named-functions-in-promises
    return this.removePackagesFromProject([
      { name: 'ember-suave' },
      { name: 'eslint-plugin-ember-suave' },
    ]).then(() => {
      return this.addPackagesToProject([
        { name: 'eslint-plugin-ember', target: '^4.5.0' },
        { name: 'lodash.samplesize', target: '~4.2.0' }, // strictly for config/release
      ]);
    }).then(() => {
      return this.addAddonsToProject({
        packages: [
          { name: 'ember-cli-eslint', target: '^4.0.0' },
          { name: 'ember-cli-code-coverage', target: '~0.3.4' },
        ],
      });
    });
  }
};
