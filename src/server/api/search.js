'use strict';

const router = require('express').Router();
const Fighter = require('../db/models/fighters');
const Bluebird = require('bluebird');
const _ = require('lodash');

router.post('/', (req, res, next) => {
  const searchText = req.body.searchText
    .split(' ')
    //.map(elem => '(?=.*' + elem + ')');
    .map(elem => `^${elem}`);

  const searchExp = searchText.map(exp => new RegExp(exp, 'ig'));
  const searches = [];

  Bluebird.each(searchExp, function (exp) {
    return Fighter.find({
      $or: [
        { first_name: exp }, { last_name: exp }]
    },
    {
      first_name: 1, last_name: 1, id:1, _id:0
    })
      .then(found => searches.push(found));
  })
    .then(() => _.flatten(searches))
    .then(flatSearch => res.json(_.uniqBy(flatSearch, 'id')))
    .catch(next);

});

module.exports = router;

