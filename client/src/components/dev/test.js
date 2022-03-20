import React from 'react';

const Test = () => {
    return (
        <>
            <h3>CSS Test Playground</h3>

            <div className='card card-auction-expired'>
                <div className='card-head'>
                    <h1>Heading</h1>
                </div>
                <div className='card-body'>
                    <p>some text in a p</p>
                </div>
                <div className='card-foot'>
                    <span>footer text in span</span>
                </div>
            </div>
            <div className='card card-auction-active'>
                <div className='card-head'>
                    <h1>Heading</h1>
                </div>
                <div className='card-body'>
                    <p>some text in a p</p>
                </div>
                <div className='card-foot'>
                    <span>footer text in span</span>
                </div>
            </div>
        </>
    )
}

export default Test;

// <img src='https://baconmockup.com/300/200' />
