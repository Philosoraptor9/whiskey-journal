const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongoSchema = new Schema ({
    brand: {type: String},
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true
    },
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

class WhiskeyClass {

}

mongoSchema.loadClass(WhiskeyClass);

const Whiskey = mongoose.model('Whiskey', mongoSchema);

export default Whiskey;