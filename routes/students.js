'use strict';

const router = require('express').Router();
const Students = require('../models/students');

//Get list of students
router.get('/', (req, res) =>
  Students
    .findAll()
    .then(students => res.json({ students }))
    .catch(err => console.log(err))
);

//Add new student
router.post('/add', (req, res) => {
  const {
    firstName,
    lastName,
    group,
    faculty,
    contactNumber,
    email
  } = req.body;
  Students
    .create({
      firstName,
      lastName,
      group,
      faculty,
      contactNumber,
      email
    })
    .then(data => res.json({ data }))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;
