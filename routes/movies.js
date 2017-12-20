
var express = require('express');
var router = express.Router()
const knex = require('../db/knex');

// GET ALL MOVIES
router.get('/', (req, res, next) => {
  knex('movies').select('*')
  .then(movies => {
    res.render('movies/index', {
      allMovies: movies
    })
  })
})

// ROUTE TO EDIT
router.get('/:id/edit', (req, res) => {
  let id = req.params.id
  knex('movies').where({ id })
  .first()
  .then((movie) => {
    res.render('movies/edit', {
      movie
    })
  })
})
// EDIT (PUT) MOVIE
router.put('/:id', (req, res, next) => {
  let id = req.params.id
  let movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    rating: req.body.my_rating,
    poster_url: req.body.poster_url
  }
  knex('movies').update(movie, '*').where({ id })
  .then((newMovie) => {
    let id = newMovie[0].id
    res.redirect(`/movies/${id}`)
  })
})

// NEW FORM SUBMISSION
router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

// GET MOVIE BY ID
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  knex('movies').select('*').where({ id })
  .first()
  .then(movie => {
    res.render('movies/show', {
      movie
    })
  })
})

// SUBMIT NEW MOVIE
router.post('/', (req, res, next) => {
  let movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    rating: req.body.my_rating,
    poster_url: req.body.poster_url
  }
  knex('movies').insert(movie, '*')
  .then((newMovie) => {
    let id = newMovie[0].id
    console.log(id);
    res.redirect(`/movies/${id}`)
  })
})

// DELETE MOVIE
router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  knex('movies').del().where({ id })
  .then(() => {
    res.redirect('/movies')
  })
})



module.exports = router;
