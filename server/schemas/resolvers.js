const { User, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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

    favs: async (parent, { userId }, context) => {
      if (context.user) {
        return User.findOne({ _id: userId }).populate('favorites');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
        const newUser = await User.create({ name, email, password })
            const token = signToken(newUser);
            return { token, newUser };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addFavorite: async (parent,  { userId, itemId }, context) => {
      if (context.user){
        return User.findOneAndUpdate(
          { _id: context.user._id},
            { $addToSet: { favorites: itemId } },
            { new: true }
        );

      }
      throw AuthenticationError;
    },

    removeFavorite: async (parent, { userId, itemId }, context) => {
      if (context.user){
        return User.findOneAndUpdate(
          { _id: context.user._id},
          { $pull: { favorites: itemId } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
