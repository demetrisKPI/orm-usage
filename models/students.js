'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');

const Students = db.define('students', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
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
    type: DataTypes.NUMBER,
    unique: true
  },
  email: {
    type: DataTypes.NUMBER,
    unique: true
  }
}, {
  timestamps: false,
  getterMethods: {
    fullName() {
      return [this.firstname, this.lastname].join(' ');
    }
  }
});

module.exports = Students;
