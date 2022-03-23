import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../../utils/queries';

const SingleProduct = () => {
    const dev = true;

    const { id: productId } = useParams();
    const { loading, error, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId },
    });
    const product = data?.product || {};

    const [currentBid] = useState(Number.parseFloat(product.currentbid).toFixed(2));
    const [minBid] = useState(Number.parseFloat(product.currentbid * 1.01).toFixed(2));
    const [maxBid, setMaxBid] = useState('0.00');

    if (loading) return (<div>Loading...</div>);
    if (error) {
        console.log('error:', error.message);
        return (<div>an error occurred, try again later</div>)
    }

    const salestart = new Date(product.salestart);
    const saleend = new Date(product.salelength);



    const timeUntilStart = () => {
        let hours = ((salestart.getHours()) - new Date().getHours());
        let minutes = ((salestart).getMinutes() - new Date().getMinutes());
        let seconds = ((salestart).getSeconds() - new Date().getSeconds());
        if (minutes.toString().length < 2) minutes = "0" + minutes;
        if (seconds.toString().length < 2) seconds = "0" + seconds;
        return `${hours}:${minutes}:${seconds}`
    }
    const timeUntilEnd = () => {
        let hours = ((saleend.getHours()) - new Date().getHours());
        let minutes = ((saleend.getMinutes()) - (new Date().getMinutes()));
        let seconds = ((saleend.getSeconds()) - (new Date().getSeconds()));
        if (seconds < 0) {
            minutes -= 1;
            seconds += 60;
        }
        if (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }
        if (minutes.toString().length < 2) minutes = "0" + minutes;
        if (seconds.toString().length < 2) seconds = "0" + seconds;
        return `${hours}:${minutes}:${seconds}`
    }
    const active = (Date.now() > salestart && Date.now() < saleend)
    const expiredStatus = (new Date(timeUntilEnd()) > 0);
    const activeStatusClassName = ((active) ? "auction-active" : "auction-expired disabled");

    const handleBidConfirm = () => {

    }

    let intUntilEnd;
    intUntilEnd = setInterval(() => {
        const timer = document.querySelector('#untilEnd');
        timer.innerHTML = (!expiredStatus) ? "Ends in: " + timeUntilEnd() : "Expired";
        if (expiredStatus) {
            clearInterval(intUntilEnd);
        }
    }, 1000);

    if (dev) {
        console.log('current', product.currentbid)
        console.log('product', product)
        /*
        console.log('saleend - salestart', Math.floor((saleend.getTime() - salestart.getTime()) / 1000 / 60 / 60) + " hours");
        console.log('new Date()', new Date().toLocaleTimeString());
        console.log('salestart', salestart.toLocaleTimeString());
        console.log('timeUntilStart()', timeUntilStart());
        console.log('timeUntilEnd()', timeUntilEnd());
        */
    }

    if (data) {
        return (
            <div className="m-5">
                <div className={"card mb-3 bg-warning bg-gradient bg-opacity-10 " + activeStatusClassName}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href="#" data-toggle="modal" data-target="#confirmModal"
                                    className="btn btn-warning border-2 border-danger text-danger fw-bold position-absolute bottom-0 end-0 translate-middle " >
                                    {
                                        (
                                            (active) ?
                                                (
                                                    "Bid!"
                                                )
                                                :
                                                expiredStatus ?
                                                    "Expired"
                                                    :
                                                    "Starting in " + timeUntilStart()
                                        )
                                    }
                                </a>
                                <p className="card-text"><small className="text-muted">Seller: {product.seller.username}</small></p>
                                <p className="card-text"><small className="text-muted" id='untilEnd'>Ends in: {timeUntilEnd()}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal show" id='confirmModal' tabIndex={"-1"} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <a className="btn btn-sm btn-outline-warning text-danger fw-bold close" data-dismiss="modal" aria-label="Close">
                                    <span >&times;</span>
                                </a>
                            </div>
                            <div className="modal-body">
                                <p>Enter your maximum bid for this product</p>
                                <input type='number' id='max-bid' min={minBid} defaultValue={minBid}></input>
                            </div>
                            <div className="modal-footer">
                                <a className="btn btn-warning border-2 border-danger text-danger fw-bold" onClick={() => { handleBidConfirm() }}>Confirm</a>
                                <a className="btn btn-warning border-2 border-danger text-danger fw-bold" data-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (<div>An error occurred: {error.message} </div>)
}

export default SingleProduct;