import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import Item from "../components/Item"


const ProductList = ({ currentFilter, setCurrentFilter }) => {
    console.log(currentFilter)

    const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className="row">
            {
                data.all_products.map(product => {
                    return (
                        <div className="col-sm-4">

                            <Item product={product} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductList;
