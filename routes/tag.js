const express = require('express');
const { getAllTag, createTag, singleTag, deleteTag, updateTag } = require('../controllers/tagContollers');


// route init
const router = express.Router();


//routes
router.route("/").get(getAllTag).post(createTag);
router.route("/:id").get(singleTag).delete(deleteTag).put(updateTag).patch(updateTag);



//module export
module.exports = router