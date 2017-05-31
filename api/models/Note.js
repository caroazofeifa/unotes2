const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Note = new Schema({
  title: String,
  description: String,
  idNotebook: String,
  idTags:[],
  //missing the tags atrib
});

module.exports = mongoose.model('Note', Note);
