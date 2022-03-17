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
            virtuals: true
        }
    }
);

PostSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

PostSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Post = model('Post', PostSchema);


module.exports = User;