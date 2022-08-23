# MyHackount - MERN Project
<img alt="img" width="300px" src="https://kylian-bardini.fr/assets/img/MyHackount.png" />

## Introduction

This is my first MERN project. It is a social network made with Nodes.js to create an API with MongoDB and Express then React.js to create the interface of the app.

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
### ./config/.env
```:bash
PORT=     /* enter the API port (by default is 5000) */
CLIENT_URL=http://localhost:3000
DB_USER_PASS=username:passord     /* enter your {username} and {password} of your Mongo DataBase */
TOKEN_SECRET=     /* enter a random secret token (exemple: "63e45d11c84d424") */
```
### ./config/db.js
```:bash
// add your path URL to connect at your Mongo DataBase
// for exemple : 
"mongodb+srv://" + process.env.DB_USER_PASS +"@cluster0.t023j84.mongodb.net/{dbname}"
// or
"mongodb://localhost:27017/{dbname}"
```
### ./client/.env
```:bash
REACT_APP_API_URL=http://localhost:{port API}
```
Go to the folder ```data``` and adding the ```post.json``` and ```users.json``` to Mongo DataBase.

## Run App
### ./(Main Directory)
```:bash
npm i
npm start
```
### ./client
```:bash
cd client
npm i
npm start
```

## Enjoy !
