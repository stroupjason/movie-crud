//connection , creates queries file

const knex = require('./knex');

module.exports = {
//function that gets all the movies from the movie file
  getAll() {
    return knex('movie');
  },
  getOne(id) {
    return knex('movie').where('id', id).first(); //only returns the first row
  },
  create(movie) {
    return knex('movie').insert(movie, '*'); //all properties of movies plus the id
  },
  //sql querie PUT request
  update(id, movie) {
    return knex('movie').where('id', id).update(movie, '*');
  },
  delete(id) {
    return knex('movie').where('id', id).delete();
  },
}
