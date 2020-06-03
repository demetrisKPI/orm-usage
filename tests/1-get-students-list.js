'use strict';

const axios = require('axios');

const testGet = async () => {
  try {
    const res = await axios.get('http://localhost:3000/students/');
    return res.data.students;
  } catch (err) {
    throw new Error('Can\'t fetch students list');
  }
};

testGet()
  .then(res => console.table(res))
  .catch(err => console.log(err));
