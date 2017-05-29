const mongoose = require('mongoose');
const Notebook = require('../models/Tag');

exports.getTags = (req, res) => {
  console.log('Ver tags');
  Notebook.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

exports.createTags = (req, res) => {
  console.log('Create tag');
  const tag = new Tag(req.body);
  //notebook.name=body.name;
  //console.log(notebook);
  //console.log(req.body);
  tag.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(notebook);
    }
  });
};

exports.deleteTag = (req, res) => {
  console.log('Delete tag')
  //console.log(req);
  Tag.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    } else {
      res.status(500).json({});
    }
  });
};