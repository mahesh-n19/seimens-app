const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName : {
        type : String,
        required : true,
        match: [/^[A-Za-z]+$/, "First name should contain only letters"]
    },
    lastName : {
        type : String, 
        required : false,
        match: [/^[A-Za-z]+$/, "Last name should contain only letters"]
    }, 
    email : {
        type : String, 
        required : true, 
        unique : true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    jobTitle : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum: ["Male", "Female", "Other"]
    }

},{timestamps : true});

module.exports = mongoose.model('user', userSchema);