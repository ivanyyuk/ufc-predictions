'use strict';

const router = require('express').Router();
const Fighters = require('../db/models/fighters');

router.post('/', (req, res, next) => {
  const searchText = req.body.searchText
    .split(' ')
    .map(elem => '(?=.*' + elem + ')')
    .join('');
  
  const searchExp = new RegExp(searchText, 'ig');
  const searches = [];

  console.log(searchText);

  return Fighters.find({
    $or: [
      { 'name.first': searchExp },
      { 'name.last': searchExp },
      { 'name.nick': searchExp }
    ]
  })
    .then(foundFighters => res.send(foundFighters))
    .catch(next);
});

module.exports = router;

