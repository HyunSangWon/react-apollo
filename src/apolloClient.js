import ApolloClient from "apollo-boost";

/*apollo-boost: GraphQL 클라이언트를 가지기위해 모든걸 대신 셋업*/
const client = new ApolloClient({
    uri: "https://movieql.now.sh/"
});

export default client;