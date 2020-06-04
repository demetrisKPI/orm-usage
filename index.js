'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const PORT = process.env.PORT || 3000;
const server = express();

db
  .authenticate()
  .then(() => {
    console.log('Database connected');
    db.sync().then(() => console.log('Database synchronized'));
  })
  .catch(err => console.log('Error: ' + err));

server.use(bodyParser.json());

server.get('/', (req, res) => res.send('home'));
server.use('/students', require('./routes/students'));
server.use('/groups', require('./routes/groups'));
server.use('/faculties', require('./routes/faculties'));

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
