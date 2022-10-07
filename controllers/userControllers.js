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
            id : random_id.toString(),
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

/**
 * desc Get Single user
 * name GET /api/v1/user/:id
 * access public
 */


const SingleUser = ( req, res ) => {

    const userData = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))

    if ( userData.some( data => data.id == req.params.id ) ) {

        const singleData = userData.find( data => data.id == req.params.id );

        res.status(200).json(singleData)

    } else {
        res.status(404).send('User Not Found')
    }
}

/**
 * desc Delete a user
 * name DELETE /api/v1/user/:id
 * access public
 */


const deleteUser = ( req, res ) => {
    const userData = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))

    if ( userData.some( data => data.id == req.params.id ) ) {
        const data = userData.filter( data => data.id != req.params.id);
        
        writeFileSync(path.join(__dirname, "../db/users.json"), JSON.stringify(data));

        res.status(200).send('User Deleted Successfuly');
    } else {
        res.status(404).send('User Not Found');
    }
}
/**
 * desc Update user data
 * name PUT/PATCH /api/v1/user/:id
 * access public
 */


const updateUser = ( req, res ) => {

    const userData = JSON.parse(readFileSync(path.join(__dirname, "../db/users.json")))

    if ( userData.some( data => data.id == req.params.id ) ) {
        userData[userData.findIndex(data => data.id != req.params.id)] = {
            ...userData[userData.findIndex(data => data.id != req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(userData));

        res.status(200).send('User Updated Successfuly');
    } else {
        res.status(404).send('User Not Found');
    }
}

// export
module.exports = {
    getAllUser,
    createUser,
    SingleUser,
    deleteUser,
    updateUser
}