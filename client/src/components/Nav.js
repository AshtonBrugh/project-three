import React from "react";

function Nav() {

    const handlePageChange = (pageName) => {

    }

    return (
        <header className="nav-block gradient-text">
            <h1 className="heading">FiveFires</h1>
            <nav>
                <ul className="nav">
                    <li>
                        <a href="#browse" onClick={() => handlePageChange('browse')} className='nav-item'>Browse</a>
                    </li>
                    <li>
                        <a href="#profile" onClick={() => handlePageChange('profile')} className='nav-item'>Profile</a>
                    </li>
                    <li>
                        <a href="#post-listing" onClick={() => handlePageChange('post')} className='nav-item'>Post Listing</a>
                    </li>
                    <li>
                        <a href="#logout" onClick={() => handlePageChange('logout')} className='nav-item'>Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav; 