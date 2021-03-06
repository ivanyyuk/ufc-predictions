'use strict';

const Bluebird = require('bluebird');
const returnWinOrLose = require('../scrapingUtils/returnWinOrLose');
const returnFightEndingMethod = require('../scrapingUtils/returnFightEndingMethod');
const mutateFighter = require('../scrapingUtils/mutateFighter');
const EventFight = require('./eventFight');


module.exports = {
  populateFights: function(index, fight) {
    let hero = index === 1 ? 'fighter1' : 'fighter2';
    let villain = index === 1? 'fighter2' : 'fighter1';
    return this.model('Fighter').findOne({id: fight[`${villain}_id`]})
      .then(vill => {
        //if villain not in db , create it
        //old fighters don't show up in ufc db
        if (!vill) {
         return  this.model('Fighter').create({
            id: fight[`${villain}_id`],
              first_name: fight[`${villain}_first_name`],
              last_name: fight [`${villain}_last_name`],
              nickname: fight[`${villain}_nickname`],
          });
        }
        else return vill;
      })
      .then( (vill) =>{
        if (!this.checkIfFightAlreadyStored(fight)){
          let fightEndingMethod = '';
          let winOrLose = returnWinOrLose(hero, villain, fight);
          let key, value;
          let obj = {};

          if (winOrLose === 'win') {
            fightEndingMethod = returnFightEndingMethod(fight);
            key = `record.wins.${fightEndingMethod}`;
            value = ++this.record.wins[fightEndingMethod];
          } else if (winOrLose === 'lose') {
            fightEndingMethod = returnFightEndingMethod(fight);
            key = `record.losses.${fightEndingMethod}`;
            value = ++this.record.losses[fightEndingMethod];
          } else {
            key =`record.draws.total`;
            value = this.record.draws.total;
          }
          
          obj[key] = value;
          return this.update({
            $set: obj,
            $push: { fights: { 
              opponent: vill._id,
              fight: fight._id
            } }
          });
        }
      })
      .catch(console.error);
  },

  checkIfFightAlreadyStored: function(fight){
    //since our fight db object looks like {fight: fight id , opponent: opponent ID}
    //we just filter the array to match 
    return this.fights.filter(fightObj => fightObj.fight.equals(fight._id)).length > 0;
  },

  assignFightingStats: function(cb) {
    return EventFight.find({
      $or: [
        {fighter1_id: this.id}, {fighter2_id: this.id}
      ]
    })
      .then(fightArray => {
        Bluebird.each(fightArray, (fight) => { //arrow function keeps 'this' = fighter
          let whichFighter = fight.fighter1_id === this.id ? 'fighter1' : 'fighter2';
          let fighterToUpdate = this.toObject();
          mutateFighter(whichFighter, fighterToUpdate, fight.toObject());
          //console.log(this);
          return this.update(fighterToUpdate);
        });
      })
    //.then( (fighter) => console.log(`${fighter}`))
      .catch(console.error);
  }


};
