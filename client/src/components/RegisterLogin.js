import React from 'react';
import Login from './Login';
import Signup from './Signup';

const RegisterLogin = () => {
    const [currentPage, setCurrentPage] = React.useState('login');
    const handlePageChange = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    const renderPage = () => {
        if (currentPage.toLowerCase().includes('login')) {
            return <Login />;
        }
        if (currentPage.toLowerCase().includes('signup')) {
            return <Signup />;
        }
    }

    return (
        <>
            <div className='w-50 mx-auto'>
                <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item">
                        <a className={"nav-link" +
                            (
                                currentPage.toLowerCase().includes('login') ?
                                    " active disabled"
                                    :
                                    ""
                            )
                        } href="" onClick={(e) => handlePageChange(e, 'login')}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (currentPage.toLowerCase().includes('signup') ? " active disabled" : "")} href="" onClick={(e) => handlePageChange(e, 'signup')}>Sign up</a>
                    </li>
                </ul>
            </div>
            <div className='container'>
                {renderPage()}
            </div>
        </>
    )
}

export default RegisterLogin;
