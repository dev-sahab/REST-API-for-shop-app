const express = require('express');
const { getAllUser, createUser } = require('../controllers/userControllers');


// route init
const route = express.Router();


//routes
route.get("/", getAllUser);
route.post("/", createUser);



//module export
module.exports = route