const { Schema, model } = require('mongoose');
const Post = require('./Post');

const AuctionSchema = new Schema(
    {
        postid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        },
        itemid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
        startingprice: {
            type: Number,
            required: true,
            maxlength: 500
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
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

AuctionSchema.virtual('getStartEnd').get(async function () {
    const post = await Post.findById(this.postid);
    if (post) {
        const start = post.postdate + saleStart;
        const end = start + salelength;
        return { start, end };
    }
    else return { error: 'An error occurred: No post with that ID' }
});

AuctionSchema.virtual('checkActive').get(async function () {
    const post = await Post.findById(this.itemid);
    if (post) {
        const start = post.postdate + saleStart;
        const end = start + salelength;
        return { active: (Date.now() > start && Date.now() < end) };
    }
    else return { error: 'An error occurred: No post with that ID' }
});

const Auction = model('Auction', AuctionSchema);


module.exports = Auction;