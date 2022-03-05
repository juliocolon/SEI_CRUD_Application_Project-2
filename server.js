/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config(); //Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override'); 
const mongoose = require('mongoose'); 
const port = process.env.PORT || 3000


//Views
/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.static("public")); // serve files from public statically

app.get('/shoes', (req, res) => {
    res.json({message: 'hello world'})
})


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
