import React from 'react';
import Sidebar from '../sidebar.js';
import ActiveListings from '../ActiveListings';
import ActiveOffers from '../ActiveOffers';
import ReviewList from '../reviewList';
import Settings from '../Settings';
import RegisterLogin from '../RegisterLogin';
import Home from './Home'

const Profile = () => {

    const [currentPage] = React.useState('profile');

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('home')) {
            return <Home />;
        }
        if (currentPage === 'activelistings') {
            return <ActiveListings />;
        }
        if (currentPage.toLowerCase().includes('activeoffers')) {
            return <ActiveOffers />;
        }
        if (currentPage.toLowerCase().includes('reviewlist')) {
            return <ReviewList />;
        }
        if (currentPage.toLowerCase().includes('settings')) {
            return <Settings />;
        }
        if (currentPage.toLowerCase().includes('login')) {
            return <RegisterLogin />;
        }
    };

    return (
        <>
            <div>
                <Sidebar />
            </div>
            {renderPage()}
        </>
    )
}

export default Profile;




//persons profile will have their list of products that they have posted and sold
//"past sales" and "current posts"
//header will just be username and then the body will just be their products & reviews