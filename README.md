# CRUD-Adonis-Nuxt-Front

![WebSite Screen](https://i.ibb.co/wJ7f2xM/site-e-ecommerce.jpg)

**CRUD-Adonis-Nuxt-Front** it's a fronted prototype website made to create a easy and simple "Shop" with some feature which allow you to add product, or buy others.
This project use my [CRUD-Adonis-Nuxt-Server](https://github.com/Hakamate/CRUD-Adonis-Nuxt-Server).

## Features
<b>Products Features</b>

| Feature  |  Coded       | Description  |
|----------|:-------------:|:-------------|
| Add Product | &#10004; | Add a Product on DataBase |
| List Products | &#10004; | Listing all Products |
| Edit Product | &#10004; | Editing a Product to change values |
| Delete Product | &#10004; | Removing a Product from Database|

<b>User Features</b>

| Feature  |  Coded       | Description  |
|----------|:-------------:|:-------------|
| Login | &#10004; | Allow User to be connected |
| Logout | &#10004; | Allow User to be disconnected |
| Register | &#10004; | Allow Guest to create an Account |
| Rules | &#10060; | Allow specific actions for specific Users |


## Technologies

- NuxtJS (Vuejs Framework --> Frontend)
- Vuetify (CSS Framework --> Style)
- AdonisJS (NodeJS Framework --> Backend )
- PostgreSQL (SGBDR)


## How to build setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Do not forget to rename .env.example into .env
