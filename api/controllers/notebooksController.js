const mongoose = require('mongoose');
const Notebook = require('../models/Notebook');

exports.getNotebooks = (req, res) => {
    console.log('Ver notebooks');
    Notebook.find().exec(function(err, data) {
        res.status(200);
        res.json(data);
    });
};

exports.createNotebooks = (req, res) => {
    console.log('Create notebook');
    const notebook = new Notebook(req.body);
    //notebook.name=body.name;
    //console.log(notebook);
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

