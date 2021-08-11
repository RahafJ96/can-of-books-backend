'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

// const bookCollection = require('./BookModel')
const {
  getBooksHandler,
  addBooksHandler,
  deleteBooksHandler
} = require('./book.controller')

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3010;

//MongoDB
mongoose.connect(`mongodb://localhost:27017/books`, { useNewUrlParser: true, useUnifiedTopology: true });



//Handlers
server.get('/', homeHandler);
function homeHandler(req, res) {
  res.send('Home Route');
}


// https://localhost:3010/books?email=rahafjazz@gmail.com
server.get('/books', getBooksHandler);

// https://localhost:3010/books?email=rahafjazz@gmail.com
server.post('/books',addBooksHandler);

// https://localhost:3010/books?email=rahafjazz@gmail.com
server.delete('/books/:id',deleteBooksHandler);


server.listen(PORT, () => console.log(`listening on ${PORT}`));

// app.get('/test', (request, response) => {

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// })

// app.listen(PORT, () => console.log(`listening on ${PORT}`));