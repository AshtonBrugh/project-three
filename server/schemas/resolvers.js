const { User, Product } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in!')
        },
        users: async () => {
            return User.find({})
                .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
        },
        product: async (parent, { _id }) => {
            return Product.findOne({ _id })
        },
        all_products: async () => {
            return Product.find({});
        },
        products: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Product.find(params);
        }
    },
    Mutation: {
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };

        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addProduct: async (parent, args, context) => {
            const { title, description, image, salestart, salelength, startingprice, categories } = args;
            if (context.user) {
                const product = await Product.create({
                    title,
                    description,
                    image,
                    userid: context.user._id,
                    salestart,
                    salelength,
                    startingprice,
                    categories
                });

                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { products: product._id } },
                    { new: true }
                );

                return product;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addReview: async (parent, { productId, content }, context) => {
            if (context.user) {
                const updateProduct = await Product.findOneAndUpdate(
                    { _id: productId },
                    { $push: { reviews: { content, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updateProduct;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        update_current_bid: async (parent, { productid, currentbid }, context) => {
            console.log('context.user', context.user)
            if (context.user) {
                const updateProduct = await Product.findOneAndUpdate(
                    { _id: productid },
                    { currentbid, currentbid_userid: context.user._id },
                    { new: true, runValidators: true }
                );
                console.log('resolvers.js-update_current_bid -> updatedProduct', updateProduct);
                return updateProduct;
            } else throw new AuthenticationError('You need to be logged in!');
        }
    }
};


module.exports = resolvers;
