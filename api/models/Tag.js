const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tag = new Schema({
  name: String,
});

module.exports = mongoose.model('Tag', Tag);
