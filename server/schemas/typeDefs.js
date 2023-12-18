const typeDefs = `
    type User {
    _id: ID
    name: String!
    email: String
    password: String
    favorites: [Item]
    }

    type Item {
        _id: ID
        name: String
        cost: Int
        calories: Int
        img: String
    }

    type Query {
        items: [Item]!
        users: [User]
        user(userId: ID!): User
    }

    type Mutation {
        addUser(name: String!, email: String, password: String): User
        addFavorite(userId: ID!, itemId: ID): User
        removeFavorite(userId: ID, itemId: ID): User
    }
`;

module.exports = typeDefs;
