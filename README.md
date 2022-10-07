## This is Express Server REST API for a Shop app

Hi, This is a simple json db API for a shop app. You can use this API for testing purpose. Here is using Node & Express Server and using json database system for all data.

#### Git Clone

```console
$ git clone https://github.com/shb-services/REST-API-for-shop-app.git
```

### Frameworks

- Node js
- Express js

#### Packages Installation

- nodemon
- dotenv
- express
- colors

```console
$ npm i packages_name
```

## List of API's

#### Import Postman Collection Documetation

<strong>Copy below link or [<img style="transform: translateY(5px)" src="https://img.shields.io/badge/Click%20-Here-important" />](https://documenter.getpostman.com/view/22686421/2s83zfS6Rh)</strong>
```consol
https://documenter.getpostman.com/view/22686421/2s83zfS6Rh
```
 * User
    * [Create A User Data](#create-user-data---api)
* Product 
    * [Create A Product Data](#create-product-data---api)
* Category 
    * [Create A Category Data](#create-category-data---api)
* Tag 
    * [Create A Tag Data](#create-tag-data---api)

## Use API

In this below console, there is showing  "desc, name and access".

* desc
    * "desc" is to describe details.
* name 
    * "name" is Method & API link.
* access
    * "access" is who can access this system.

##### S. Note : use your domain before /api/v1/slug


### User API Documentation

 <br>

#### Create User Data - API

```console
/**
 * desc Create a user data
 * name POST /api/v1/user
 * access public
 */

// need keys to create a user   

    name : "Name",
    email : "Email", 
    cell : "Cell",
    location : "Location",
    zip_code : "Zip Code",
    shipping_address : "Shipping Address",
    billing_address : "Billing Address"
```
<br>

#### Create Product Data - API

```console
/**
 * desc Create a product data
 * name POST /api/v1/product
 * access public
 */

// need keys to create a product   

    name : "Name",
    slug : "Slug", 
    regular_price : "Regular Price",
    sale_price : "Sale Price",
    stock : "Stock",
    short_desc : "Short Description",
    long_desc : "Long Description",
    category : "Category",
    tag : : "Tag"
```

<br>

#### Create Category Data - API

```console
/**
 * desc Create a category data
 * name POST /api/v1/category
 * access public
 */

// need keys to create a category   

    name : "Name",
    slug : "Slug", 
    photo : "Photo"
```
<br>

#### Create Tag Data - API

```console
/**
 * desc Create a tag data
 * name POST /api/v1/tag
 * access public
 */

// need keys to create a tag   

    name : "Name",
    slug : "Slug",
```
