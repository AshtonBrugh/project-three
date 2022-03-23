const { Schema, model } = require('mongoose');


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
        username: {
            type: String,
            required: true
<<<<<<< HEAD
        },
        reviews: [reviewSchema],
        categories: [{ type: String }]
=======
        }
>>>>>>> d80c04505a96e3d461d751c6c93c67dc1111fd64
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product; 
