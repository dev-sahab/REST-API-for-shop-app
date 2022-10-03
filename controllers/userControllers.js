const { readFileSync, writeFileSync } = require("fs");
const path = require("path");


/**
 * desc Get all user
 * name GET /api/v1/user
 * access public
 */


const getAllUser = ( req, res ) => {
    const userData = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))
    res.status(200).json(userData)
}

/**
 * desc Create a user
 * name POST /api/v1/user
 * access public
 */


const createUser = ( req, res ) => {
    const userData = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))

    const {name, email, cell, location, zip_code, shipping_address, billing_address } = req.body;

    if (!name || !email || !cell || !location || !zip_code || !shipping_address || !billing_address) {
        res.status(400).send('All fiels are required')
    } else {
        
        const random_id = Date.now() +'_'+ Math.floor(Math.random() * 100000)

        userData.push({
            id : random_id,
            name : name,
            email : email, 
            cell : cell,
            location : location,
            zip_code : zip_code,
            shipping_address : shipping_address,
            billing_address : billing_address
        });

        writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(userData));

        res.status(201).send('User Created Successfuly')
    }
}

// export
module.exports = {
    getAllUser,
    createUser
}