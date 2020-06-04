'use strict';

const axios = require('axios');

const testGet = async () => {
  try {
    const res = await axios.get('http://localhost:3000/faculties/');
    return res.data.faculties;
  } catch (err) {
    throw new Error(err);
  }
};

testGet()
  .then(res => console.table(res))
  .catch(err => console.log(err));
