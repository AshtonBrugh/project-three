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
            title
            description
            image
            username
        }
    }
    `;
    `;
