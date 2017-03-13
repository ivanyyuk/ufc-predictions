'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      against: [{type: Schema.ObjectId, ref: 'Fighter'}],
      knockout: {type: Number, default: 0},
      submission: {type: Number, default: 0},
      decision: {
        unanimous: {type: Number, default: 0},
        split: {type: Number, default: 0}
      }
    },
    losses: {
      total: {type: Number},
      against: [{type: Schema.ObjectId, ref: 'Fighter'}],
      knockout: {type: Number, default: 0},
      submission: {type: Number, default: 0},
      decision: {
        unanimous: {type: Number, default: 0},
        split: {type: Number, default: 0}
      }
    }, 
    draws: {
      total: {type: Number, default: 0},
      against: [{type: Schema.ObjectId, ref: 'Fighter'}]
    }, 
  },
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

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;

