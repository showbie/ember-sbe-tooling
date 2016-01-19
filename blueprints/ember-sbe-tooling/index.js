// jscs:disable
/*jshint node:true*/
'use strict';

const exec = require('child_process').exec;
const RSVP = require('rsvp');

const { Promise } = RSVP;

module.exports = {
  description: 'Install Showbie code style enforcement configuration and tooling',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  // beforeInstall(options) {
  //   return this.addAddonsToProject({
  //     packages: [
  //       'ember-suave'
  //     ]
  //   });
  // },


  beforeInstall(options) {
    console.log('beforeInstall');
    this.ui.writeLine('Checking for pre-commit on your system');

    // return runShellCommand('which pre-commit')
    return runShellCommand('pre-commit install')
      // .then(() => runShellCommand('pre-commita install'))
      .catch((err) => {
        console.log('ERROR!', err);
        return RSVP.reject('ember-sbe-tooling error. Please ensure pre-commit is installed on your system: `pip install pre-commit && pre-commit install`');
      });
  }
};


function runShellCommand(command) {
  return new Promise((resolve, reject) => {
    let child = exec(command, (error, stdout, stderr) => {
      if (error !== null || stdout === '') {
        reject(stderr);
      }
      console.log('runShellCommand', command, stdout);
      resolve(stdout);
    });
  });
}
