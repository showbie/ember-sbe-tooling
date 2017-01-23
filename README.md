# ember-sbe-tooling [![Circle CI][circleci-status]][circleci]

This addon is for internal use on Showbie's Ember projects to enforce a consistent coding standard. We will not accecpt external pull requests but feel free to take inspiration from it.

## Usage

```
ember install ember-sbe-tooling
```

To update you should be able to simply re-run the above command.

Note that you should ensure you are using the appropriate version of Node:

```
nvm use
```

## Style enforcement

This addon provides configuration for the following tools:

- nvm
- editorconfig
- testem
- eslint
- scss-lint
- pre-commit
- CircleCI
- ember-cli-release

# Collaboration

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running Inception
When updating this addon, you should run it's generator on itself.

* `ember g showbie-tooling`
* Follow the command line prompts.

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


[circleci]: https://circleci.com/gh/showbie/ember-sbe-tooling
[circleci-status]: https://circleci.com/gh/showbie/ember-sbe-tooling.svg?style=svg&circle-token=765ec6a19d3220402d1f2d3af00c7e8fab6ae7c0
