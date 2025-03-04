import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    image: {
        type: String, // Store as a URL or file path
        required: false
    },
    pharmacistUniqueID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    governmentProof: {
        type: String, // Can be a document URL or ID number
        required: false
    },
    address: {
        type: String,
        required: false
    },
    shopName: {
        type: String,
        required: false
    },
    degreeProof: {
        type: String, // URL or file path for proof document
        required: false
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
