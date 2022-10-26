# Kamu Web UI Cypress

### Technologies:

- TypeScript, version: 4.6.4;
- [Node.js](https://nodejs.org/en/download/releases/), version: 14.20.x;
- [Cypress](https://github.com/cypress-io/cypress), version 10.7.0.

### Libraries:

- [Prettier](https://www.npmjs.com/package/prettier), version: 2.5.1;
- [ESLint](https://github.com/eslint/eslint), version: 8.22.0;

## Preparation

Do it once:

- download and install [Node.js](https://nodejs.org/en/download/releases/), version: 14.20.x

or

- install Node.js with [Node.js Version Manager](https://github.com/nvm-sh/nvm).

  Using `nvm` (Node.js Version Manager) makes it easier to install and manage multiple versions of Node.js on a single local environment.

  To install a specific version of node: `nvm install 14.20`

1. Install packages that project depends on: `npm install` and `npm run install_pretty_quick`
2. Run application locally: `ng serve` or `npm run start`

## Run Linting

Run `npm run lint` static analyzer to ensure the source files are not violating Typescript or Cypress-framework specific coding rules.

## Code prettier

Run `npm run prettier` for enforce consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Running e2e-tests

The test will by default attempt to connect to the application server running on `http://localhost:4200`.
The application server must be externally launched before running e2e-tests.
Run `npm run cypress:run` to execute tests non-interactively.
Run `npm run cypress:open` to execute or debug tests via Cypress graphical features.
