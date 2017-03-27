'use strict';

const PORT = process.env.PORT || 3000;
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

// set up server
const server = http.createServer();
const app = express();
const path = require('path');

server.on('request', app);


//set up middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}));

//statics
app.use(express.static(path.join(__dirname,'../../public')));


//routes
app.use('/api', require('./api'));

//always send index
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../browser/index.html'));
});

//error catch
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});


//mongoose
mongoose.Promise = require('bluebird');

//listen
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch(console.error);
