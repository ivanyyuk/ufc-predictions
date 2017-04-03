//TODO: refactor the Bluebird.each chains into a function, will be cleaner
'use strict';

const Fighter = require('../db/models/fighters.js');
const Fight = require('../db/models/eventFight');
const Bluebird = require('bluebird');
const nameStringFromOpponentObject = require('./nameStringFromOpponentObject');


//id is the UFC id # and _id is our mongo BSON id
//fight.fight is just our BSON id
//
//we store fighter #id instead of _id because our fights have 
//fighter1_id and fighter2_id from ufc api which is number not bson

module.exports = (fighter1Id, fighter2Id) => {
  //these are being passed as strings from our req.params most of the time
  //maybe change it there instead of here
  fighter1Id = Number(fighter1Id);
  fighter2Id = Number(fighter2Id);

  const opponentHashTable = {};
  const commonOpponents = {};
  let name;

  return Fighter.findOne({id: fighter1Id})
    .then(fighter => {
      //fights array in revere chronological order so we reverse it here for convenience
      // also we use .each here since we want it in order
      return Bluebird.each(fighter.fights.slice().reverse(), fight => {
        return Bluebird.join(
          Fighter.findOne({_id: fight.opponent}),
          Fight.returnWinOrLoss(fight.fight, fighter1Id),
          function(opponent,result) {
            name = nameStringFromOpponentObject(opponent);
            opponentHashTable[name] = result;
          });
      });
    })
    .then(() => Fighter.findOne({id:fighter2Id}))
    .then(fighter => {
      return Bluebird.map(fighter.fights, fight => {
        return Bluebird.join(
          Fighter.findOne({_id: fight.opponent}),
          Fight.returnWinOrLoss(fight.fight, fighter2Id),
          function(opponent, result) {
            name= nameStringFromOpponentObject(opponent);
            if (opponentHashTable[name] && result !== opponentHashTable[name]){
              commonOpponents[name] = {
                fighter1: opponentHashTable[name],
                fighter2: result
              };
            }
          });
      });
    })
    .then(() => {
      let wins = 0;
      let losses = 0;
      let result = '';
      let fightsArray = [];
      for (let i in commonOpponents) {
        commonOpponents[i].fighter1 === 'win' ? wins++ : losses++;
        fightsArray.push(Object.assign({ opponent: i} ,commonOpponents[i]));
      }

      if (wins > losses) result = 'win';
      else if (wins < losses) result = 'loss';
      else result = 'draw';

      return {
        fights: fightsArray,
        result
      };
    })
    .catch(console.error);
};



