const { Schema, model } = require('mongoose');
const User = require('./User');

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Please provide a title for you product',
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
        seller: {
            type: User,
            required: true
        },
        salestart: {
            type: String,
            required: true,
            default: () => {
                const now = new Date();
                now.setDate(now.getDate() + 1);
                now.setHours(now.getHours() + 4);
            }
        },
        saleend: {
            type: String,
            required: true,
            default: () => {
                const now = new Date();
                now.setDate(now.getDate() + 1);
                now.setHours(now.getHours() + 4);
            }
        },
        startingprice: {
            type: Number,
            required: true,
            default: 0
        },
        postdate: {
            type: String,
            required: true,
            default: Date.now()
        },
        currentbid: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        currentbid_userid: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        categories: [{ type: String }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product; 
