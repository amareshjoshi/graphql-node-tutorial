const { ApolloServer } = require("apollo-server");

//
// this is the schema form the GraphQL db
const typeDefs = `
    type Query {
        info: String!
    }
`;

//
// how to handle requests
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },
};

//
// create the GraphQL server with the schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//
// start the server
server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
