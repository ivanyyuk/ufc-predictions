'use strict';

const returnFightEndingMethod = function(fight){
  switch(fight.result.Method) {
    case 'KO/TKO': return 'knockout';
    case 'Submission': return 'submission';
    case 'Decision - Unanimous': return 'unanimous';
    case 'Decision - Split': return 'split';
    case 'DQ': return 'disqualification';
    default : return new Error(`${fight.result.Method}`);
  }
};

module.exports = returnFightEndingMethod;
