exports.seed = function(knex) {
  return knex('movies').del()
  .then(() => {
    return knex('movies').insert([
      {
        id: 1,
        title: 'The Goonies',
        director: 'Steven Spielberg',
        year: '01/01/1988',
        rating: 9,
        poster_url: 'https://images-na.ssl-images-amazon.com/images/I/61w2wGIKvqL._SY300_.jpg'
      },
      {
        id: 2,
        title: 'The Sandlot',
        director: 'Old Man',
        year: '01/01/1994',
        rating: 10,
        poster_url: 'https://castleofjudah.files.wordpress.com/2013/07/sandlot.jpg'
      }
    ])
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });
  });
}
