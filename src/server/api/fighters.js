'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');
const EventPages = require('../db/models/eventPage');

router.get('/', (req, res, next) => {
  console.log('goet');
  EventPages.find()
    .then(fighters => res.send(fighters))
    .catch(next);
});

module.exports = router;
