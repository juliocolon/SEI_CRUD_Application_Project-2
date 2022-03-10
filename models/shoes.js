const mongoose = require('mongoose'); 

const shoeSchema = new mongoose.Schema({
    name: String, 
    price: String,
    img: String, 
})

const Shoes = mongoose.model('Shoes', shoeSchema); 

module.exports = Shoes; 
