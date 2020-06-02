'use strict';

const Sequelize = require('sequelize');

const db = new Sequelize('db1', 'postgres', '1', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = db;
