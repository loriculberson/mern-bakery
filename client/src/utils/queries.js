import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      name
      calories
      cost
      img
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      name
      email
      favorites
    }
  }
`;