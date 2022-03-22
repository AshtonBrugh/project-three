import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_ALL_PRODUCTS, QUERY_ME } from '../../utils/queries';

import { AiFillFire } from 'react-icons/ai'

import './css/post.css';



const Post = () => {

    const [productTitle, setProductTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');



    const [addProduct, { error }] = useMutation(QUERY_ADD_PRODUCT, {
        update(cache, { data: { addProduct } }) {
            try {
                const { products } = cache.readQuery({ query: QUERY_ALL_PRODUCTS });
                cache.writeQuery({
                    query: QUERY_ALL_PRODUCTS,
                    data: { products: [addProduct, ...products] }
                });
            } catch (e) {
                console.error(e);
            }
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, products: [...me.products, addProduct] } }
            });
        }
    });

    function imageChange(event) {
        setProductImage([...event.target.files]);
    }

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setProductDescription(event.target.value);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addProduct({
                variables: { productTitle, productDescription, productImage }
            });
            setProductTitle('');
            setProductDescription('');
            setProductImage('');
        } catch (e) {
            console.error(e);
        }
    };

    // let inputFile = document.getElementById('file-input');
    // let fileName = document.getElementById('file-name');
    // inputFile.addEventListener('change', function (event) {
    //     let uploadedFile = event.target.files[0].name;
    //     fileName.textContent = uploadedFile;
    // })


    return (
        <div className='container'>
            <form className="input-form" onSubmit={handleFormSubmit}>
                <div className='input-container'>
                    <div className='icon'>
                        <span id='file-name'><AiFillFire size={75} /></span>
                    </div>
                    <div className='upload'>
                        <input type='file' id='file-input' onChange={imageChange} onSubmit={handleFormSubmit}></input>
                        <label for='file-input'>Upload Image</label>
                    </div>
                    <div>
                        <input className='input-area input-title' type='text' placeholder='Product Title' value={productTitle} onChange={handleChange} onSubmit={handleFormSubmit} ></input>
                    </div>
                    <div>
                        <textarea className="input-area" placeholder="Product Description" rows="5" value={productDescription} onSubmit={handleFormSubmit}></textarea>
                    </div>
                    <div>

                    </div>

                    <button className="button" type="submit">
                        Post
                    </button>
                </div>

            </form>
        </div>
    )
}


export default Post;
