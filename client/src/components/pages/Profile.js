import React from 'react';
import ProfileSidebar from './profile/profileSidebar.js';
import ActiveListings from './profile/ActiveListings';
import ActiveOffers from './profile/ActiveOffers';
import ReviewList from './profile/reviewList';
import Settings from './profile/Settings';
import RegisterLogin from '../RegisterLogin';


const Profile = () => {

    const [currentPage, setCurrentPage] = React.useState('profile');

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('profile')) {
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
            <ProfileSidebar currentPage={currentPage} handlePageChange={setCurrentPage} />
            {renderPage()}
        </>
    )
}

export default Profile;


