const express = require('express');
const router = express.Router();
require('../DB/connection');
const register = require('../models/register');

router.get('/', (req,res)=>{
    res.send('hello from the server')
})

router.post('/signUp', async(req,res)=>{
    try{
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        if(password == confirmPassword)
            {
                const registerUser =  new register({
                    fullName :  req.body.fullName,
                    email : req.body.email,
                    password : req.body.password,
                    confirmPassword : req.body.confirmPassword
                })

                const registeredUser =await registerUser.save();
                res.send(registeredUser);
            }
            else{
                res.send("password not matched")
            }
         

    }
    catch(e){
    console.error(e); // Log the error to the console
    res.status(500).send(`Error: ${e.message}`);
  }
}

)

module.exports = router;