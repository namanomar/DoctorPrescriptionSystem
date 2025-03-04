const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default:0,
    },
    ndcNumber: {
        type: String,
        required: true,
        unique: true
    },
    cost: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;
