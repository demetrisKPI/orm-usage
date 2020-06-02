'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => res.send('Here'));

db
  .authenticate()
  .then(() => {
    console.log('Database connected');
    db.sync().then(() => console.log('Database synchronized'));
  })
  .catch(err => console.log('Error: ' + err));

server.listen(3000, () => console.log(`Server listening on port ${PORT}!`));
