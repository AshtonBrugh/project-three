import React from 'react';

const Item = ({ item }) => {
    return (
        <>
            <div className='card'>
                <div className='card-head'>
                    <span>item.name</span>
                    <img src='https://baconmockup.com/300/200' />
                </div>
                <div className='card-body'>
                    item.description
                </div>
                <div className='card-foot'>
                    Seller: item.username
                </div>
            </div>
        </>
    )
}

export default Item;
