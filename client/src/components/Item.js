import React from "react";


const Item = ({ product }) => {
    return (
        <div>
            <div className="card">
                <p className="card-head">
                    <span style={{ fontWeight: 700 }} className="card-head h1">
                        Title:{product.title}
                    </span>
                </p>
                <div className="card-body">
                    image: <img src={product.image} alt={product.title} />
                    <p>description: {product.description}</p>
                </div>
            </div>
        </div>
    )
};

export default Item;
