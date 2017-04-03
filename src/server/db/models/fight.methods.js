'use strict';

module.exports = {
  returnWinOrLoss: function(fightId, fighterUfcId){
    let resultStr;
    let fightStr;
    return this.findOne({_id: fightId})
      .then(fight => {
        if (fight.fighter1_id === fighterUfcId){
          fightStr='fighter1';
        } else if (fight.fighter2_id === fighterUfcId) {
          fightStr='fighter2';
        } else throw Error(`fighterId ${fighterUfcId} not found in fight ${fightId}`);
        return fight;
      })
      .then((fight) => {
        return  fight[`${fightStr}_is_winner`] ? 'win' : 'loss';
      })
      .catch(console.error);
  }
};
