'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');
const Groups = require('./groups');
const Faculties = require('./faculties');

// Define student model
const Students = db.define('students', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
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

// Define entity relationships
Students.belongsTo(Groups);
Students.belongsTo(Faculties);

Groups.hasMany(Students);
Groups.belongsTo(Faculties);

Faculties.hasMany(Groups);

module.exports = Students;
