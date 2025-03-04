const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    medicines: [{
        medicine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Medicine',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    gst: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
