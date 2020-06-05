'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

// Define group model
const Groups = db.define('groups', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Groups;
