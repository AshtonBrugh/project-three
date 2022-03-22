const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        products: [Product]
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
        reviews: [Review]
        categories: [String]
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
        addReview(productId: ID!, content: String!): Product
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
