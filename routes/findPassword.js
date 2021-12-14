var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('findPassword', { admin: 'Express' });
});

module.exports = router;