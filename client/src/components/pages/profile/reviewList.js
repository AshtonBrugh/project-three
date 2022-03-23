import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
    return (
        <div className="profile-containers">
            <div>
                <h1 className='profile-headers'>Your Reviews</h1>
            </div>
            <div className='profile-reviews'>
                {reviews &&
                    reviews.map(review => (
                        <p className="single-review" key={review._id}>
                            {review.content} {'// '}
                            <Link to={`/profile/${review.username}`}>
                                {review.username}
                            </Link>
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default ReviewList;
