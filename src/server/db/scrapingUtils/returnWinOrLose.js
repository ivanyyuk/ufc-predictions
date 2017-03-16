'use strict';

const returnWinOrLose = function(hero,villain,fight){
  let winOrLose = null;

  if(fight[`${hero}_is_winner`]) winOrLose = 'win';
  else if(fight[`${villain}_is_winner`]) winOrLose = 'lose';

  return winOrLose;
};  

module.exports = returnWinOrLose;
