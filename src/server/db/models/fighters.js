'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { assignFightingStats,
  populateFights,
  checkIfFightAlreadyStored ,
  getFightersById
} = require('./fighter.methods');


const  fighterSchema = new Schema({
  id: Number,
  first_name: {type: String, required: true},
  nickname: {type: String},
  last_name: {type: String, required: true},
  weight_class: {type: String},
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
    reach: {type: Number, default: 0},
    averagefighttime_seconds: {type: Number, default: 0},
    kdaverage: {type: Number, default: 0},
    slpm: {type: Number, default: 0},
    strikingaccuracy: {type: Number, default: 0},
    sapm: {type: Number, default: 0},
    strikingdefense: {type: Number, default: 0},
    takedownaverage: {type: Number, default: 0},
    takedowndefense: {type: Number, default: 0},
    takedownaccuracy: {type: Number, default: 0},
    submissionsaverage: {type: Number, default: 0}
  },
  title_holder: {type: Boolean},
  image_url: {type: String}
});

fighterSchema.statics.getFightersById = getFightersById;

fighterSchema.methods.populateFights = populateFights;
fighterSchema.methods.checkIfFightAlreadyStored = checkIfFightAlreadyStored;
fighterSchema.methods.assignFightingStats = assignFightingStats;

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;



