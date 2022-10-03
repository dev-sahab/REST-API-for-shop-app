const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const userRouter = require('./routes/user');

// express init
const app = express();

// environment variables
const PORT = process.env.PORT || 4000;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// static public
app.use(express.static('public'));

// routes
app.use('/api/v1/user', userRouter);



// listen port
app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})