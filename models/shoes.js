const mongoose = require('./connection'); 


const { Schema, model} = mongoose; 

const shoeSchema = new Schema({
    name: {type: String,  required: true}, 
    price: {type: Number, required: true},  
    img: {type: String, required: true},  
    desc: {type: String, required: true},  
    size: {type: Number, required: true}
})

const Shoes = model('Shoes', shoeSchema); 

module.exports = Shoes; 
