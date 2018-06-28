var mongoose = require("mongoose");
var bcrypt = require("bcrypt");


const SALT_WORK_FACTOR = 10;
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var UserSchema = new Schema({

    username: {

        type : 'string',
        unique: true
    },


    password : {
        type: 'string',
    },

    created : {
        type: Date, 
        default: Date.now,

    }





  // ratings: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Rating"
  //   }
  // ]

  


});


UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

// On save, hash the password
UserSchema.pre('save', function saveHook(next) {
   var user = this;
   console.log(user);

   if(!user.isModified('password')){
       console.log("huh");
       return next();
   }
   console.log("ok");
   return bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
       if(err){ return next(err); }
       console.log("sure");
       return bcrypt.hash(user.password, salt, function(hashError, hash){
           if(hashError){ 
               return next(hashError); 
           }
           user.password = hash;
           console.log("fine");
           return next();
       });
   });
});



// This creates our model from the above schema, using mongoose's model method
const Users = mongoose.model("Users", UserSchema);

Users.on('index', function(error) {
  if (error) {
    console.log(error);
  }
 });

//module.exports = {UsersSchema : UsersSchema , Users : Users}

module.exports = Users;