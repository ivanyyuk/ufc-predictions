'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');
const Events = require('../db/models/event');
const Bluebird = require('bluebird');

router.get('/', (req, res, next) => {
  Events.find()
    .then(fighters => res.send(fighters))
    .catch(next);
});

router.get('/:id1/:id2', (req, res, next)=> {
  Bluebird.map([req.params.id1, req.params.id2], (fighterId) => {
    return Fighters.findOne({id : fighterId});
  })
    .then(fightersArray => res.send({
      fighter1: fightersArray[0].toObject(),
      fighter2: fightersArray[1].toObject()
    }));
});

module.exports = router;
