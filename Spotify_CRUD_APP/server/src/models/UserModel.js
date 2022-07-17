const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
);
module.exports = mongoose.model('UserModel', userSchema);