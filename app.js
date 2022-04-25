//npm i express mongoose morgan nodemon cors
//start from db: index.js

const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const routes = require('./routes');  

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(logger('dev'))

app.use('/api', routes)

module.exports = app

//next go to controller, routes to set up controller & routes

// last added line 8, then add server.js