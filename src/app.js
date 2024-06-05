const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Router/login')

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/' , router);
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.listen(port ,()=>{
    console.log(`Running successfully on port ${port}`)
})