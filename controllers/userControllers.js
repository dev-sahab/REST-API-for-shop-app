const { readFileSync } = require("fs");
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

// export
module.exports = {
    getAllUser
}