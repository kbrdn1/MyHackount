# MyHackount - MERN Project
<img alt="img" width="300px" src="https://kbrdn.dev/projects/myhackount/myhackount-hero.png" />

## Introduction

This is my first MERN project. It is a social network made with Nodes.js to create an API with MongoDB and Express then React.js to create the interface of the app.

## Technologies used within this project
### Backend: 
- NodeJS
- MongoDB
- Express
- JWT

### Frontend
- ReactJS
- SASS
- Redux

## Project setup
### Backend:
#### Environment variable
```sh
# ./config/.env
PORT=     # enter the API port (by default is 5000)
APP_URL=http://localhost:3000
DB_USER_PASS=<username>:<password>
TOKEN_SECRET=     # enter a random secret token (exemple: "63e45d11c84d424")
```
#### Connect database
```javascript
// ./config/db.js
/*
add your path URL to connect at your Mongo DataBase
for exemple :
*/ 
"mongodb+srv://" + process.env.DB_USER_PASS +"@cluster0.t023j84.mongodb.net/{dbname}"
// or
"mongodb://localhost:27017/{dbname}"
```
### Frontend
#### Environment variable
```sh
# ./app/.env
REACT_APP_API_URL=http://localhost:<API port>
```
Go to the folder ```data``` and adding the ```post.json``` and ```users.json``` to Mongo DataBase.

## Run App
### Backend
```sh
# ./(root_dir)
npm i
npm start
```
### Frontend
```sh
cd app
# ./app
npm i
npm start
```
