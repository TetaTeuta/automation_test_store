# Automation test store

Test suite generated from [cypress-boilerplate](https://github.com/guiyomh/cypress-boilerplate.git)

## Tech

-   Cypress - Fast, easy and reliable testing for anything that runs in a browser.

## Installation

Project requires [Node.js](https://nodejs.org/) v10.15+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:TetaTeuta/automation_test_store.git
$ cd automation_test_store
$ npm i
```

Create new file cypress.env.json and copy the content of cypress.env.sample.json into the newvly created env file. Replce dumy data with correct one (you will have to register your own account on automationteststore.com for this purposes - sorry, security first)

## Plugins

| Plugin                        |
| ----------------------------- |
| cypress-cucumber-preprocessor |
| cypress-multi-reporters       |
| cypress-visual-regression"    |

## Usage

```sh
$ npm cypress:run - this command runs all tests
$ npm cypress:open - this command opens cypress GUI

```
