const { Schema, model } = require('mongoose');
const productSchema = require('./Product');


const reviewSchema = new Schema(
    {
        content: {
            type: String,
            required: 'Please provide a description for your product',
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },

    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Review = model('Review', reviewSchema);

module.exports = Review; 