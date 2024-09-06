const mongoose = require('mongoose');

const conn = await mongoose.connect("mongodb://localhost:27017/");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;