const db = require('../config/connection');
const { Item, User} = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const itemData = require('./itemData.json');

db.once('open', async () => {
    // clean database
    await cleanDB("Item", "items");
    await cleanDB("User", "users");
  
    // bulk create each model
    const items = await Item.insertMany(itemData);
    const users = await User.insertMany(userData);
      
    const generateRandomItem = () => items[Math.floor(Math.random() * items.length)]
    /*
    const addToFavorites = (user) => {
        check if favorite exists in user.favorites
        if not => generateRandomItem() and add to user.favorites
    }
    */

    for (user of users) {
        for (let i = 0; i < 3; i++) {
            const tempItem = generateRandomItem();
            
            user.favorites.push(tempItem._id);
            await user.save();
        }
        console.log('user', user)
    }
  
    console.log('all done!');
    process.exit(0);
  });