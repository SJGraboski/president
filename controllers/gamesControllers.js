const db = require("../models");



// Defining methods for the GameController
module.exports = {

    // creates new game with url

    create: function(req, res) {
        console.log(req.body)
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    findOneAndUpdate: function(req, res) {
           db.Games
              .findOneAndUpdate({ _id : req.params.id }, req.body)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
      }
    


}