'use strict';

const router = require('express').Router();
const Fighter = require('../db/models/fighters');
const Bluebird = require('bluebird');
const _ = require('lodash');

router.post('/', (req, res, next) => {
  const searchText = req.body.searchText
    .split(' ')
    .map(elem => '(?=.*' + elem + ')');

  const searchExp = searchText.map(exp => new RegExp(exp, 'ig'));
  const searches = [];

  Bluebird.each(searchExp, function (exp) {
    return Fighter.find({
      $or: [
        { first_name: exp }, { last_name: exp }]
    })
      .then(found => searches.push(found));
  })
    .then(() => _.flatten(searches))
    .then(flatSearch => res.json(_.uniqBy(flatSearch, 'id')))
    .catch(next);

});

module.exports = router;

