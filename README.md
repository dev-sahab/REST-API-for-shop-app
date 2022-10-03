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

## Use API

In this below console, there is showing  "desc, name and access".

* desc
    * "desc" is to describe details.
* name 
    * "name" is Method & API link.
* access
    * "access" is who can access this system.

###### S. Note : use your domain before /api/v1/slug


### User API

* #### Get All User Data - API

```console
/**
 * desc Get all user
 * name GET /api/v1/user
 * access public
 */
```

* #### Create User Data - API

```console
/**
 * desc Create a user data
 * name POST /api/v1/user
 * access public
 */

// need keys to create a user   

name, 
email, 
cell, 
location, 
zip_code, 
shipping_address, 
billing_address
```