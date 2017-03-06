'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fighterPageSchema = new Schema({
  id: Number,
  html: String
});

const FighterPage = mongoose.model('fighterPage', fighterPageSchema);

module.exports = FighterPage;

