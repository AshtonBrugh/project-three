import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import RegisterLogin from './pages/RegisterLogin'
import ReviewForm from './components/ReviewForm/reviewForm';

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
        <Signup />
        <Login />
      </div>
    </ApolloProvider>
  );
}

export default App;
