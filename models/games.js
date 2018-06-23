var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var GamesSchemea = ({

    deck: {
        type: []
    },

    stories: [{ 
        
        type: Schema.Types.ObjectId, ref: 'Players' 

}],

    roomId: {
        type: string,
        unique : true
    }


})


// This creates our model from the above schema, using mongoose's model method


 const Games = mongoose.model("Games", GamesSchemea);

 Games.on('index', function(error){
     if(error){
         console.log(error);
     }
 });


module.exports= Games;