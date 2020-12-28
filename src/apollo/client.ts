import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://1.229.102.31:4000/graphql",
    cache: new InMemoryCache(),
});

export default client;
