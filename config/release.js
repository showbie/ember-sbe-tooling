const Slack = require('node-slack');
const sampleSize = require('lodash.samplesize');

// Look for slack configuration in the environment
const hookURL = process.env.SLACK_HOOK_URL;

// For details on each option run `ember help release`
module.exports = {
  // Notify Slack when a new release is created (channel and username configured in Slack integration)
  afterPush(project, tags) {
    if (hookURL) {
      let slack = new Slack(hookURL);
      let kudos = sampleSize(CELEBRATE, 7).join(' ');

      return slack.send({
        text: `*${project.name()}* ${tags.next} just dropped ${kudos}`
      });
    }
  }
};

const CELEBRATE = [
  ':+1:',
  ':100:',
  ':bangbang:',
  ':bangbang:',
  ':beers:',
  ':bomb:',
  ':boom:',
  ':checkered_flag:',
  ':clap:',
  ':cocktail:',
  ':cool:',
  ':dart:',
  ':dizzy:',
  ':dollar:',
  ':eyes:',
  ':facepunch:',
  ':fire:',
  ':gift_heart:',
  ':hammer_and_wrench:',
  ':heart_eyes:',
  ':heart:',
  ':mindblown:',
  ':money_with_wings:',
  ':muscle:',
  ':neckbeard:',
  ':new:',
  ':ok_hand:',
  ':raised_hands:',
  ':ribbon:',
  ':rocket:',
  ':shipit:',
  ':smiley_cat:',
  ':sparkles:',
  ':star:',
  ':star2:',
  ':stars:',
  ':sunglasses:',
  ':tada:'
  ':two_hearts:',
];
