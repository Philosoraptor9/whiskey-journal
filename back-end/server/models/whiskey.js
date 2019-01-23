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
        required: true,
        default: Date.now
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
        const WhiskeyDoc = await this.findOne({ slug })
        if (!WhiskeyDoc) {
            throw new error ('Whiskey not found');
        }

        const whiskey = WhiskeyDoc.toObject();

        // Will need a .sort & .map function here to organize Whiskeys and display
        return whiskey;
    }

    static async add({ name }) { 
        const slug = await generateSlug(this, name);

        if (!slug){
            throw new error(`Error generating slug for ${name}`);
        }

        return this.create({
            name,
            slug
        });
    }
    static async edit({ name }){

    }
}

// may need to add other keys to add and edit methods once tested 

mongoSchema.loadClass(WhiskeyClass);

const Whiskey = mongoose.model('Whiskey', mongoSchema);

export default Whiskey;