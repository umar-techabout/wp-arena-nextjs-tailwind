// lib/apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://stg-wparena-staging.kinsta.cloud/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

// // lib/apollo-client.js
// import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
// import { onError } from "@apollo/client/link/error";

// const httpLink = new HttpLink({
//   uri: 'https://stg-wparena-staging.kinsta.cloud/graphql',
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// const client = new ApolloClient({
//   link: from([errorLink, httpLink]),
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'ignore',
//     },
//     query: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'all',
//     },
//   },
// });

// export default client;