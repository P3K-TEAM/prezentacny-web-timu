# E2E Tests

This documentation covers everything about developing and running the E2E tests.

## Table of contents

1. [Introduction to E2E Tests](#introduction-to-E2E-tests)
1. [Running E2E Tests](#running-e2e-tests)

## Introduction to E2E Tests

#### What is an E2E Test?

E2E test tests the application from the end user’s perspective.
It is important to know that an E2E test does not test frontend or backend.
It tests the application as a whole (all components successfully integrated together).

#### How do we test the UI?

We're using an automated framework [Cypress](https://www.cypress.io/).
It is able to simulate real user behaviour e.g. clicks, typing text etc.

## Running E2E Tests

#### How to run the tests?

1. Build the app locally

    The testing framework needs to access the page, therefore we need to run the development server first.
    See [this section](./FRONTEND.md#installation-and-development).

1. Launching the test runner

    Use this command:

    ```
    npm run test:e2e
    ```

    It opens GUI cypress runner where you can select the test suite and run it by clicking on it.
