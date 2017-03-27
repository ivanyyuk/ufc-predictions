'use strict';

const mongoose = require('mongoose');
const Fighter = require('../models/fighters');
const fighters = require('./fighters.json');
const Bluebird = require('bluebird');
const _ = require('lodash');

mongoose.connect('mongodb://localhost/UFC');
mongoose.Promise = require('bluebird');

const addFighters = function() {
  return Bluebird.each(fighters, function (fighter){
    let newFighter = new Fighter({
      id: fighter.id,
      first_name: fighter.first_name,
      nickname: fighter.nickname,
      last_name: fighter.last_name,
      weight_class: fighter.weight_class,
      record: {
        wins: {total: fighter.wins},
        losses: {total: fighter.losses},
        draws: {total: fighter.draws}
      },
      title_holder: fighter.title_holder,
      image_url: fighter.profile_image
    });
    return newFighter.save().then((f) => console.log(`${f.id} saved `));
  })
    .then( () => console.log('----------done-----------'))
    .catch(console.error);
};

addFighters();
