var express = require('express');
var router = express.Router()
const knex = require('../db/knex');

// GET ALL MOVIES
router.get('/', (req, res, next) => {
  knex('movie').select('*')
  .then(movies => {
    res.render('/', {
      allMovies: movies
    })
  })
  .catch(err => next(err))

})

// ROUTE TO EDIT
router.get('/:id/edit-page', (req, res) => {
  let id = req.params.id
  knex('movie').where({ id })
  .first()
  .then((movie) => {
    res.render('movie/edit-page', {
      movie
    })
  })
  .catch(err => next(err))

})
// EDIT (PUT) MOVIE
router.put('/:id', (req, res, next) => {
  let id = req.params.id
  let movie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    rating: req.body.rating,
    poster_url: req.body.poster_url
  }
  knex('movie').update(movie, '*').where({ id })
  .then((newMovie) => {
    let id = newMovie[0].id
    res.redirect(`/movie/${id}`)
  })
  .catch(next)
})

// NEW FORM SUBMISSION
router.get('/new-page', (req, res, next) => {
  res.render('movie/new-page')
})

// GET MOVIE BY ID
router.get('/:id', (req, res, next) => {
  let id = req.params.id
  knex('movie').select('*').where({ id })
  .first()
  .then(movie => {
    res.render('show-page', {
      movie
    })
  })
  .catch(err => next(err))

})

// SUBMIT NEW MOVIE
router.post('/', (req, res, next) => {
  let movie = {
    title: req.body.title,
    director: req.body.director,
    year: parseInt(req.body.year),
    rating: req.body.rating,
    poster_url: req.body.poster_url
  }
  knex('movie').insert(movie, '*')
  .then((newMovie) => {
    let id = newMovie[0].id
    console.log(id);
    res.redirect(`/movie/${id}`)
  })
  .catch(err => next(err))
})

// DELETE MOVIE
router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  knex('movie').del().where({ id })
  .then(() => {
    res.redirect('/movie')
  })
  .catch(err => next(err))

})



module.exports = router;
