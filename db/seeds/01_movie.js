exports.seed = function(knex) {
  return knex('movie').del()
  .then(() => {
    return knex('movie').insert([
  {
    id: 1,
    title: "Schizopolis",
    director: "Steven Soderbergh",
    year: "1976",
    rating: 4,
    poster_url: "http://www.imdb.com/title/tt0117561/mediaviewer/rm2174000896"
  },
  {
    id: 2,
    title: "Nashville",
    director: "Robert Altman",
    year: "1976",
    rating: 5,
    poster_url:"http://www.imdb.com/title/tt0073440/mediaviewer/rm1703419648"
  },
  {
    id: 3,
    title: "Idiocracy",
    director: "Mike Judge",
    year: "2006",
    rating: 5,
    poster_url:"http://www.imdb.com/title/tt0387808/mediaviewer/rm1934300160"
  },
  {
    id: 4,
    title: "Love Actually",
    director: "Richard Curtis",
    year: "2003",
    rating: 1,
    poster_url:"http://www.imdb.com/title/tt0314331/mediaviewer/rm3436419328"
  },
  {
    id: 5,
    title: "Holy Moutain",
    director: "Alejandro Jodorowsky",
    year: "1973",
    rating: 4,
    poster_url:"http://www.imdb.com/title/tt0071615/mediaviewer/rm3911191040"
  },
])
});
}
