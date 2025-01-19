const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://www.saucedemo.com/',
    baseUrl: 'https://magento.softwaretestingboard.com/',
    
    env:{
      // email: "TeSt123098@gmail.com",
      // password: "TeSt123098",

      // incorrect_username: "standard_users",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 750,
    viewportWidth: 1500,
  },
});
