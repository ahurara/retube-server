const exporess = require('express');
const router = exporess.Router();
require('../DB/connection');
const register = require('../models/register');

router.get('/', (req,res)=>{
    res.send('hello from the server')
})

router.post('/singUp', async(req,res)=>{
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
         

    }
    catch(err){
        console.log(`error ${err}`)
    }
})

module.exports = router;