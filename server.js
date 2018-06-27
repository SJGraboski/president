const express = require ("express");
const path = require ("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require('./routes/routes')

const PORT = process.env.PORT || 8081;


app.use(express.static("./client/build"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
// Serve up static assets

// Add routes, both API and view
app.use(routes);

app.use(express.static(path.join(__dirname, "client")))
// ... other app.use middleware setups
//app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
//app.get("*", (req, res) => {  
 //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//});

app.listen(PORT, function(){
    console.log(`Server now on port ${PORT}`)
});

//g



// Set up promises with mongoose
mongoose.Promise = global.Promise;
 mongoose.set('debug', false) // enable logging collection methods + arguments to the console
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/President");


