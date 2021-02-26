# P3K TEAM - Team web

![master pipeline](https://github.com/P3K-TEAM/prezentacny-web-timu/actions/workflows/github-ci.yml/badge.svg?branch=master)

## Table of contents

1. [Prerequisites](#prerequisites)
1. [Installation and development](#installation-and-development)
1. [Test coverage](#test-coverage)
   - [E2E Tests](#e2e-tests)
   - [Unit Tests](#unit-tests)
1. [Deploying to the web](#deploying-to-the-web)
1. [Keeping documents updated](#keeping-documents-updated)

## Prerequisites

-   [Node.js](https://nodejs.org/en/download/)
-   [Node package manager](https://www.npmjs.com/)

## Installation and development

The application is written in reactive framework [Vue](https://vuejs.org).

1. Installing dependencies

    ```shell script
    npm install
    ```

1. Running the dev server

    ```shell script
    npm run serve
    ```

1. Visit the webpage in browser (by default the URL is [http://localhost:8080](http://localhost:8080))

## Test coverage 

### E2E Tests

E2E test tests the application from the end user’s perspective. It tests the application whether are all components successfully integrated together.
For more information see the [this guide](docs/E2E_TESTS.md).

### Unit Tests

Unit tests allow you to test individual units of code in isolation. The purpose of unit testing is to provide developers with confidence in their code. By writing thorough, meaningful tests, you achieve the confidence that as new features are built or your code is refactored your application will remain functional and stable.
You can learn about unit tests [here](docs/UNIT_TESTS.md).

## Deploying to the web

The code is automatically deployed to the webserver using CI pipeline after merge into `master` branch.

## Keeping documents updated

As our webpage is not connected to any database, the data provided are static and  need to be updated manually.
Moreover, our workflow consists of writing the documentation in LaTeX and we use another repository to compile the files.
All the information is provided in the [Uploading documents doc](docs/UPLOADING_DOCUMENTS.md).
