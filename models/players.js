var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var PlayersSchema = new Schema({
 
  cards : {
      type: []
  },

  wins : {

  },

  losses : {

  },

  president : {
    type: boolean,
    default : false
  },

  vicePresident : {
    type: boolean,
    default : false
  },

  viceAsshole : {
    type: boolean,
    default : false
  },

  asshole : {
  type : boolean,
  default: false

  },



  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rating"
    }
  ]

  


});

// This creates our model from the above schema, using mongoose's model method
const Players = mongoose.model("Players", PlayersSchema);

Players.on('index', function(error) {
  if (error) {
    console.log(error);
  }
 });

//module.exports = {PlayersSchema : PlayersSchema , Players : Players}

module.exports = Players;