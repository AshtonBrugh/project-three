import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../../utils/queries';

const SingleProduct = (props) => {
   const { id: productId } = useParams();

   const { loading, data } = useQuery(QUERY_PRODUCT, {
       variables: { id: productId},
   });

       const product = data?.product || {};

       if (loading) {
           return <div>Loading...</div>
       }

       return (
           <div>
               <div className="card">
                   <p className="card-head">
                       <span style={{ fontWeight: 700 }} className="card-head h1">
                           {product.title}
                       </span>{' '}
                   </p>
                   <div className="card-body">
                       <img src={product.image} alt={product.name}/>
                       <p>{product.description}</p>
                   </div>
               </div>
           </div>
       )

}

export default SingleProduct;