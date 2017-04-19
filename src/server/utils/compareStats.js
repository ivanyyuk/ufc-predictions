'use strict';

const Fighter = require('../db/models/fighters.js');
const Bluebird = require('bluebird');

//slpm vs sapm
const compareSpm = (fighter1Id, fighter2Id) => {
  return Fighter.getFightersById(fighter1Id, fighter2Id)
    .then(fighters => {
      fighters.forEach(f => console.log(f.stats));
    })
    .catch(console.error);
};

module.exports = compareSpm;
