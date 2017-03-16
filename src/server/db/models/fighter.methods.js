'use strict';

const Bluebird = require('Bluebird');
const returnWinOrLose = require('../scrapingUtils/returnWinOrLose');
const returnFightEndingMethod = require('../scrapingUtils/returnFightEndingMethod');


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
            name: {
              first: fight[`${villain}_first_name`],
              last: fight [`${villain}_last_name`],
              nickname: fight[`${villain}_nickname`],
            },
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
  }


};
