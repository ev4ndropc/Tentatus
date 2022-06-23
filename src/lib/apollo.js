import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ref6in10mh01z32bn8h632/master",
    cache: new InMemoryCache()
});