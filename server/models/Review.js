const { Schema, model } = require('mongoose');
const productSchema = require('./Product');

const reviewSchema = new Schema(
    {
        subject: {
            type: String,
            require: 'Please provide a title for you product',
            minlength: 1,
            maxlength: 35
        },
        content: {
            type: String,
            required: 'Please provide a description for your product',
            minlength: 1,
            maxlength: 280
        },
        product: [productSchema],

    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Review = model('Review', reviewSchema);

module.exports = Review; 