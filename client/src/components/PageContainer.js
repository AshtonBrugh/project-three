import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthService from "../utils/auth";

//import Header from './header'
import Footer from './footer';
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Login from './Login';
import Nav from './Nav';
import RegisterLogin from './pages/RegisterLogin'
import Test from "./dev/test";


export default function PageContainer() {

    const [currentPage, setCurrentPage] = React.useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Router>
                <>
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/browse' element={<Browse />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/dev' element={(<Test />)} />
                        <Route render={() => { return (<h1 className='display-2'>Wrong page!</h1>) }} />
                    </Routes>
                </>
            </Router>
            <span>
                Logged In: {AuthService.loggedIn().toString()}
            </span>
            <Footer />
        </>
    );
}