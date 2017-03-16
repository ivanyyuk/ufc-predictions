'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');
const Events = require('../db/models/event');

router.get('/', (req, res, next) => {
  Events.find()
    .then(fighters => res.send(fighters))
    .catch(next);
});

module.exports = router;
