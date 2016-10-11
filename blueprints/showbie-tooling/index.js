/* eslint-env node */
module.exports = {
  description: 'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  beforeInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-eslint', target: '~3.0.0' },
        { name: 'ember-cli-code-coverage', target: '~0.3.4' }
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'eslint-plugin-ember-suave', target: '~1.0.0' },
        { name: 'lodash.samplesize', target: '^4.2.0' }
      ]);
    });
  },

  afterInstall() {
    return this.removePackagesFromProject([
      { name: 'ember-suave' }
    ]);
  }
};
