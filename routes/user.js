const express = require('express');
const { getAllUser, createUser, deleteUser, SingleUser, updateUser } = require('../controllers/userControllers');


// route init
const router = express.Router();


//routes
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").delete(deleteUser).get(SingleUser).put(updateUser).patch(updateUser);



//module export
module.exports = router