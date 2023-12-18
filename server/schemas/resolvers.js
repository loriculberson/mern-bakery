const { User, Item } = require('../models');

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    items: async () => {
        return Item.find();
    },

    users: async () => {
      return User.find().populate('favorites');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('favorites');
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
        return User.create({ name, email, password })
        /*
            const token = signToken(newUser);
            return { token, newUser };
        */
    },

    addFavorite: async (parent,  { userId, itemId }) => {
        return User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { favorites: itemId } },
            { new: true }
        );
    },

    removeFavorite: async (parent, { userId, itemId }) => {
        console.log("REMOVE!")
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: itemId } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
