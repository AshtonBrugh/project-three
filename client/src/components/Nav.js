import React from "react";
import AuthService from '../utils/auth'

function Nav({ currentPage, handlePageChange }) {

    return (
        <header className="nav-block gradient-text">
            <a href="/home" onClick={() => handlePageChange('home')} className='nav-item'>
                <h1 className="gradient-text heading">FiveFires</h1>
            </a>
            <nav className='nav'>
                <ul className="nav-ul">
                    <li className='nav-li'>
                        <a href="/home" onClick={() => handlePageChange('browse')} className='nav-item'>Browse</a>
                    </li>
                    <li className='nav-li'>
                        <a href="/profile" onClick={() => handlePageChange('profile')} className='nav-item'>Profile</a>
                    </li>
                    <li className='nav-li'>
                        <a href="/post" onClick={() => handlePageChange('post')} className='nav-item'>Post Listing</a>
                    </li>
                    <li className='nav-li'>
                        {
                            AuthService.checkLogin() ?
                                (
                                    <a onClick={() => {
                                        AuthService.logout();
                                        handlePageChange('home');
                                    }} className='nav-item'>Logout</a>
                                )
                                :
                                (
                                    <a href="/login" onClick={() => handlePageChange('login')} className='nav-item'>Log in</a>
                                )

                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav; 
