var express = require('express');
var router = express.Router();
var user = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});


router.post('/index', (req, res) => {
    user.find({ password: req.body.password, username: req.body.username }).then((result) => {
        res.render('index', { user: result })
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;