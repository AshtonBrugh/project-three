const { User } = require('../models/index');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const Product = require('../models/Product');

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
        allProducts: async () => {
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
            console.log('[resolvers.addProduct()]> context.user', context.user);
            if (context.user) {
                const product = await Product.create({ ...args, username: context.user.username });

                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { products: product._id } },
                    { new: true }
                );
                console.log('[resolvers.addProduct()]> updatedUser', updatedUser);
                console.log('[resolvers.addProduct()]> product', product);

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
    }
};


module.exports = resolvers;