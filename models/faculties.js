'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

const Faculties = db.define('faculties', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Faculties;
