The result of following step by step the [tutorial](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#assumed-knowledge) made by Prisma.

Implements a simple REST API with NestJS and Prisma for a simple blog application.

## Installation

```bash
$ npm install
```

## Database
The details in the docker-compose.yml file are for a local development environment. If you want to use a different database, you can change the details in the docker-compose.yml file.

Expose your connection string in the .env file. 


```bash
# .env
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Darcy Brás da Silva]()
- Twitter - [@dardevelin](https://twitter.com/dardevelin)

## License

Nest is [MIT licensed](LICENSE).
