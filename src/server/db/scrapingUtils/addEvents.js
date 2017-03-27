'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/UFC');

const Event = require('../models/event');

const fs = require('fs');

const Bluebird= require('bluebird');

fs.readFile('./events.json', function(err, content){
  if (err) return console.error(err);
  
  let events = JSON.parse(content);

  return Bluebird.each(events, function(event) {
    let newEvent = new Event({
      id: event.id,
      date: event.event_date,
      image: event.feature_image,
      location: event.location,
      name: event.base_title,
      tagLine: event.title_tag_line
    });
    return newEvent.save().then(() => console.log(`${event.id}, created`)).catch(console.error);
  });
});


