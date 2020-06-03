'use strict';

const axios = require('axios');

const student = {
  firstName: 'john',
  lastName: 'kick',
  group: 'II-112',
  faculty: 'FFFF',
  contactNumber: '+3',
  email: 'us@me.me'
};

const testAdd = async data => {
  try {
    const response = await axios.post('http://localhost:3000/students/add', data);
    return response.data;
  } catch (err) {
    throw new Error('This student already exists or email/number not unique');
  }
};

testAdd(student)
  .then(res => console.log(res))
  .catch(err => console.log(err));
