import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: process.env.ENDPOINT,
  }),
  cache: new InMemoryCache(),
})

export default apolloClient