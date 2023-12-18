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
