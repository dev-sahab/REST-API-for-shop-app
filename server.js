const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');
const tagRouter = require('./routes/tag');

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
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/tag', tagRouter);



// listen port
app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})