const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    },
    updatedAt:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('users', usersSchema);