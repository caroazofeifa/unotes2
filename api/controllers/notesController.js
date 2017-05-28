const mongoose = require('mongoose');
//const Note = mongoose.model('Note');
const Note = require('../models/Note');


exports.getNotes = (req, res) => {
    console.log('Ver notes')
    Note.find().exec(function(err, data) {
        res.status(200);
        res.json(data);
    });
};

exports.createNotes = (req, res) => {
    console.log('Create note!!');
    const note = new Note(req.body);
    note.save(err => {
        if (err) {
            res.status(404);
            res.json(err);
        } else {
            res.status(201);
            res.json(note);
        }   
    });
};