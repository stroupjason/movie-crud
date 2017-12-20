exports.seed = function(knex) {
  return knex('movies').del()
  .then(() => {
    return knex('movies').insert([
  {
    id: 10,
    title: "Schizopolis",
    director: "Steven Soderbergh",
    year: 1976,
    rating: 4,
    poster_url: "http://www.imdb.com/title/tt0117561/mediaviewer/rm2174000896"
  },
  {
    id: 20,
    title: "Nashville",
    director: "Robert Altman",
    year: 1976,
    rating: 5,
    poster_url:"http://www.imdb.com/title/tt0073440/mediaviewer/rm1703419648"
  },
  {
    id: 30,
    title: "Idiocracy",
    director: "Mike Judge",
    year: 2006,
    rating: 5,
    poster_url:"http://www.imdb.com/title/tt0387808/mediaviewer/rm1934300160"
  },
  {
    id: 40,
    title: "Love Actually",
    director: "Richard Curtis",
    year: 2003,
    rating: 1,
    poster_url:"http://www.imdb.com/title/tt0314331/mediaviewer/rm3436419328"
  },
  {
    id: 50,
    title: "Holy Moutain",
    director: "Alejandro Jodorowsky",
    year: "1973",
    rating: 4,
    poster_url:"http://www.imdb.com/title/tt0071615/mediaviewer/rm3911191040"
  },
])
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });

});
}
