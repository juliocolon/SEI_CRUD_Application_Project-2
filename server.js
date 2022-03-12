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

// Index Route 
// app.get('/sneakers/seed', (req, res) => {
//     const startShoes = [
//         { name: "New Balance M5740LLG", price: "90.00", desc: "The 5740 is an evolution of the 574 shape that sees a subtle streamlining of the silhouette combine with bold cosmetic alterations and exaggerated features, for a modern overhaul that retains the classic model’s DNA. A leather upper features a wavy mudguard, and midsole design for a contemporary look. ‘N’ branding, and ENCAP cushioning complete the design. Here is a bold colorway featuring shades of gray. ", img: "https://i.ibb.co/MMNPfW3/newbalance.png" },
//         { name: "Nike Airmax 95", price: "170.00", desc:"The Air Max 95 was originally designed to suggest anatomical features like spine, muscle, and skin. This concept, combined with the forward-looking aesthetic, has lent the 95 an air of a shoe that is adaptable to a variety of concepts and surroundings.",  img: "https://i.ibb.co/HV3dNZb/airmax.png"},
//         { name: "Salomon Raid Wind Advanced", price: "190.00", desc:"Paying homage to the avant-garde trail shoe born in the golden years of Adventure racing, the Raid Wind Advanced is the reinterpretation of an emblematic model in the history of Salomon footwear. Built to withstand the toughest conditions, this trail running shoe features integrated toe and heel reinforcements for improved protection and durability. With a rubber compound suitable for all surfaces and a versatile tessellation, the sole of this shoe guarantees a secure grip in both wet and dry conditions.", img:"https://i.ibb.co/Jq1d7rv/salomon.png"},
//         { name: "New Balance 550", price: "120.00", desc:"The second coming of the New Balance 550 has taken the sneaker world by storm and its reign is nowhere near over. Originally introduced as a basketball sneaker in 1989, the rounded, streamlined silhouette and satisfying panel design would ensure its life off the court would be a successful one - even if it took the world 30 years to catch up.", img: "https://i.ibb.co/MRnVg0s/newbalanceblue-ccexpress.png"},
//         { name: "Nike AF1", price: "120.00", desc:"The iconic Air Force 1. It scarcely needs an introduction, right? Well, normally yes, but the new Air Force 1 Craft changes things up with a series of subtle tweaks. The overall silhouette is revamped to closer reflect the OG design. The classic leather upper adds brushed suede and visible stitching details, while the tongue and heel sport a streamlined Air Force 1 graphic and add a sense of modernization. A new, plush lining optimizes comfort.", img: "https://i.ibb.co/kQ15Rby/nikeAF1.png"},
//     ];

//     // Delete all fruits
//     Shoes.deleteMany({}).then((data) => {
//         // Seed Starter Fruits
//         Shoes.create(startShoes).then((data) => {
//             // send created fruits as response to confirm creation
//             res.json(data);
//         })

//     })
// });

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
app.get('/sneakers/sell', (req, res) => {
    res.render('shoes/New')
})

/////Delete Route 
app.delete('/sneakers/:id', (req, res) => {
    const { id } = req.params;
    Shoes.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/sneakers');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})




/////Update Route 
app.put('/sneakers/:id', (req, res) => {
    const { id } = req.params;

    Shoes.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/sneakers/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})




/////Create Route 
app.post('/sneakers', (req, res) => {
    Shoes.create(req.body)
        .then((createdShoes) => {
            res.redirect(`/sneakers/${createdShoes._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////Edit Route 
app.get('/sneakers/:id/edit', (req, res) => {
    const { id } = req.params
    Shoes.findById(id)
        .then((shoes) => {
            res.render('shoes/Edit', { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////Show Route 
app.get('/sneakers/:id', (req, res) => {
    const { id } = req.params;
    Shoes.findById(id)
        .then((shoes) => {
            res.render('shoes/Show', { shoes })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})





//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
