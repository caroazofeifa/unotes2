const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const Tag = require('../models/Tag');

exports.getTags = (req, res) => {
  console.log('Ver tags');
  Tag.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

exports.createTags = (req, res) => {
  console.log('Create tag');
  const id= new ObjectID();
  const tag = new Tag({
    _id: id,
    name: req.body.name,
    color:req.body.color,
  });  
  tag.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(id);
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

exports.updateTag = (req, res) => {
  console.log(req.body);
  Tag.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};
