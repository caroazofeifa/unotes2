const mongoose = require('mongoose');
const Notebook = require('../models/Notebook');

exports.getNotebooks = (req, res) => {
  console.log('Ver notebooks');
  Notebook.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

exports.createNotebooks = (req, res) => {
  console.log('Create notebook');
  const notebook = new Notebook(req.body);
  //notebook.name=body.name;
  // console.log(notebook);
  //console.log(req.body);
  notebook.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(notebook);
    }
  });
};

exports.deleteNotebook = (req, res) => {
  console.log('Delete notebook')
  //console.log(req);
  Notebook.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    } else {
      res.status(500).json({});
    }
  });
};

exports.updateNotebook = (req, res) => {
  console.log('Update notebook')
  Note.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};
