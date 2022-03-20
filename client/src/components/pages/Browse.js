import React from 'react';
import Sidebar from '../browseSidebar.js';
import ActiveListings from '../ActiveListings';
import ActiveOffers from '../ActiveOffers';
import ReviewList from '../reviewList';
import Settings from '../Settings';
import RegisterLogin from '../RegisterLogin';
import Home from './Home'

const Browse = () => {

    const [currentPage, setCurrentPage] = React.useState('profile');

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('browse')) {
            return <h5>Coming Soon! </h5>;
        }
        if (currentPage.toLowerCase().includes('activelistings')) {
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
            <Sidebar currentPage={currentPage} handlePageChange={setCurrentPage} />
            {renderPage()}
        </>
    )
}

export default Browse;
