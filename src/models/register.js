const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    fullname:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    password :{
        type :String,
        required: true
    },
    ConfirmPassword :{
        type :String,
        required: true
    },
})

const register =  new mongoose.model('Register', userSchemas);

module.exports=register;