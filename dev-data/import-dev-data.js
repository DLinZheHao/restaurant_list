// import data to database => node ./dev-data/import-dev-data.js --import
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('../models/restaurantModel');

mongoose.set('strictQuery', true);
dotenv.config({ path: `./config.env` });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const restaurant = JSON.parse(
  fs.readFileSync(`${__dirname}/restaurant.json`, 'utf-8')
);

//mongoose.connect(local_host, { useNewUrlParser: true });
mongoose
  //.connect(process.env.DATABASE_LOCAL)//
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    //console.log(con.connections);
    console.log('DB connection successfully established');
  });

// import data to database => node ./dev-data/data/import-dev-data.js --import
const importData = async () => {
  console.log('start!');
  try {
    await Restaurant.create(restaurant, { validateBeforeSave: false });
    console.log('Database successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}
