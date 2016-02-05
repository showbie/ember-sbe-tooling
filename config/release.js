/* eslint-disable */
// jscs:disable
/* jshint node:true */
// var RSVP = require('rsvp');
var Slack = require('node-slack');

// Look for slack configuration in the environment
var hookURL = process.env.SLACK_HOOK_URL;

// For details on each option run `ember help release`
module.exports = {
  // Notify Slack when a new release is created (channel and username configured in Slack integration)
  afterPush: function(project, tags) {
    if (hookURL) {
      var slack = new Slack(hookURL);

      return slack.send({
        text: '*' + project.name() + '* ' + tags.next + ' just dropped :bangbang: :100: :100: :fire: :fire: :mindblown: :boom: :eyes :clap:'
      });
    }
  }
};
