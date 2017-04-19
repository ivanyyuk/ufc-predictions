'use strict';

const mongoose = require('mongoose');
const Fighter = require('../models/fighters');
const Bluebird = require('bluebird');
const EventFight = require('../models/eventFight');

mongoose.connect('mongodb://localhost/UFC');
mongoose.Promise = require('bluebird');


Fighter.find({})
  .then(fighters => {
    return Bluebird.each(fighters, function(fighter){
      return parseAllEventsForFighter(fighter.id);
    });
  })
  .catch(console.error);






const parseAllEventsForFighter = (fighterId) => {
  let lastName;
  let  fighterz;
  return Fighter.findOne({id: fighterId}) 
    .then(fighter => {
      fighterz = fighter;
      lastName = fighter.last_name;
      return EventFight.find({
        $or: [
          {fighter1_id: fighterId}, {fighter2_id: fighterId}
        ],
        $where: 'this.ending_time.length > 0' //no ending_time means future event
      });
    })
    .then(fights => {
      return Bluebird.each(fights, function(fight) {
        let fighterIndex = fighterId === fight.fighter1_id ? 1 : 2;
        return fighterz.populateFights(fighterIndex, fight);
      });
    })
    .catch(console.error);
};


