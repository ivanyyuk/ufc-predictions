'use strict';

const mongoose = require('mongoose');
const Fighters = require('../models/fighters');
const Bluebird = require('bluebird');

mongoose.connect('mongodb://localhost/UFC');


Fighters.find({})
  .then(array=> Bluebird.each(array, function(fighter) {
    fighter.assignFightingStats();
  }))
  .catch(console.error);

//const stats = [
    //'kdaverage', 'slpm', 'strikingaccuracy', 'sapm', 'strikingdefense', 
  //'takedownaverage', 'takedowndefense', 'takedownaccuracy', 'submissionsaverage',
  //'averagefighttime_seconds', 'reach'
  //];
//const obj = {};
//FighterNew.find({})
  //.then(array => {
    //array.forEach(fighter => {
    //stats.forEach(stat => {
      //if(!fighter[stat]){
        //if (!obj[fighter.last_name]) obj[fighter.last_name] = [];
        //obj[fighter.last_name].push(stat);
      //}

    //});
  //});
    //console.log(obj);
  //});
