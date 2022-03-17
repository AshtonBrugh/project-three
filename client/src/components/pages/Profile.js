import React from 'react';

const Profile = () => {
    return (
        <>
        <div className="profile-container">
            <h5>Profile page works!</h5>
            <div className='menu-container'>
                <ul>
                    <li>Account</li>
                    <li>Buying</li>
                    <li>Selling</li>
                    <li>Listings</li>
                </ul>
            </div>
            <div className='menu-output-container'>
                <p>menu conatiner items load here!</p>
            </div>
        </div>    
        </>
    )
}

export default Profile;



//persons profile will have their list of products that they have posted and sold
//"past sales" and "current posts"
//header will just be username and then the body will just be their products & reviews