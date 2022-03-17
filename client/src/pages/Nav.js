function Nav({currentPage, handlePageChange}) {
    return(
        <header className= "nav-block gradient-text">
            <h1 className="heading">FiveFires</h1>
                <nav>
                    <ul className="nav">
                        <li>
                            <a href="#browse" onClick={() => handlePageChange('Browse')} className={currentPage === 'About' ? 'nav-item-active' : 'nav-item'}>Browse</a>
                        </li>
                        <li>
                            <a href="#profile" onClick={() => handlePageChange('Profile')} className={currentPage === 'Projects' ? 'nav-item-active' : 'nav-item'}>Profile</a>
                        </li>
                        <li>
                            <a href="#post-listing" onClick={() => handlePageChange('Post Listing')} className={currentPage === 'Contact' ? 'nav-item-active' : 'nav-item'}>Post Listing</a>
                        </li>
                        <li>
                            <a href="#logout" onClick={() => handlePageChange('Logout')} className={currentPage === 'Resume' ? 'nav-item-active' : 'nav-item'}>Logout</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Nav; 