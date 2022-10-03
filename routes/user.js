const express = require('express');
const { getAllUser } = require('../controllers/userControllers');


// route init
const route = express.Router();


//routes
route.get("/", getAllUser);



//module export
module.exports = route