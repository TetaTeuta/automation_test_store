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
        accUrl: "index.php?rt=account/account",
        cartUrl: "index.php?rt=checkout/cart",
        logoutUrl: "index.php?rt=account/logout",
        logoutMsg:
            "You have been logged off your account. It is now safe to leave the computer.",
    },
});
