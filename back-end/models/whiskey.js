const mongoose = require('mongoose');

const whiskeySchema = new mongoose.Schema ({
    brand: {type: String},
    name: {type: String},
    country: {type: String},
    age: {type: Number},
    type: {type: String}, 
    proof: {type: Number},
    color: {type: String},
    price: {type: Number},
    notes: {type: String},
    rating: {
        type: Number, 
        min: 0,
        max: 5
    }
});

module.exports = mongoose.model('Whiskey', whiskeySchema)