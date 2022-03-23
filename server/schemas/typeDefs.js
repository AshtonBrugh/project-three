const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        products: [Product]
        reviews: [Review]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        all_products: [Product]
        products(username: String): [Product]
        product(_id: ID): Product
      }

    type Product {
        _id: ID!
        title: String
        description: String
        image: String
        username: String
<<<<<<< HEAD
        reviews: [Review]
        categories: [String]
=======
>>>>>>> d80c04505a96e3d461d751c6c93c67dc1111fd64
    }

    type Review {
        _id: ID
        content: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        products(username: String!) : [Product]
        allProducts: [Product]
        product(_id: ID!): Product
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addProduct(title: String!, description: String!, image: String!, username: String!): Product
        addReview(content: String!, username: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
