import React from "react";


const Item = ({ product }) => {
    return (
        <div className="card" >
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href={`item/${product._id}`} className="btn btn-warning border-2 border-danger text-danger fw-bold">View Item</a>
            </div>
        </div>
    )
};

export default Item;
