//CREATES AN INSTANT CONNECTION TO DATABASE - CRUD PART 08
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
const knex = require('knex');
const connection = knex(config);
module.exports = connection;
