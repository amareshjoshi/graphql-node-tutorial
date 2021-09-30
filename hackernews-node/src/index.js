const {ApolloServer} = require("apollo-server");

//
// this is the schema form the GraphQL db
const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }    
    type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

// (static) data
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
},
    {
        id: 'link-1',
        url: 'www.msu.edu',
        description: 'Michigan State University'
    },
]

//
// resolvers process requests
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        // new resolver for root field (object?) feed
        feed: () => links,
    },
    // resolvers for the fields in the Link object
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
};

//
// create the GraphQL server with the schema and resolvers
const server = new ApolloServer({
    playground: true,
    typeDefs,
    resolvers,
});

//
// start the server
server.listen().then(({url}) => console.log(`Server is running on ${url}`));
