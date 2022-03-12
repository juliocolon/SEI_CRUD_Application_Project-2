const mongoose = require('./connection'); 


const { Schema, model} = mongoose; 

const shoeSchema = new Schema({
    name: String, 
    price: String, 
    img: String, 
    desc: String
})

const Shoes = model('Shoes', shoeSchema); 

module.exports = Shoes; 
