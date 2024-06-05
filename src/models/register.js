const mongoose = require('mongoose');
const bcrypt= require('bcrypt');

const userSchemas = new mongoose.Schema({
    fullName:{
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
    confirmPassword :{
        type :String,
        required: true
    },
})

userSchemas.pre('save',async function(next){
    if(this.isModified('password'))
        {
            this.password= await bcrypt.hash(this.password , 18);
            this.confirmPassword = await bcrypt.hash(this.confirmPassword, 18);
        }
        next();
})

const register =  new mongoose.model('Register', userSchemas);

module.exports=register;