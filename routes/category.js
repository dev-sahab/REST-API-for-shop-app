const express = require('express');
const { getAllCategory, createCategory, deleteCategory, SingleCategory, updateCategory } = require('../controllers/categoryContollers');


// route init
const router = express.Router();


//routes
router.route("/").get(getAllCategory).post(createCategory);
router.route("/:id").get(SingleCategory).delete(deleteCategory).put(updateCategory).patch(updateCategory);



//module export
module.exports = router