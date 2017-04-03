'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');
const Events = require('../db/models/event');
const Bluebird = require('bluebird');
const checkMmaMath = require('../utils/checkMmaMath');

router.get('/', (req, res, next) => {
  Events.find()
    .then(fighters => res.send(fighters))
    .catch(next);
});

router.get('/:id1/:id2', (req, res, next)=> {
  let returnObject;

   checkMmaMath(req.params.id1, req.params.id2)
    .then(result => returnObject = result)
    .then(() => {
     return  Bluebird.map([req.params.id1, req.params.id2], (fighterId) => {
        return Fighters.findOne({id : fighterId});
     });
    })
    .then(fightersArray => {
      res.send(Object.assign(returnObject, 
        {
          fighter1: fightersArray[0].toObject(),
          fighter2: fightersArray[1].toObject()
        })
      );
    })
    .catch(next);
});

module.exports = router;
