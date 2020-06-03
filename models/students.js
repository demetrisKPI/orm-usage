'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

const Students = db.define('students', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group: {
    type: DataTypes.STRING
  },
  faculty: {
    type: DataTypes.STRING
  },
  contactNumber: {
    type: DataTypes.STRING,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  timestamps: false,
  getterMethods: {
    fullName() {
      return [this.firstName, this.lastName].join(' ');
    }
  }
});

module.exports = Students;
