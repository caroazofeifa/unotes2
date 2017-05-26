const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Llene este campo'
    },
    description: {
        type: String,
        required: 'Llene este campo mae!!'
    },
    idNotebook: {
        type: Number,
        required: 'Llene este campo'
    },
    idTag: [Number]
});

module.exports = mongoose.model('store', noteSchema);
