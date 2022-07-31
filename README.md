# MyHackount - MERN Project

## Introduction

This is my first MERN project. I build a social media with Nodes.js to create an API with MongoDB and Express and React.js to create the interface.

## Technologies used within this project

- NodeJS
- ReactJS
- Redux
- MongoDB
- Express
- SASS
- NPM (to work with other many packages)

# Getting started

## Config App
```:bash
# ./config/.env

PORT=     /* enter the API port (by default is 5000) */
CLIENT_URL=http://localhost:3000
DB_USER_PASS=username:passord     /* enter your {username} and {password} of your Mongo DataBase */
TOKEN_SECRET=     /* enter a random secret token (exemple: "63e45d11c84d424") */
```
```:bash
# ./config/db.js

// add your path URL to connect at your Mongo DataBase
// for exemple : 
"mongodb+srv://" + process.env.DB_USER_PASS +"@cluster0.t023j84.mongodb.net/{dbname}"
// or
"mongodb://localhost:27017/{dbname}"
```
```:bash
# ./client/.env

REACT_APP_API_URL=http://localhost:{port API}
```

## Run App
```:bash
# ./(Main Directory)

npm i
npm start
```
```:bash
# ./client

cd client
npm i
npm start
```

## Enjoy !
