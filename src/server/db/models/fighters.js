'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  fighterSchema = new Schema({
  id: Number,
  nickname: String,
  wins: Number,
  statid: Number,
  losses: Number,
  last_name: String,
  weight_class: String,
  title_holder: Boolean,
  draws: Number,
  first_name: String,
  fighter_status: String,
  rank: String,
  pound_for_pound_rank: String,
  thumbnail: String,
  belt_thumbnail: String,
  left_full_body_image: String,
  right_full_body_image: String,
  profile_image: String,
  link: String
});

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;

