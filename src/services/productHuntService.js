import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
  } from "@apollo/client";

const link = from([
    new HttpLink({ uri: "https://api.producthunt.com/v2/api/graphql",  headers: {Authorization: "Bearer V4Qf5vXQs3vVkxnA05gfXsdd5TotkoJYgR52XRKdTZA" , Accept: "application/json", Host: "api.producthunt.com" }, }),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  export default{
      client
  }