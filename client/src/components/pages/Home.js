import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import React from 'react';
import ProductList from '../productList';

const Home = () => {

    return (
        <ProductList />
    )
}

export default Home;
