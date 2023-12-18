const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  }
});


const Item = model('Item', itemSchema);

module.exports = Item;
