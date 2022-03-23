import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCT, QUERY_ME } from '../../utils/queries';
import { UPDATE_CURRENT_BID } from '../../utils/mutations'

const SingleProduct = () => {
    const dev = false;
    const { id: productId } = useParams();
    const { loadingMe, errorMe, dataMe } = useQuery(QUERY_ME);
    const [updateBid, { errorBid }] = useMutation(UPDATE_CURRENT_BID);
    const { loading, error, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId },
    });
    const product = data?.product || {};

    const [currentBid, setCurrentBid] = useState(null);
    const [minBid, setMinBid] = useState(null);

    if (loading) return (<div>Loading...</div>);
    if (error) {
        console.log('error:', error.message);
        return (<div>an error occurred, try again later</div>)
    }

    if (data) {

        if (currentBid == null) setCurrentBid(product.currentbid)
        if (minBid == null) setMinBid((product.currentbid * 1.01) + 0.01)

        const salestart = new Date(product.salestart);
        const saleend = new Date(product.saleend);



        const handleBidConfirm = async (e) => {
            const bid = document.getElementById('max-bid').value;
            //console.log('product.currentBid <= bid', product.currentBid <= bid)
            //console.log('bid', bid)
            //console.log('product.currentbid', product.currentbid)
            if (product.currentbid <= bid) {
                //console.log('productid', product._id)
                //console.log('bid', bid)
                const updatedProduct = await updateBid({
                    variables: {
                        productid: product._id,
                        currentbid: bid
                    }
                });
                //console.log(updatedProduct);
                setCurrentBid(updatedProduct.currentbid);
                setMinBid((updatedProduct.currentbid * 1.01) + 0.01);
                renderPage();
            }
        }
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

        let intUntilStart;
        if (!expiredStatus && !active) {
            intUntilStart = setInterval(() => {
                const timer = document.querySelector('#untilStart');
                timer.innerHTML = (!expiredStatus) ? "Ends in: " + timeUntilEnd() : "Expired";
                if (expiredStatus) {
                    clearInterval(intUntilEnd);
                }
            }, 1000);
        }
        let intUntilEnd;
        if (active) {
            intUntilEnd = setInterval(() => {
                const timer = document.querySelector('#untilEnd');
                timer.innerHTML = (!expiredStatus) ? "Ends in: " + timeUntilEnd() : "Expired";
                if (expiredStatus) {
                    clearInterval(intUntilEnd);
                }
            }, 1000);
        }

        if (dev) {
            console.log('product.currentbid', product.currentbid)
            console.log('product', product)
            console.log('product.currentbid.toFixed(2))', product.currentbid)
            console.log('currentBid', currentBid)
            console.log('minBid', minBid)
            console.log('(product.currentBid * 1.01)', (Number.parseFloat(product.currentbid) * 1.01))

            //console.log('saleend - salestart', Math.floor((saleend.getTime() - salestart.getTime()) / 1000 / 60 / 60) + " hours");
            //console.log('new Date()', new Date().toLocaleTimeString());
            //console.log('salestart', salestart.toLocaleTimeString());
            //console.log('saleend', saleend.toLocaleString());
            //console.log('timeUntilStart()', timeUntilStart());
            //console.log('timeUntilEnd()', timeUntilEnd());

        }

        const renderPage = function () {
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
                                    {(active) ? <p className="card-text"><small className="text-muted" id='untilEnd'>Ends in: {timeUntilEnd()}</small></p> : null}
                                    {(!expiredStatus && !active) ? <p className="card-text"><small className="text-muted" id='untilStart'>Starts in: {timeUntilStart()}</small></p> : null}

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
                                    <input type='number' id='max-bid' min={(minBid)} defaultValue={(minBid)}></input>
                                </div>
                                <div className="modal-footer">
                                    <a className="btn btn-warning border-2 border-danger text-danger fw-bold" onClick={(e) => { handleBidConfirm(e) }}>Confirm</a>
                                    <a className="btn btn-warning border-2 border-danger text-danger fw-bold" data-dismiss="modal">Close</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

        return (renderPage())



    }
    return (<div>An error occurred: {error.message} </div>)
}

export default SingleProduct;