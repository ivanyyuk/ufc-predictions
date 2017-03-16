'use strict';

const router = require('express').Router();
const Event = require('../db/models/event');
const Fight = require('../db/models/eventFight.js');
const Bluebird = require('bluebird');
const Fighter = require('../db/models/fighters');

router.get('/', (req, res, next) => {
  Event.find({})
    .then(events => res.send(events))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Fight.find({event_id: req.params.id})
    .then(fights => {
      console.log(fights.length);
      return Bluebird.map(fights, fight => {
        return Fighter.find({id:
          { $in: [
            fight.fighter1_id,
            fight.fighter2_id
          ]}
        });
      })
        .then(fightsArray => res.send(fightsArray));
    })
    .catch(next);
});

module.exports = router;
