import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import PageContainer from './components/PageContainer';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});


function App() {
    return (
        <ApolloProvider client={client}>
            <PageContainer />
        </ApolloProvider>
    );
}

export default App;
