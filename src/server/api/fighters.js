'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');
const Events = require('../db/models/event');
const Bluebird = require('bluebird');
const checkMmaMath = require('../utils/checkMmaMath');
const compareSpm = require('../utils/compareStats');

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
    }))
    .catch(next);
});

router.get('/predict', (req, res, next)=>{
  //checkMmaMath expects numbers not strings
  const fighter1 = Number(req.query.fighter1);
  const fighter2 = Number(req.query.fighter2);

compareSpm(fighter1,fighter2);
  checkMmaMath(fighter1, fighter2)
    .then(result => res.send(result))
    .catch(next);
});

module.exports = router;
