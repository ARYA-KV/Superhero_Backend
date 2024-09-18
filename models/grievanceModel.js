const mongoose = require('mongoose');

// Grievance Schema
const grievanceSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullAddress: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    grievanceDate: {
        type: Date,
        default: Date.now 
    }
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

module.exports = Grievance;
