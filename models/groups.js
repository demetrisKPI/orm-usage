'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

const Groups = db.define('groups', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = Groups;
