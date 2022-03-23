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
                        <Route path='/' element={<Browse />} />
                        <Route path='/login' element={<RegisterLogin />} />
                        <Route path='/home' element={<Browse />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/item/:id' element={<SingleProduct />} />
                        <Route path='/profile/activelistings' element={<Profile />} />
                        <Route path='/profile/activeoffers' element={<Profile />} />
                        <Route path='/profile/reviewlist' element={<Profile />} />
                        <Route path='/profile/settings' element={<Profile />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/dev' element={(<Test />)} />
                        <Route render={() => { return (<h1 className='display-2'>Wrong page!</h1>) }} />
                    </Routes>
                </>
            </Router>
            <div className="spacer"></div>
            <Footer />
        </>
    );
}
