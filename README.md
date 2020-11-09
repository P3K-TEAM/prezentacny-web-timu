# P3K TEAM - Team web

## Table of contents

1. [Repository contents](#repository-contents)
    - [Frontend](#frontend)
    - [E2E Tests](#e2e-tests)
    - [Unit Tests](#unit-tests)
1. [Deploying the web](#deploying-the-web)
1. [Keeping documents updated](#keeping-documents-updated)

## Repository contents

### Frontend

Frontend application is written in reactive framework [Vue](https://vuejs.org). More on that in [Frontend docs](docs/FRONTEND.md).

### E2E Tests

E2E test tests the application from the end user’s perspective. It tests the application whether are all components successfully integrated together.
For more information see the [this guide](docs/E2E_TESTS.md).

### Unit Tests

Unit tests allow you to test individual units of code in isolation. The purpose of unit testing is to provide developers with confidence in their code. By writing thorough, meaningful tests, you achieve the confidence that as new features are built or your code is refactored your application will remain functional and stable.
You can learn about unit tests [here](docs/UNIT_TESTS.md).

## Deploying the web

Currently we do not have an automated way of deploying the web on the real server,
therefore everything needs to be done by hand.
More on that in [Deploying docs](docs/DEPLOY.md).

## Keeping documents updated

As our webpage is not connected to any database, the data provided are static and
need to be updated manually.
Moreover, our workflow consists of writing the documentation in LaTeX
and we use another repository to compile the files.
All the information is provided in the [Uploading documents doc](docs/UPLOADING_DOCUMENTS.md).\overline{}
