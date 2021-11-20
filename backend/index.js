import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './graphql/index';

async function startServer(){

    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    await server.start();
    server.applyMiddleware({ app });
    
    app.get('/', (req, res) => {
        console.log("Apollo GraphQL Express server is ready");
    });
    
    app.listen({ port: 3000 }, () => {
        console.log(`Server is running at http://localhost:3000${server.graphqlPath}`);
    });

    return;
}

startServer();

//Simple test to see if it works this way, idk, figuring it out.

