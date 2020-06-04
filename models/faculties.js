'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

const Faculties = db.define('faculties', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contactNumber: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = Faculties;
