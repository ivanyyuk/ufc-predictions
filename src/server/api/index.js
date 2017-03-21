'use strict';

const router = require('express').Router();

router.use('/fighters', require('./fighters'));

router.use('/events', require('./events'));

router.use('/search', require('./search'));

module.exports = router;
