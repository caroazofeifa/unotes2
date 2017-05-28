const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Notebook = new Schema({
  name: String,
});

module.exports = mongoose.model('Notebook', Notebook);

//module.exports = Note;
