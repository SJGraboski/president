const db = require("../models");



// Defining methods for the PlayersController
module.exports = {
    findAll: function(req, res) {
        db.Players
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
    findOne : function(req,res) {
      db.Players
      .findOne({ _id: req.params.id })
      .populate("games")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  
    create: function(req, res) {
      console.log(req.body)
      db.Players
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
    remove: function(req, res) {
      db.Players
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
    findOneAndUpdate: function(req, res) {
      db.Players
          .findOneAndUpdate({ _id : req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
  
     
  
  };
  