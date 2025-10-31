const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGO_DB_URI = 'mongodb://user_4438pbggu:p4438pbggu@bytexldb.com:5050/db_4438pbggu';

mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());

// Routes
const productsRoute = require('./routes/products');
app.use('/api/products', productsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
