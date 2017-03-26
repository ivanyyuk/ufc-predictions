'use strict';

const router = require('express').Router();
const Event = require('../db/models/event');
const Fight = require('../db/models/eventFight.js');
const Bluebird = require('bluebird');
const Fighter = require('../db/models/fighters');
const moment = require('moment');
const _ = require('lodash');

//TODO: Refactor this mess. There's gotta be a better way.
router.get('/', (req, res, next) => {
  const rightNow = moment().startOf('day').toISOString();
  const eventsToSend = [];

  Event.find({
    date: {$gte: rightNow},
    tagLine: {$ne: 'TBA vs TBD'}
  })
    .then(events => {
      return Bluebird.each(events, event => {
        return Fight.find({event_id: event.id})
          .then(fights => {
            let fightData = fights.map(fight => ({
              fighter1: {
                name: fight.fighter1_last_name,
                id: fight.fighter1_id
              },
              fighter2: {
                name: fight.fighter2_last_name,
                id: fight.fighter2_id
              },
              order: fight.fightcard_order
            }));
            event = event.toObject();
            event.fights = _.sortBy(fightData,f => f.order);
            eventsToSend.push(event);
          });
      });
    })
    .then(() => res.send(eventsToSend))
    .catch(next);
});

//TODO: Use the fight collection to sort by fightcard_order, not the fighters
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
        .then(fightsArray => eventToSend.fights = _.sortBy(fightsArray, function(o){ return Number( o.fightcard_order);}));
    })
    .then(() => res.send(eventToSend))
    .catch(next);


});

module.exports = router;

