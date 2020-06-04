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

//Add new group
router.post('/add', (req, res) => {
  const { name, faculty } = req.body;
  Groups
    .create({
      name,
      faculty
    })
    .then(data => res.json({ data }))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;
