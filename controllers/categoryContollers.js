const { readFileSync, writeFileSync } = require("fs");
const path = require("path");


/**
 * desc Get all Categories
 * name GET /api/v1/category
 * access public
 */


const getAllCategory = ( req, res ) => {
    const categoryData = JSON.parse(readFileSync(path.join(__dirname, "../db/categories.json")));
    res.status(200).json(categoryData)
}



/**
 * desc Get Single products
 * name GET /api/v1/product/:id
 * access public
 */

const SingleCategory = ( req, res ) => {

    const categoryData = JSON.parse(readFileSync(path.join(__dirname, "../db/categories.json")));

    if (categoryData.some( data => data.id == req.params.id )) {
        
        const data = categoryData.find( data => data.id == req.params.id );
        res.status(200).json(data)
        
    } else {
        
        res.status(404).send('Category Not Found');

    }

}

/**
 * desc Create a category
 * name POST /api/v1/category/
 * access public
 */

const createCategory = ( req, res ) => {

    const categoryData = JSON.parse(readFileSync(path.join(__dirname, "../db/categories.json")));

    const {name, slug, photo} = req.body

    if ( !name || !slug || !photo) {
        res.status(400).send("All Fields Are Required => name, slug, photo")
    } else {
        const random_id = Date.now() +'_'+ Math.floor(Math.random() * 100000)
        categoryData.push({
            id : random_id,
            name,
            slug, 
            photo
        });

        writeFileSync(path.join(__dirname, '../db/categories.json'), JSON.stringify(categoryData));
        res.status(201).send('Category Added Successfuly')
    }

}


/**
 * desc Delete category
 * name DELETE /api/v1/category/:id
 * access public
 */

const deleteCategory = ( req, res ) => {

    const categoryData = JSON.parse(readFileSync(path.join(__dirname, "../db/categories.json")));

    if ( categoryData.some( data => data.id == req.params.id ) ) {

        const deletedData = categoryData.filter( data => data.id != req.params.id);
        
        writeFileSync(path.join(__dirname, '../db/categories.json'), JSON.stringify(deletedData));
        res.status(200).send("Category Deleted Successfully")

    } else {

        res.status(404).send('Category Not Found')
    }

}

/**
 * desc Update category
 * name PUT?PATCH /api/v1/category/:id
 * access public
 */

const updateCategory = ( req, res ) => {

    const categoryData = JSON.parse(readFileSync(path.join(__dirname, "../db/categories.json")));

    if ( categoryData.some( data => data.id == req.params.id ) ) {

        categoryData[categoryData.findIndex( data => data.id == req.params.id)] = {
            ...categoryData[categoryData.findIndex( data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/categories.json'), JSON.stringify(categoryData));
        res.status(200).send("Category Update Successfully")

    } else {

        res.status(404).send('Category Not Found')
    }

}


// module export
module.exports = {
    getAllCategory,
    createCategory,
    deleteCategory,
    SingleCategory,
    updateCategory
}