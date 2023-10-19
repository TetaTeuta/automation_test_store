const { defineConfig } = require("cypress");

module.exports = defineConfig({
    screenshotsFolder: "cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require("./cypress/plugins/index.js")(on, config);
        },
        specPattern: "cypress/e2e/**/*.{spec.js,feature}",
        baseUrl: "https://automationteststore.com/",
    },
    env: {
        loginUrl: "index.php?rt=account/login",
        homeUrl: "/",
    },
});
