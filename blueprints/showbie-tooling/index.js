// jscs:disable
/*jshint node:true*/
module.exports = {
  description: 'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-suave', target: '1.2.3' },
        { name: 'ember-cli-code-coverage', target: '0.1.0' }
      ]
    });
  }
};
