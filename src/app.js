const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Router/login')


app.use('/' , router);

app.listen(port ,()=>{
    console.log(`Running successfully on port ${port}`)
})