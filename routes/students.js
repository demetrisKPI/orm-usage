'use strict';

const router = require('express').Router();
const Students = require('../models/students');
const Groups = require('../models/groups');
const Faculties = require('../models/faculties');

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
      contactNumber,
      email,
      group,
      faculty
    }, {
      include: [ Groups, Faculties ]
    })
    .then(data => res.json({ data }))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;
