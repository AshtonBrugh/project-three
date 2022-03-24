import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthService from "../utils/auth";

import Footer from './footer';
import RegisterLogin from './RegisterLogin';
import Nav from './Nav';
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import SingleProduct from "./pages/SingleProduct";

export default function PageContainer() {

    const [currentPage, setCurrentPage] = React.useState('Home');
    const handlePageChange = (page) => {
        if (page.toLowerCaseString().includes('home') || page.toLowerCaseString().includes('/' || AuthService.checkLogin())) {
            setCurrentPage(page)
        } else {
            setCurrentPage('login');
        }
    }
    return (
        <>
            <Router>
                <>
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                    <Routes>
                        <Route path='/' element={<Browse />} />
                        <Route path='/login' element={<RegisterLogin />} />
                        <Route path='/home' element={<Browse />} />
                        <Route path='/profile' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Profile />} />
                        <Route path='/item/:id' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <SingleProduct />} />
                        <Route path='/profile/activelistings' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Profile />} />
                        <Route path='/profile/activeoffers' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Profile />} />
                        <Route path='/profile/reviewlist' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Profile />} />
                        <Route path='/profile/settings' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Profile />} />
                        <Route path='/post' element={(!AuthService.checkLogin()) ? <RegisterLogin /> : <Post />} />
                        <Route render={() => { return (<h1 className='display-2'>Wrong page!</h1>) }} />
                    </Routes>
                </>
            </Router>
            <div className="spacer"></div>
            <Footer />
        </>
    );
}
