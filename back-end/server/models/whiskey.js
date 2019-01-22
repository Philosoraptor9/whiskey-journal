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
    static async list({ offset = 0, limit = 10 } = {}) {
        const whiskeys = await this.find({})
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit);
        return { whiskeys };
    }
    static async getBySlug({ slug }) {

    }
    static async add({ name }) { 

    }
    static async edit({ name }){

    }
}

// may need to add other keys to add and edit methods once tested 

mongoSchema.loadClass(WhiskeyClass);

const Whiskey = mongoose.model('Whiskey', mongoSchema);

export default Whiskey;