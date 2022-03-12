const mongoose = require('./connection'); 


const { Schema, model} = mongoose; 

const shoeSchema = new Schema({
    name: String, 
    price: Number, 
    img: String, 
    desc: String, 
    size: Number,
    quantity: Number,
})

const Shoes = model('Shoes', shoeSchema); 

module.exports = Shoes; 
