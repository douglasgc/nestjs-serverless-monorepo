# NestJS + AWS Serverless Monorepo

## How to Start

Install Dependencies 

```bash
npm install
npx lerna bootstrap
```

CI/CD is setup for 3 different environments: `dev` (local), `qa` (qa), `prod` (for production).

## Services

- common
- auth
- user

## R  equirements

[Nodejs](https://nodejs.org/en/) (em versão pelo menos version 11)

[Yarn](https://yarnpkg.com/lang/en/)

ARNS da AWS `awscli` Instalada e configurada: <https://aws.amazon.com/getting-started/>

CircleCI [Conta](https://circleci.com/signup/)

Serverless [CLI](https://serverless.com/framework/docs/getting-started/)

## Repository structure

This repository uses [lerna] (https://lernajs.io/) and the yarn workspace to manage its dependencies.
All of our services must be inside the `services /` folder.
If necessary, you can leave codes used in multiple microservices in `services / common /`.
Typescript must be used in all services.

#### Enviroment

Configuration file in 'services/common/enviroment/config.ts'.

#### How to use CircleCI

Configure your AWS credentials in "enviroment variables"(circleci). 
To run the build, just create or commit something
To run the deploy to 'QA' just commit to the master.
To run the deploy to 'PROD' just create a TAG or release.

### QA Demo:
```
https://nax1lhc2e1.execute-api.sa-east-1.amazonaws.com/qualidade/auth/
```

## Run the tests

```bash
npm test
```

```bash
npm coverage
```
