const { Schema, model } = require('mongoose');
const userSchema = require('./User');

const productSchema = new Schema(
    {
        title: {
            type: String,
            require: 'Please provide a title for you product',
            minlength: 1,
            maxlength: 35
        },
        description: {
            type: String,
            required: 'Please provide a description for your product',
            minlength: 1,
            maxlength: 280
        },
        image: {
            type: String,
            required: "Please provide a image for your product",
            minlength: 1,
            maxlength: 280
        },
        user: [userSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product; 