import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import Item from "../components/Item"


const ProductList = () => {

    const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

    const dataArray = () => {
        console.log('data.all_products', data.all_products)
        const retVal = [];
        for (const key in data.all_products) {
            if (Object.hasOwnProperty.call(data.all_products, key)) {
                const element = data.all_products[key];
                console.log('element', element)
                retVal.push(element);
            }
        }
        console.log('retVal:', retVal)
        return retVal;
    }

    console.log('data', data)

    if (loading) {
        console.log('Loading...')
        return 'Loading...';
    }
    if (error) {
        console.log('error: ', error.message)
        return `Error! ${error.message}`;
    }
    return (
        <div className="flex-row">
            {
                data.all_products.map(product => {
                    console.log('product', product)
                    return (<Item product={product} />)
                })
            }
        </div>
    );
};

export default ProductList;
