const { readFileSync, writeFileSync } = require("fs");
const path = require("path");


/**
 * desc Get all Tag
 * name GET /api/v1/tag
 * access public
 */


const getAllTag = ( req, res ) => {
    const tagData = JSON.parse(readFileSync(path.join(__dirname, "../db/tags.json")));
    res.status(200).json(tagData)
}



/**
 * desc Get Single tag
 * name GET /api/v1/tag/:id
 * access public
 */

const singleTag = ( req, res ) => {

    const tagData = JSON.parse(readFileSync(path.join(__dirname, "../db/tags.json")));

    if (tagData.some( data => data.id == req.params.id )) {
        
        const data = tagData.find( data => data.id == req.params.id );
        res.status(200).json(data)
        
    } else {
        
        res.status(404).send('Tag Not Found');

    }

}

/**
 * desc Create a tag
 * name POST /api/v1/tag/
 * access public
 */

const createTag = ( req, res ) => {

    const tagData = JSON.parse(readFileSync(path.join(__dirname, "../db/tags.json")));

    const {name, slug} = req.body

    if ( !name || !slug ) {
        res.status(400).send("Name & Slug key are required")
    } else {
        const random_id = Date.now() +'_'+ Math.floor(Math.random() * 100000)
        tagData.push({
            id : random_id,
            name,
            slug
        });

        writeFileSync(path.join(__dirname, '../db/tags.json'), JSON.stringify(tagData));
        res.status(201).send('Tag Added Successfuly')
    }

}


/**
 * desc Delete tag
 * name DELETE /api/v1/tag/:id
 * access public
 */

const deleteTag = ( req, res ) => {

    const tagData = JSON.parse(readFileSync(path.join(__dirname, "../db/tags.json")));

    if ( tagData.some( data => data.id == req.params.id ) ) {

        const deletedData = tagData.filter( data => data.id != req.params.id);
        
        writeFileSync(path.join(__dirname, '../db/tags.json'), JSON.stringify(deletedData));
        res.status(200).send("Tag Deleted Successfully")

    } else {

        res.status(404).send('Tag Not Found')
    }

}

/**
 * desc Update Tag
 * name PUT?PATCH /api/v1/tag/:id
 * access public
 */

const updateTag = ( req, res ) => {

    const tagData = JSON.parse(readFileSync(path.join(__dirname, "../db/tags.json")));

    if ( tagData.some( data => data.id == req.params.id ) ) {

        tagData[tagData.findIndex( data => data.id == req.params.id)] = {
            ...tagData[tagData.findIndex( data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/tags.json'), JSON.stringify(tagData));
        res.status(200).send("Tags Update Successfully")

    } else {

        res.status(404).send('Tags Not Found')
    }

}


// module export
module.exports = {
    getAllTag,
    createTag,
    singleTag,
    deleteTag,
    updateTag
}