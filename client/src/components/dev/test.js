import { useMutation } from '@apollo/client';
import React from 'react';
import { QUERY_ADD_PRODUCT } from '../../utils/mutations';
import Browse from '../pages/Browse.js'

const Test = () => {
    const itemSeed = [
        {
            title: "Sample product 0",
            description: "Sample product 0 description can be longer than the title",
            image: "https://baconmockup.com/300/200",
            username: "ADMIN"
        },
        {
            title: "Sample product 1",
            description: "Sample product 1 description can be longer than the title",
            image: "https://baconmockup.com/310/210",
            username: "ADMIN"
        },
        {
            title: "Sample product 2",
            description: "Sample product 2 description can be longer than the title",
            image: "https://baconmockup.com/320/220",
            username: "ADMIN"
        },
        {
            title: "Sample product 3",
            description: "Sample product 3 description can be longer than the title",
            image: "https://baconmockup.com/330/230",
            username: "ADMIN"
        }
    ]

    const [addItem, { error }] = useMutation(QUERY_ADD_PRODUCT);
    let i = 0;

    const handleProductAdd = async e => {
        e.preventDefault();
        if (i < (itemSeed.length - 1)) {
            try {
                const { data } = await addItem({
                    variables: {
                        title: itemSeed[i].title,
                        description: itemSeed[i].description,
                        image: itemSeed[i].image
                    }
                });
                if (data) {
                    i++;
                    console.log(' data ', data)
                }
            } catch (err) { console.log(err) }
        }
        renderPage();
    }

    const renderPage = () => {
        return (<><span>{error.message}</span><Browse /></>)
    }

    return (
        <>
            <h3>Dev Test Playground</h3>

            <div >
                <button onClick={handleProductAdd} >Add Product [{i}] </button>
            </div>
            <div id='home-content'>
                {renderPage()}
            </div>

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
