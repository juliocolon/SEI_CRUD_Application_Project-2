const mongoose = require('mongoose'); 

const shoeSchema = new mongoose.Schema({
    name: {type: String,required: true }, 
    price: {type: String,required: true }, 
    img: {type: String,required: true }, 
    desc: {type: String,required: true }, 
})

const Shoes = mongoose.model('Shoes', shoeSchema); 

module.exports = Shoes; 
