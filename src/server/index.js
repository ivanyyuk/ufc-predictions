'use strict';

const PORT = 3001;
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

// set up server
const server = http.createServer();
const app = express();

server.on('request', app);


//set up middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/api', require('./api'));

//error catch
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});


//listen
mongoose.connect('mongodb://localhost/UFC')
  .then(() => {
    server.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch(console.error);
