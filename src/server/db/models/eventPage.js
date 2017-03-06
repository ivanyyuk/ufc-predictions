'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventPageSchema = new Schema({
  eventId: Number,
  html: String
});

const EventPage = mongoose.model('eventPage', eventPageSchema);

module.exports = EventPage;

