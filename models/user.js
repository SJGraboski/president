var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var UserSchema = new Schema({

userName: {
        type : string,
        unique: true
    },
 
 
  password : {
    type: string,
    unique : true
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

   if(!user.isModified('password')){
       return next();
   }

   return bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
       if(err){ return next(err); }

       return bcrypt.hash(user.password, salt, function(hashError, hash){
           if(hashError){ 
               return next(hashError); 
           }
           user.password = hash;
           return next();
       });
   });
});



// This creates our model from the above schema, using mongoose's model method
const Users = mongoose.model("Users", UsersSchema);

Users.on('index', function(error) {
  if (error) {
    console.log(error);
  }
 });

//module.exports = {UsersSchema : UsersSchema , Users : Users}

module.exports = Users;