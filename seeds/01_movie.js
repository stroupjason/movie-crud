const movie = require('../movie');

exports.seed = function(knex, Promise) {
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert(movie);
    });
};
