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

//Add new faculty
router.post('/add', (req, res) => {
  const { name, contactNumber } = req.body;
  Faculties
    .create({
      name,
      contactNumber
    })
    .then(data => res.json({ data }))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;
