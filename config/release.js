const fs = require('fs');

const Changelog = require('lerna-changelog');
const sampleSize = require('lodash.samplesize');
const Slack = require('node-slack');

// Look for slack configuration in the environment.
const hookURL = process.env.SLACK_HOOK_URL;

// For details on each option run `ember help release`.
module.exports = {
  remote: 'upstream',
  message: ':bookmark: Release %@',

  beforeCommit(project, tags) {
    // Update README documentation with current version tag.
    fs.writeFileSync(
      './README.md',
      fs
        .readFileSync('./README.md', 'utf8')
        .replace(new RegExp(tags.latest, 'g'), tags.next)
    );
  },

  // Notify Slack when a new release is created (channel and username
  // configured in Slack integration).
  afterPush(project, tags) {
    if (hookURL) {
      let slack = new Slack(hookURL);
      let kudos = sampleSize(CELEBRATE, 7).join(' ');

      return slack.send({
        text: `*${project.name()}* ${tags.next} just dropped ${kudos}`,
      });
    }
  },
};

function outputChangelog(newVersion) {
  return new Promise((resolve, reject) => {
    var masthead = `# Change Log

[![Keep a Changelog](https://img.shields.io/badge/keep%20a-changelog-ef5e39.svg?style=flat-square)](https://keepachangelog.com)
[![Semantic Versioning](https://img.shields.io/badge/semantic-versioning-333333.svg?style=flat-square)](https://semver.org)

All notable changes to this project will be documented in this file.
`;
    var oldContent = fs.readFileSync('./CHANGELOG.md', 'utf8');
    var content = '';

    if (oldContent.indexOf('') !== -1) {
      oldContent = oldContent.substring(oldContent.indexOf(''));
    }

    let options = {
      tagFrom: tags.latest,
      tagTo: tags.next,
    };

    content += await (new Changelog(options)).createMarkdown();
    fs.writeFileSync(
      './CHANGELOG.md',
      header + '\n' + (content + oldContent).replace(/\n+$/, '\n'),
      'utf8'
    );

    return resolve();
  });
}

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
  ':tada:',
  ':two_hearts:',
];
