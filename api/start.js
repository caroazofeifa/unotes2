require('dotenv').config()

const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const port = process.env.PORT;
const uristring = process.env.DB || 'localhost:27017/unotes';

app.listen(3000, () => {
  console.log(`Server running on port`);
});

mongoose.connect(uristring)
.then(
  () => console.log('Connected to MongoDB'),
  error => console.log(`Error to connect with MongoDB.\nDetails: ${error}`)
);
