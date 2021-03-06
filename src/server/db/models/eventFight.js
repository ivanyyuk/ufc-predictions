'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { returnWinOrLoss } = require('./fight.methods');

const fightSchema = new Schema({
  id: Number,
  fighter1reach: Number,
  fighter2weight: Number,
  fighter2height: Number,
  fighter2record: String,
  fighter2reach: Number,
  event_id: Number,
  fighter1height: Number,
  fighter1weight: Number,
  fightcard_order: Number,
  statid: Number,
  fighter1record: String,
  is_title_fight: Boolean,
  fighter1_id: Number,
  fighter2_id: Number,
  is_main_event: Boolean,
  fight_description: String,
  is_prelim: Boolean,
  fighter1odds: String,
  fighter2odds: String,
  fighter1_nickname: String,
  fighter1_wins: Number,
  fighter1_statid: Number,
  fighter1_losses: Number,
  fighter1_last_name: String,
  fighter1_weight_class: String,
  fighter1_draws: Number,
  fighter1_first_name: String,
  fighter1_rank: String,
  fighter2_nickname: String,
  fighter2_wins: Number,
  fighter2_statid: Number,
  fighter2_losses: Number,
  fighter2_last_name: String,
  fighter2_weight_class: String,
  fighter2_draws: Number,
  fighter2_first_name: String,
  fighter2_rank: String,
  fighter1_full_body_image: String,
  fighter2_full_body_image: String,
  fighter1_profile_image: String,
  fighter2_profile_image: String,
  ending_time: String,
  ending_round_number: String,
  fm_stats_feed_url: String,
  fm_fight_rhythm_feed_url: String,
  fighter1_averagefighttime: String,
  fighter1_averagefighttime_seconds: String,
  fighter1_kdaverage: String,
  fighter1_slpm: String,
  fighter1_strikingaccuracy: String,
  fighter1_sapm: String,
  fighter1_strikingdefense: String,
  fighter1_takedownaverage: String,
  fighter1_takedownaccuracy: String,
  fighter1_takedowndefense: String,
  fighter1_submissionsaverage: String,
  fighter2_averagefighttime: String,
  fighter2_averagefighttime_seconds: String,
  fighter2_kdaverage: String,
  fighter2_slpm: String,
  fighter2_strikingaccuracy: String,
  fighter2_sapm: String,
  fighter2_strikingdefense: String,
  fighter2_takedownaverage: String,
  fighter2_takedownaccuracy: String,
  fighter2_takedowndefense: String,
  fighter2_submissionsaverage: String,
  fighter1_is_winner: Boolean,
  fighter2_is_winner: Boolean,
  result: {
    Method: String,
    EndingRound: String,
    EndingTime: String,
    Submission: String,
    EndStrike: String,
    EndTarget: String,
    EndPosition: String,
    EndNotes: String,
    FightOfTheNight: String,
    Scores: [
      {
        "WinnerScore": String,
        "LoserScore": String,
        "JudgeID": String,
        "JudgeFirstName": String,
        "JudgeLastName": String,
      }
    ]
  }
});

fightSchema.statics.returnWinOrLoss = returnWinOrLoss;

const Fight = mongoose.model('Fight', fightSchema);

module.exports = Fight;
