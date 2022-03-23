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
<<<<<<< HEAD
        username: {
            type: String,
            required: true
<<<<<<< HEAD
=======
        userid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        salestart: {
            type: Schema.Types.Date,
            required: true,
            default: new Date(0, 0, 0, 24, 0, 0, 0)
        },
        salelength: {
            type: Schema.Types.Date,
            required: true,
            min: 0,
            max: 300,
            default: new Date(0, 0, 0, 4, 0, 0, 0)
        },
        startingprice: {
            type: Number,
            required: true,
            default: 0
        },
        postdate: {
            type: Schema.Types.Date,
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
>>>>>>> ff7405377e3e7742cecf53726a009c2bd822491a
        },
        categories: [{ type: String }]
=======
        }
>>>>>>> d80c04505a96e3d461d751c6c93c67dc1111fd64
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

productSchema.virtual('username').get(async function () {
    const user = await User.findById(this.userid);
    return user.username;
});

productSchema.virtual('checkActive').get(async function () {
    const start = this.postdate + this.saleStart;
    const end = start + this.salelength;
    return { active: (Date.now() > start && Date.now() < end), start, end };
});

const Product = model('Product', productSchema);

module.exports = Product; 
