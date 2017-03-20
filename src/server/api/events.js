'use strict';

const router = require('express').Router();
const Event = require('../db/models/event');
const Fight = require('../db/models/eventFight.js');
const Bluebird = require('bluebird');
const Fighter = require('../db/models/fighters');
const moment = require('moment');

router.get('/', (req, res, next) => {
 const rightNow = moment().startOf('day').toISOString();
  Event.find({
    date: {$gte: rightNow},
    tagLine: {$ne: 'TBA vs TBD'}
  })
    .then(events => res.send(events))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const eventToSend = {};

  Event.findOne({id: req.params.id})
    .then(event => eventToSend.name = event.name)
    .then(() =>Fight.find({event_id: req.params.id}))  
    .then(fights => {
      return Bluebird.map(fights, fight => {
        return Fighter.find({id:
          { $in: [
            fight.fighter1_id,
            fight.fighter2_id
          ]}
        });
      })
        .then(fightsArray => eventToSend.fights = fightsArray);
    })
    .then(() => res.send(eventToSend))
    .catch(next);


});

module.exports = router;

