const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env:{
      correct_username: "standard_user",
      incorrect_username: "standard_users",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 750,
    viewportWidth: 1500,
    // defaultCommandTimeout: 3000,
    // screenshotOnRunFailure: false,
  },
});
