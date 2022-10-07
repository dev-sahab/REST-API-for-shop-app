const express = require('express');
const { getAllProduct, SingleProduct, createProduct, deleteProduct, updateProduct } = require('../controllers/productControllers');


// route init
const router = express.Router();


//routes
router.route("/").get(getAllProduct).post(createProduct);
router.route("/:id").get(SingleProduct).delete(deleteProduct).put(updateProduct).patch(updateProduct);



//module export
module.exports = router