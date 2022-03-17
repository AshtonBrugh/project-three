import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Browse from './pages/Browse';
import RegisterLogin from './pages/RegisterLogin'

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
            <Router>
                <Routes>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/browse' component={Browse} />
                    <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                </Routes>
            </Router>

            <Nav />
            <RegisterLogin />
        </ApolloProvider>
    );
}

export default App;
