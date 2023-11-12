# Workflow CA Project

[![Deploy static content to Pages](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/pages.yml)
[![Automated E2E Testing](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/unit-test.yml)
[![Code Review](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/gpt.yml/badge.svg)](https://github.com/thikimyen-nguyen/social-media-client-workflow-ca/actions/workflows/gpt.yml)

This is a forked repo from https://github.com/NoroffFEU/social-media-client for Workflow Course Assignment. In this CA, we need to config workflow environment and writing unit tests and e2e tests to the project.
## Project Configuration
### Workflow environment
Configuration In workflow-formatting branch:
- Prettier
- ESLint 
- Pre-commit hooks  
The project requirements is to set up but not to run prettier and eslint on existing files. If you would like to do so, you can clone the repo and merge.
### Testing
Install and config on workflow branch for working on unit test and e2e test.
- Jest
- Cypress 
- Babel
- Automated testing on pull request
#### Unit test
The test files can be found in src/js/test with 02 test cases:
- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

#### E2E test
The test files can be found in cypress/e2e/testing with 03 test cases: 
- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button
  
Run the tests:

```bash
npm test
