# Cypress-boilerplate

Cypress boilerplate is a starter kit to help you to create end to end test

## Tech

Cypress-boilerplate uses a number of open source projects to work properly:

-   node.js - evented I/O for the backend
-   Mocha - simple, flexible, fun javascript test framework for node.js & the browser
-   Cypress - Fast, easy and reliable testing for anything that runs in a browser.

And of course Cypress-boilerplate itself is open source with a public repository

## Installation

Cypress boilerplate requires [Node.js](https://nodejs.org/) v10.15+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/guiyomh/cypress-boilerplate.git
$ cd cypress-boilerplate
$ npm run setup
```

## Plugins

| Plugin                        |
| ----------------------------- |
| cypress-cucumber-preprocessor |
| cypress-multi-reporters       |
| cypress-visual-regression"    |

## Usage

```sh
$ node ./cypress/runner.js --help

This command run cypress end to end tests

Usage: runner.js [options]

Options:
  --version, -V      Affiche le numéro de version                      [booléen]
  -h, --help         Affiche de l'aide                                 [booléen]
  --baseUrl, -u      The target url where the tests are run             [requis]
  --browser, -b      The browser                     [requis] [défaut: "chrome"]
  --concurrency, -c  The number of tests run in parallel             [défaut: 1]
```

## License

MIT
