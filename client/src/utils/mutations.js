import { gql } from '@apollo/client';

export const ADD_FAVORITE = gql`
  mutation addFavorite($userId: ID!, $itemId: itemId) {
    addFavorite(userId: $userId, itemId: $itemId) {
      user {
        _id
        name
        favorites {
            _id
            name
            calories
            cost
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;