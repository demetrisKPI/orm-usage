'use strict';

const { DataTypes } = require('sequelize');
const db = require('../database');
const Groups = require('../models/groups');
const Faculties = require('../models/faculties');

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

Students.belongsTo(Groups);
Students.belongsTo(Faculties);

module.exports = Students;
