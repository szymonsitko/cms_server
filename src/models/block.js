import mongoose from 'mongoose';

// Block schema
let blockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

let Block = mongoose.model('Block', blockSchema);

export default Block;