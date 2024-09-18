const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.models.User || mongoose.model('User', adminSchema, 'users');

module.exports = Admin;
