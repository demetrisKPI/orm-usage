'use strict';

const axios = require('axios');

const testGet = async () => {
  try {
    const res = await axios.get('http://localhost:3000/students/');
    return res.data.students;
  } catch (err) {
    throw new Error(err);
  }
};

const student = {
  firstName: 'bob',
  lastName: 'marley',
  group: 'II-22',
  faculty: 'FFFA',
  contactNumber: '+380',
  email: 'they@me.me'
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

testGet()
  .then(res => console.table(res))
  .catch(err => console.log(err));
