import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import Item from "../components/Item"


const ProductList = () => {

    const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className="flex-row">
            {
                data.all_products.map(product => {
                    return (<Item product={product} />)
                })
            }
        </div>
    );
};

export default ProductList;
