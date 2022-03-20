import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import React from 'react';
import Item from '../Item';

const Home = () => {
    const { items, error } = useQuery(GET_PRODUCTS)

    return (
        <>
            <div className="home-container">
                <h5>Home page works!</h5>
                {
                    items ?
                        items.map((item) => {
                            return (
                                <Item item={item} />
                            )
                        })
                        :
                        'No items'
                }
            </div>
        </>
    )
}

export default Home;
