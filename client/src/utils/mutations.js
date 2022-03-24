import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
    `;

export const QUERY_ME = gql`
    {
      me {
        _id
        username
        email
        products
      }
    }
  `;



export const QUERY_ADD_PRODUCT = gql`
    mutation addProduct($title: String!, $description: String!, $image: String!, $username: String!) {
        addProduct(title: $title, description: $description, image: $image, username: $username) {
            _id
            title
            description
            image
            seller {
                _id
                username
            }
            postdate
            salestart
            salelength
            startingprice
            reviews
            categories
            checkactive
        }
    }
    `;

export const ADD_REVIEW = gql`
  mutation addReview($content: String!, $username: String!) {
    addReview(content: $content, username: $username) {
      content 
      username
    }
  }
`;

export const UPDATE_CURRENT_BID = gql`
    mutation update_current_bid($productid: ID!, $currentbid: Float!){
        update_current_bid(productid: $productid, currentbid: $currentbid){
            _id
            title
            description
            image
            seller{
                _id
                username
            }
            postdate
            salestart
            saleend
            startingprice
            categories
            currentbid
        }
    }
`;