'use strict';

const axios = require('axios');

const student = {
  firstName: 'tom',
  lastName: 'cash',
  group: {
    name: 'II-22'
  },
  faculty: {
    name: 'FFF',
    contactNumber: '+2'
  },
  contactNumber: '+4',
  email: 'them@me.me'
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
  .then(res => console.dir(res))
  .catch(err => console.log(err));
