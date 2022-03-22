const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const PostSchema = new Schema(
    {
        itemname: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 255
        },
        description: {
            type: String,
            required: true,
            maxlength: 500
        },
        salestart: {
            type: Schema.Types.Date,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Post = model('Post', PostSchema);


module.exports = Post;