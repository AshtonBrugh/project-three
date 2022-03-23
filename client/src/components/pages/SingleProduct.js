import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../../utils/queries';

const SingleProduct = (props) => {
    const { id: productId } = useParams();

    const { loading, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId },
    });

    const product = data?.product || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="m-5">
            <div className="card mb-3 auction-expired bg-warning bg-gradient bg-opacity-10" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary position-absolute bottom-0 end-0 translate-middle disabled">Expired!</a>
                            <p className="card-text"><small className="text-muted">{product.username}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleProduct;