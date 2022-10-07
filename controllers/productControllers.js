const { readFileSync, writeFileSync } = require("fs");
const path = require("path");


/**
 * desc Get all products
 * name GET /api/v1/product
 * access public
 */


const getAllProduct = ( req, res ) => {
    const productData = JSON.parse(readFileSync(path.join(__dirname, "../db/products.json")))
    res.status(200).json(productData)
}



/**
 * desc Get Single products
 * name GET /api/v1/product/:id
 * access public
 */

const SingleProduct = ( req, res ) => {

    const productData = JSON.parse(readFileSync(path.join(__dirname, "../db/products.json")));

    if (productData.some( data => data.id == req.params.id )) {
        
        const data = productData.find( data => data.id == req.params.id );
        res.status(200).json(data)
        
    } else {
        
        res.status(404).send('Product Not Found');

    }

}

/**
 * desc Create a products
 * name POST /api/v1/product/
 * access public
 */

const createProduct = ( req, res ) => {

    const productData = JSON.parse(readFileSync(path.join(__dirname, "../db/products.json")));

    const {name, slug, regular_price, sale_price, stock, short_desc, long_desc, category, tag} = req.body

    if ( !name || !slug || !regular_price || !sale_price || !stock || !short_desc || !long_desc || !category || !tag) {
        res.status(400).send("All Fields Are Required => name, slug, regular_price, sale_price, stock, short_desc, long_desc, category, tag")
    } else {
        const random_id = Date.now() +'_'+ Math.floor(Math.random() * 100000)
        productData.push({
            id : random_id,
            name,
            slug, 
            regular_price,
            sale_price,
            stock,
            short_desc,
            long_desc,
            category,
            tag
        });

        writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(productData));
        res.status(201).send('Product Added Successfuly')
    }

}


/**
 * desc Delete product
 * name DELETE /api/v1/product/:id
 * access public
 */

const deleteProduct = ( req, res ) => {

    const productData = JSON.parse(readFileSync(path.join(__dirname, "../db/products.json")));

    if ( productData.some( data => data.id == req.params.id ) ) {

        const deletedData = productData.filter( data => data.id != req.params.id);
        
        writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(deletedData));
        res.status(200).send("Product Deleted Successfully")

    } else {

        res.status(404).send('Product Not Found')
    }

}

/**
 * desc Update product
 * name PUT?PATCH /api/v1/product/:id
 * access public
 */

const updateProduct = ( req, res ) => {

    const productData = JSON.parse(readFileSync(path.join(__dirname, "../db/products.json")));

    if ( productData.some( data => data.id == req.params.id ) ) {

        productData[productData.findIndex( data => data.id == req.params.id)] = {
            ...productData[productData.findIndex( data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(productData));
        res.status(200).send("Product Update Successfully")

    } else {

        res.status(404).send('Product Not Found')
    }

}


// module export
module.exports = {
    getAllProduct,
    SingleProduct,
    createProduct,
    deleteProduct,
    updateProduct
}