import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import React from 'react';
import SingleProduct from './SingleProduct';

const Home = () => {
    const { items, error } = useQuery(GET_PRODUCTS)

    return (
        <>
                <SingleProduct />
          
        </>
    )
}

export default Home;
