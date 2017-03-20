'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fight = require('./eventFight');

const eventSchema = new Schema({
  id: Number,
  date: Date,
  image: String,
  location: String,
  name: String,
  tagLine: String
});

eventSchema.methods.getFights = function(cb) {
  return Fight.find({event_id: this.id}, cb);
};

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

