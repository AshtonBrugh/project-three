import React from 'react';
import ProfileSidebar from './profile/profileSidebar.js';
import ActiveListings from './profile/ActiveListings';
import ActiveOffers from './profile/ActiveOffers';
import ReviewList from './profile/reviewList';
import Settings from './profile/Settings';
import RegisterLogin from '../RegisterLogin';

import './css/profile.css';

const Profile = () => {

    const [currentPage, setCurrentPage] = React.useState('profile');

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('profile')) {
            return (
                <div className='container profile-container'>
                    <div>
                        <h2 className='profile-title'>Profile</h2>
                    </div>
                    <div className='profile-items'>
                        <div className='profile-item'>
                            <h3>Username</h3>
                            <p>(username)</p>
                        </div>
                        <div className='profile-item'>
                            <h3>Email</h3>
                            <p>(email adress)</p>
                        </div>
                        <div className='profile-item'>
                            <h3>Password</h3>
                            <button className='button'>Reset Password</button>
                        </div>
                    </div>

                </div>
            );
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




//persons profile will have their list of products that they have posted and sold
//"past sales" and "current posts"
//header will just be username and then the body will just be their products & reviews