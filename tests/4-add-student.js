'use strict';

const axios = require('axios');

const student = {
  firstName: 'bob',
  lastName: 'marley',
  group: {
    name: 'II-22'
  },
  faculty: {
    name: 'FFFA',
    contactNumber: '+1'
  },
  contactNumber: '+3',
  email: 'me@me.me'
};

const testAdd = async data => {
  try {
    const res = await axios.post('http://localhost:3000/students/add', data);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

testAdd(student)
  .then(res => console.table(res))
  .catch(err => console.log(err));
