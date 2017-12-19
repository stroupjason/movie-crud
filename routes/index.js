const express = require('express')
const router = express.Router();

/*Get home Page */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Jason\'s Movie Guide'})
});

module.exports = router;
