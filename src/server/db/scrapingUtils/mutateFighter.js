'use strict';
 
const mutateFighter = (whichFighter, fighter, currentFight) => {
  const stats = [
    'kdaverage', 'slpm', 'strikingaccuracy', 'sapm', 'strikingdefense', 
    'takedownaverage', 'takedowndefense', 'takedownaccuracy', 'submissionsaverage',
    'averagefighttime_seconds', 'reach'
  ];

  stats.forEach(stat => {
    if (currentFight[`${whichFighter}_${stat}`])
      fighter.stats[stat] = currentFight[`${whichFighter}_${stat}`];
   else if (currentFight[`${whichFighter}${stat}`]){
      console.log('in', stat, fighter.id);
      fighter.stats[stat] = currentFight[`${whichFighter}${stat}`];
   }
    else console.log(`${whichFighter} ${stat}`);
  });
};

module.exports = mutateFighter;
