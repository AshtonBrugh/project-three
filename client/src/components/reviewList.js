import React from 'react';
import ReviewForm from './reviewForm'

const ReviewList = () => {
    return (
        <div className="profile-containers">
        <h1 className='profile-headers'>Your Reviews</h1>
        <ReviewForm />
        <div>
            <p>Coming Soon!</p>
        </div>
    </div>
    )
}

export default ReviewList;
