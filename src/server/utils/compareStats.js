'use strict';

const Fighter = require('../db/models/fighters');
const Bluebird = require('bluebird');
const Fight = require('../db/models/eventFight');

//helper
const convertToKey = (endingMethod = '') => {
  if (endingMethod.slice(0,2) === 'KO') return 'KO';
  else if (endingMethod.slice(0,3)==='Sub') return 'Sub';
  else if (endingMethod.slice(0,3) ==='Dec') return 'Dec';
  else return 'other';
};

//slpm vs sapm
const compareSpm = (fighter1Id, fighter2Id) => {
  return Fighter.getFightersById(fighter1Id, fighter2Id)
    .then(fighters => {
      fighters.forEach(f => console.log(f.stats));
    })
    .catch(console.error);
};

const compareWinLossMethods = (fighter1Id, fighter2Id) => {
  const hash = {
    0: {
      win: {
        KO: 0,
        Sub: 0,
        Dec: 0,
        other: 0
      },
      loss: {
        KO: 0,
        Sub: 0,
        Dec: 0,
        other: 0
      }
    },
    1: {
      win: {
        KO: 0,
        Sub: 0,
        Dec: 0,
        other: 0
      },
      loss: {
        KO: 0,
        Sub: 0,
        Dec: 0,
        other: 0
      }
    }
  };
  
  return Fighter.getFightersById(fighter1Id, fighter2Id)
    .then(fighters => {
      return Bluebird.each(fighters, (fighter, index) => {
        return Bluebird.each(fighter.fights, (fight) => {
          return Fight.findById(fight.fight)
            .then(f => {
              return Bluebird.join(
                index,
                f.returnWinOrLoss(fighter.id),
                f.returnFightEndingMethod()
              );
            })
            .then(res => {
              //this is an array of [index, 'win or loss', method]
                hash[res[0]][res[1]][convertToKey(res[2])]++;
            });
            });
        });
      })
  //TODO: something with these stats
    .then(()=> console.log(hash));

};

module.exports = compareWinLossMethods;
