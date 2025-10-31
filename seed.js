const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://user_4438pbggu:p4438pbggu@bytexldb.com:5050/db_4438pbggu')
  .then(async () => {
    await Product.deleteMany(); // clears old data
    await Product.insertMany([
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 45 }
    ]);
    console.log("Products seeded!");
    process.exit();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    process.exit(1);
  });
