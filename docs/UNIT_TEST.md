# UNIT Tests

This documentation covers everything about developing and running the UNIT tests.

## Introduction to E2E Tests

#### What is an E2E Test?
Unit tests allow you to test individual units of code in isolation. 
The purpose of unit testing is to provide developers with confidence in their code.


#### How do we test the UI?

We're using an automated framework [Mocha](https://mochajs.org).
With [Chai](https://www.chaijs.com) - BDD / TDD assertion library for node and the browser


## Running UNIT Tests

#### How to run the tests?

1. Build the app locally

    The testing framework needs to access the page, therefore we need to run the development server first.
    See [this section](./FRONTEND.md#installation-and-development).

1. Launching the test runner
    
    Use this command:
    ```
    npm run test:unit
    ```

