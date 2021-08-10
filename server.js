'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const books = require('./BookSchema')

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const server = express();
server.use(cors());

const PORT = process.env.PORT || 3010;

//MongoDB
mongoose.connect('mongodb://localhost:27017/bookx', { useNewUrlParser: true, useUnifiedTopology: true });


server.get('/', homeHandler);

//Handlers
function homeHandler(req, res) {
  res.send('Home Route');
}

server.get('/books', getBooksHandler);

function getBooksHandler(req, res) {
  const { email } = req.query;

  // search
  books.find({ email: email }, function (err, booksData) {
    if (err) {
      res.send('Error');
    }
    else {
      res.json(booksData);
    }
  })
}



server.listen(PORT, () => console.log(`listening on ${PORT}`));

// app.get('/test', (request, response) => {

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// })

// app.listen(PORT, () => console.log(`listening on ${PORT}`));