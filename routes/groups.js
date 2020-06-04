'use strict';

const router = require('express').Router();
const Groups = require('../models/groups');

//Get list of groups
router.get('/', (req, res) =>
  Groups
    .findAll()
    .then(groups => res.json({ groups }))
    .catch(err => console.log(err))
);

module.exports = router;
