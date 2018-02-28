# ember-sbe-tooling

[![npm version][npm-ver]][npm]
[![Circle CI][circleci-status]][circleci]

This addon is for internal use on Showbie's Ember projects to enforce a
consistent coding standard. We will not accept external pull requests but feel
free to take inspiration from it.

## Usage

```sh
ember install ember-sbe-tooling
```

To update the addon, you should be able to simply re-run the above command. If
needed you can also run the blueprints independently:

```sh
ember g showbie-tooling
```

Note that you should ensure you are using the appropriate version of Node/npm:

```sh
nvm use
```

## Style enforcement

This addon provides configuration for the following tools:

- CircleCI
- editorconfig
- ember-cli-release
- eslint
- nvm
- pre-commit
- prettier
- stylelint
- testem
- yarn

## IDE integration

For realtime feedback in your editor, you may need to install
[eslint-plugin-ember][] globally:

```sh
npm i -g eslint-plugin-ember
```

## Contributing

### Installation

- `git clone` this repository
- `yarn install`

### Running Tests

- `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)

For more information on using ember-cli, visit <http://www.ember-cli.com/>.

[npm]: https://npmjs.org/

[npm-ver]: https://img.shields.io/npm/v/ember-sbe-tooling.svg?style=flat-square

[circleci]: https://circleci.com/gh/showbie/ember-sbe-tooling

[circleci-status]: https://img.shields.io/circleci/project/github/showbie/ember-sbe-tooling.svg?style=flat-square

[eslint-plugin-ember]: https://github.com/ember-cli/eslint-plugin-ember
