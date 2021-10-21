const {ApolloServer} = require("apollo-server");

//
// static data
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
    {
        id: 'link-2',
        url: 'www.umich.edu',
        description: 'U of Michigan'
    },
    {
        id: 'link-3',
        url: 'www.prisma.io',
        description: 'Prisma replaces traditional ORMs'
    },
];

//
// resolvers process requests. so you need a resolver for each field
// and each Query, Mutation and Subscription
const resolvers = {
        Query: {
            info: () => `This is the API of a Hackernews Clone`,
            // all links
            feed: () => links,
            //
            link: (parent, args) => {
                // return the link from the links array that matches args.id
                return links.find(link => link.id === args.id);
            }
        },
        //
        Mutation: {
            // add a new Link
            post: (parent, args) => {
                let idCount = links.length
                const link = {
                    id: `link-${idCount++}`,
                    description: args.description,
                    url: args.url,
                }
                links.push(link)
                return link
            },
            updateLink: (parent, args) => {
                // find the link with id = args.id and change its values
                links.forEach((link) => {
                    if (args.id === link.id) {
                        link.url = args.url;
                        link.description = args.description;
                    }
                });
                let matchingLink = links.find(link => link.id === args.id);
                return matchingLink;
            },
            deleteLink: (parent, args) => {
                // find the link with id = args.id and save it
                // then remove it from the links array
                let deleteLink = links.find(link => link.id === args.id);
                links = links.filter(link => link.id !== args.id);
                return deleteLink;
            },
        }
        ,
    }
;

const fs = require('fs');
const path = require('path');
//
// create the GraphQL server with the schema (typeDefs) and resolvers
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
});

//
// start the server
server.listen().then(({url}) => console.log(`Server is running on ${url}`));
