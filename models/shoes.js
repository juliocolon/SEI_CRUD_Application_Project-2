/////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require('./connection'); 
////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model} = mongoose; 

// make shoes schema
const shoeSchema = new Schema({
    name: {type: String,  required: true}, 
    price: {type: Number, required: true},  
    img: {type: String, required: true},  
    desc: {type: String, required: true},  
    size: {type: Number, required: true}
})

//make shoes model
const Shoes = model('Shoes', shoeSchema); 

//export shoes
module.exports = Shoes; 
