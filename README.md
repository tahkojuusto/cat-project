# The Cat Project

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/tahkojuusto/cat-project)

This is a demonstration project where end-users can list and find cat breeds.

## Endpoints

| Endpoint        | URL                                                                            | API Key                        |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------ |
| Frontend (Prod) | https://master.d1cwncybm56uxh.amplifyapp.com/                                  |                                |
| GraphQL (Prod)  | https://zuqh7xwphrfbthmgxap44gdia4.appsync-api.eu-west-1.amazonaws.com/graphql | da2-sbtwjd6dwjgbthdigfrfqxx7sa |

You need to have a HTTP header `x-api-key` when invoking GraphQL. The API key is public and is available elsewhere.

## Architecture

![Architecture](./resources/pictures/architecture.png?raw=true 'Architecture')

## Technologies

- React (16.13)
- Typescript (3.7.5)
- GraphQL
- Amplify + AppSync
- DynamoDB
- Jest + Cypress
- ESLint
- Prettier

## Setup

Install the app and its dependencies

```
npm i
```

Start local development against the dev backend (GraphQL)

```sh
amplify env checkout dev
npm start
```

Run tests using the following commands

```sh
# Unit tests
npm test

# e2e tests using Cypress
npm start & npm run-script cypress:open
```

## CI/CD

The CI/CD pipeline has been defined in file `amplify.yml`. It runs the following:

- install dependencies
- optimized build
- run unit tests and e2e tests
- deploy static files (front-end)
- deploy backend (AppSync, DynamoDB)

## Development Process

The development happens in a feature branch starting with the prefix `feature/`. You can create a [separate pipeline][1] for it.

```sh
git checkout -b feature/<feature-name>
```

This will trigger pattern-based feature branch deployment with its own new backend and URL.

Having tested the feature, merge the code reviewed PR to `develop` branch

```sh
git checkout develop
git merge --squash feature/<feature-name>
git push origin develop
```

Finally, merge changes to production

```sh
git checkout master
git merge develop
git push origin master
```

This will trigger the production deployment.

[1]: https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html
