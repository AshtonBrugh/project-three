import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import AuthService from '../utils/auth'
const logo192 = require('../icons/logo192.png');

function Nav({ currentPage, handlePageChange }) {

    const { loading, error, data } = useQuery(QUERY_ME);
    if (loading) return 'Loading...';
    return (
        <header className="nav-block gradient-text">
            <a href="/" onClick={() => handlePageChange('home')} className='nav-item'>
                <h1 className="gradient-text heading"><img src={logo192} className="logoImg" /> FiveFires</h1>
            </a>
            <nav className='nav'>
                <ul className="nav-ul">
                    <li className='nav-li'>
                        <a href="/home" onClick={() => handlePageChange('browse')} className='nav-item'>Browse</a>
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
            <a href="/profile" onClick={() => handlePageChange('profile')} className='nav-item align-self-center position-absolute pb-3' style={{ right: '1vw ' }}>
                {
                    'Welcome' +
                    (
                        (loading) ?
                            (
                                ', Guest!'
                            )
                            : (data) ?
                                (
                                    ', ' + data.me.username + '!'
                                )
                                :
                                (
                                    ', Guest!'
                                )
                    )
                }
            </a>

        </header>
    )
}

export default Nav; 
