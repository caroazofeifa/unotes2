const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
//const Note = mongoose.model('Note');
const Note = require('../models/Note');


exports.getNotes = (req, res) => {
  console.log('Ver notes')
  Note.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

exports.createNotes = (req, res) => {
  console.log('Create note');
  const id= new ObjectID();
  const newNote = new Note({
    _id: id,
    title: req.body.title,
    description:req.body.description,
    idNotebook:req.body.idNotebook,
    idTags:req.body.idTags,
  });

  console.log(newNote);
  //const note = new Note(req.body);
  newNote.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(id);
    }
  });
};

exports.deleteNote = (req, res) => {
  console.log('Delete note')
  //console.log(req);
  Note.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    }
    else {
      res.status(500).json({});
    }
  });
};

exports.updateNote = (req, res) => {
  console.log('Update note');
  Note.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};
