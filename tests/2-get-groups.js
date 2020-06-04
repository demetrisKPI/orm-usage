'use strict';

const axios = require('axios');

const testGet = async () => {
  try {
    const res = await axios.get('http://localhost:3000/groups/');
    return res.data.groups;
  } catch (err) {
    throw new Error(err);
  }
};

testGet()
  .then(res => console.table(res))
  .catch(err => console.log(err));
