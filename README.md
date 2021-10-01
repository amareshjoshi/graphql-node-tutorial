# graphql-node-tutorial
GraphQL-Node.js server tutorial from howtographql.com


## Section Node.js Commands

- Introduction
- Getting Started
```shell
mkdir hackernews-node
cd hackernews-node
npm init -y

mkdir src
touch src/index.js

npm install apollo-server graphql

# to test
node src/index.js
```
- A Simple Query
- A Simple Mutation
```shell
# put schema in separate file
touch src/schema.graphql
```
- Adding a Database
```shell
cd hacker-news
npm install prisma --save-dev
npm install @prisma/client

npx prisma init

npx prisma migrate dev

npx prisma generate

# to test
node src/script.js
```
- Connecting The Server and Database with Prisma Client
- Authentication
- Realtime GraphQL Subscriptions
- Filtering, Pagination & Sorting
- Summary