import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
    <div className="App">
      <Signup/>
      <Login />
    </div>
    </ApolloProvider>
  );
}

export default App;
