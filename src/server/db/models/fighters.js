'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { populateFights, checkIfFightAlreadyStored } = require('./fighter.methods');


const  fighterSchema = new Schema({
  id: Number,
  name: {
    first: {type: String, required: true},
    nickname: {type: String},
    last: {type: String, required: true}
  },
  weight_class: {type: String},
  reach: {type: Number, default: 0},
  record: {
    wins: {
      total: {type: Number},
      knockout: {type: Number, default: 0},
      submission: {type: Number, default: 0},
      unanimous: {type: Number, default: 0},
      split: {type: Number, default: 0},
      disqualification: {type: Number, default: 0}

    },
    losses: {
      total: {type: Number},
      knockout: {type: Number, default: 0},
      submission: {type: Number, default: 0},
      unanimous: {type: Number, default: 0},
      split: {type: Number, default: 0},
      disqualification: {type: Number, default: 0}
    }, 
    draws: {
      total: {type: Number, default: 0}
    }, 
  },
  fights: [{
    opponent: {type: Schema.ObjectId, ref: 'Fighter'},
    fight: {type: Schema.ObjectId, ref: 'Fight'}
  }],
  stats: {
    averagefighttime_seconds: {type: Number},
    kdaverage: {type: Number},
    slpm: {type: Number},
    strikingaccuracy: {type: Number},
    sapm: {type: Number},
    strikingdefense: {type: Number},
    takedownaverage: {type: Number},
    takedowndefense: {type: Number},
    takedownaccuracy: {type: Number},
    submissionsaverage: {type: Number}
  },
  title_holder: {type: Boolean},
  image_url: {type: String}
});

fighterSchema.methods.populateFights = populateFights;
fighterSchema.methods.checkIfFightAlreadyStored = checkIfFightAlreadyStored;


const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;



