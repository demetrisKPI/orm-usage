'use strict';

const router = require('express').Router();
const Faculties = require('../models/faculties');

//Get list of faculties
router.get('/', (req, res) =>
  Faculties
    .findAll()
    .then(faculties => res.json({ faculties }))
    .catch(err => console.log(err))
);

module.exports = router;
