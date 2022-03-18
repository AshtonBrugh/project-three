import React from "react";
import AuthService from '../utils/auth'

function Nav({ currentPage, handlePageChange }) {

    return (
        <header className="nav-block gradient-text">
            <a onClick={() => handlePageChange('home')} className='nav-item'>
                <h1 className="gradient-text heading">FiveFires</h1>
            </a>
            <nav>
                <ul className="nav">
                    <li>
                        <a href="/home" onClick={() => handlePageChange('browse')} className='nav-item'>Browse</a>
                    </li>
                    <li>
                        <a href="/profile" onClick={() => handlePageChange('profile')} className='nav-item'>Profile</a>
                    </li>
                    <li>
                        <a href="/browse" onClick={() => handlePageChange('post')} className='nav-item'>Post Listing</a>
                    </li>
                    <li>
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
                    <li>
                        <a href="/signup" onClick={() => handlePageChange('signup')} className='nav-item'>Sign up</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav; 