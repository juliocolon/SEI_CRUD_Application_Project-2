/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config(); //Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const shoesController = require('./controllers/shoes')
const userController = require("./controllers/user")
const path = require("path")
const session = require("express-session");
const MongoStore = require("connect-mongo");
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

/////////////
// Routes
/////////////
app.use('/sneakers', shoesController)// send all "/sneakers" routes to shoes router
app.use("/user", userController); // send all "/user" routes to user router

app.get("/", (req, res) => {
    res.render("Index.jsx");
  });

  // middleware to setup session
app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
      saveUninitialized: true,
      resave: false,
    })
  );

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
