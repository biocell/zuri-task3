const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Please enter a valid email address"],
    },
    country: {
        type: String,
        trim: true,
        required: [true, 'Please input your country']
    }
});

module.exports = mongoose.model('User', UserSchema);