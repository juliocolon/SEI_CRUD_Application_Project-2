/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config(); //Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Shoes = require('./models/shoes.js');
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


//Models connection

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish 

mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
    .on('open', () => console.log('We are in the building'))
    .on('close', () => console.log('Mongo Has left the building'))
    .on('error', (error) => console.log(error))


////////////////////////////
////ROUTES
////////////////////////////

/////Index Route 
app.get('/sneakers/seed', (req, res) => {
    const startShoes = [
        { name: "New Balance M5740LLG", price: "$90.00", img: "/images/newbalance.png" },
        { name: "Nike Airmax 95", price: "$120.00", img: "/images/airmax.png" }
    ];

    // Delete all fruits
    Shoes.deleteMany({}).then((data) => {
        // Seed Starter Fruits
        Shoes.create(startShoes).then((data) => {
            // send created fruits as response to confirm creation
            res.json(data);
        })

    })
});

app.get('/sneakers', (req, res) => {
    Shoes.find({})
        .then((shoes) => {
            res.render("shoes/Index", { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//////New Route 


/////Delete Route 



/////Update Route 



/////Create Route 


///////Edit Route 



///////Show Route 






//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
