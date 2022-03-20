import React from 'react';
import Sidebar from '../sidebar.js';
import ActiveListings from '../ActiveListings';
import ActiveOffers from '../ActiveOffers';
import ReviewList from '../reviewList';
import Settings from '../Settings';
import RegisterLogin from '../RegisterLogin';
import Home from './Home'

const Profile = () => {

    const [currentPage, setCurrentPage] = React.useState('profile');

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('profile')) {
            return <h5>sidebar button on 'Home' {'(technically returns "profile")'} -{'>'} no component yet </h5>;
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
            <div className='ml-3'>
                {renderPage()}
            </div>
        </>
    )
}

export default Profile;




//persons profile will have their list of products that they have posted and sold
//"past sales" and "current posts"
//header will just be username and then the body will just be their products & reviews