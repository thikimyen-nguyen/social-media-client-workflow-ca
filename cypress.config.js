const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    "VALID_EMAIL": "ntkyen@stud.noroff.no",
    "VALID_PASSWORD": "123456789"
  }
});
