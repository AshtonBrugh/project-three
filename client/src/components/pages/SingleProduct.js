import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCT, QUERY_ME } from '../../utils/queries';
import { UPDATE_CURRENT_BID } from '../../utils/mutations'
import { AuthService } from '../../utils/auth'

const SingleProduct = () => {
    const dev = true;
    const { id: productId } = useParams();
    const { loadingMe, errorMe, dataMe } = useQuery(QUERY_ME);
    const { loading, error, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId },
    });
    const [updateBid, { errorBid }] = useMutation(UPDATE_CURRENT_BID);
    const product = data?.product || null;

    const [currentBid, setCurrentBid] = useState(null);
    const [minBid, setMinBid] = useState(null);

    if (loading) return (<div>Loading...</div>);

    if (error || errorMe) {
        console.log('error:', error);
        console.log('errorMe:', errorMe);
        return (<div>an error occurred, try again later</div>)
    }

    if (data) {

        if (currentBid == null) setCurrentBid(product.currentbid)
        if (minBid == null) setMinBid(Number.parseFloat(((product.currentbid * 1.01) + 0.01).toFixed(2)))

        const salestart = new Date(product.salestart);
        const saleend = new Date(product.saleend);



        const handleBidConfirm = async (e) => {
            const bid = Number.parseFloat(document.getElementById('max-bid').value);
            if (bid >= minBid) {
                const options = {
                    variables: {
                        productid: product._id,
                        currentbid: bid
                    }
                }
                console.log(`options: ${JSON.stringify(options)} | typeof(options): ${typeof (options)}`);
                const updatedProduct = await updateBid(options)
                    .then(
                        val => val,
                        reason => console.warn('reason', JSON.stringify(reason))
                    )
                    .catch(err => console.error('err', err));
                console.log(updatedProduct);
                if (updatedProduct) {
                    setCurrentBid(updatedProduct.currentbid);
                    setMinBid((updatedProduct.currentbid * 1.01) + 0.01);
                    window.location.reload();
                } else {
                    console.warn(`(58)Something went wrong, that's so tragic`);
                }

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
            if (expiredStatus) return 0;
            else {
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
        }

        const active = (Date.now() > salestart && Date.now() < saleend);
        const expiredStatus = !(saleend - (new Date()) > 0);
        const activeStatusClassName = ((active) ? "auction-active" : "auction-expired");

        let intUntilStart;
        if (!expiredStatus && !active) {
            intUntilStart = setInterval(() => {
                const timer = document.querySelector('#untilStart');
                (timer) ? (timer.innerHTML = (!active) ? "Starts in: " + timeUntilStart() : "Active!") : clearInterval(intUntilStart);
                if (expiredStatus || active) clearInterval(intUntilStart);
            }, 1000);
        }
        let intUntilEnd;
        if (active) {
            intUntilEnd = setInterval(() => {
                const timer = document.querySelector('#untilEnd');
                (timer) ? (timer.innerHTML = (!expiredStatus) ? "Ends in: " + timeUntilEnd() : "Expired") : clearInterval(intUntilEnd);
                if (expiredStatus) clearInterval(intUntilEnd);
            }, 1000);
        }

        if (dev) {
            console.log('product', product)
            console.log('dataMe', dataMe)
            console.log('loadingMe', loadingMe)
            console.log('errorMe', errorMe)

            /*
            console.log(`bid: ${bid} | typeof(bid): ${typeof (bid)}`)
            console.log(`product._id: ${product._id} | typeof(product._id): ${typeof (product._id)}`)
            console.log(`product.currentbid <= bid: ${product.currentbid <= bid} }`)
            console.log(`minBid: ${minBid} | typeof(minBid): ${typeof (minBid)}`)
            console.log(`timeUntilEnd(): ${timeUntilEnd()} | typeof(timeUntilEnd()): ${typeof (timeUntilEnd())}`)

            console.log('expiredStatus', expiredStatus);
            console.log('active', active);
            
            console.log('saleend - salestart', Math.floor((saleend - salestart)));
            console.log('new Date()', new Date());
            console.log('salestart', salestart);
            console.log('saleend', saleend);
            console.log('saleend - (new Date())', saleend - (new Date()));
            console.log('timeUntilStart()', timeUntilStart());
            console.log('timeUntilEnd()', timeUntilEnd());

            console.log('product.currentbid', product.currentbid)
            console.log('product.currentbid.toFixed(2))', product.currentbid)
            console.log('currentBid', currentBid)
            console.log('minBid', minBid)
            console.log('(product.currentBid * 1.01)', (Number.parseFloat(product.currentbid) * 1.01))

            */

        }


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
                                <h6 className="card-title end-0 top-0 position-absolute p-2 text-success">${product.currentbid.toFixed(2)} USD</h6>
                                <p className="card-text">{product.description}</p>
                                <a href="#" data-toggle="modal" data-target="#confirmModal"
                                    className={`btn btn-warning border-2 border-danger text-danger fw-bold position-absolute bottom-0 end-0 translate-middle${(expiredStatus) ? ' disabled' : ''}`} >
                                    {
                                        (
                                            (active) ?
                                                (
                                                    (product.currentbid_userid != dataMe) ? "Bid!" : "Increase Bid"
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

                                {
                                    (active) ?
                                        <p className="card-text">
                                            <small className="text-muted" id='untilEnd'>
                                                Ends in: {timeUntilEnd()}
                                            </small>
                                        </p>
                                        : null
                                }
                                {
                                    (!expiredStatus && !active) ?
                                        <p className="card-text">
                                            <small className="text-muted" id='untilStart'>
                                                Starts in: {timeUntilStart()}
                                            </small>
                                        </p>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id='confirmModal' tabIndex={"-1"} role="dialog">
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
    return (
        <div>
            An error occurred: <br />
            {'error: ' + error} <br />
            {'errorMe: ' + errorMe} <br />
        </div>
    );
}

export default SingleProduct;