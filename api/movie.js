const express = require('express')

const router = express.Router();

//bring querie file in
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next ();
  next(new Error('Invalid ID'));
}

// POST validate movie, checking for title description and url
function validMovie(movie) {
  const hasTitle = typeof movie.title == 'string'  && movie.title.trim() != '';
  const hasUrl = typeof movie.url == 'string'  && movie.url.trim() != '';
  const hasDirector = typeof movie.director == 'string'  && movie.director.trim() != '';
  const hasRating = !isNaN(movie.rating)
  return hasTitle && hasUrl && hasDirector && hasRating;
}

router.get('/', (req, res) => {
  queries.getAll().then(movie => {
    res.json(movie);
  })
})

//validate id
router.get('/:id', isValidId, (req, res, next) => {
  // res.json({
  //   message: `Magic is also happening here`
  // })
  //created the query and route
  queries.getOne(req.params.id).then(movie => {
    if(movie) {
      res.json(movie);
    } else {
      res.status(404);
      next(new Error('Not Found'));
    }
  });
});

router.post('/' , (req, res, next) => {
  if(validMovie(req.body)) {
    queries.create(req.body).then(movie => {
      res.json(movie[0]);
    });
  } else {
    next(new Error('Invalid movie'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validMovie(req.body)) {
    //update the movie
    queries.update(req.params.id, req.body).then(movie => {
      res.json(movie[0]);
    })
  } else {
    next(new Error('Invalid movie'));
  }
});

router.delete('/:id' , isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      });
    });
  });

module.exports = router;
