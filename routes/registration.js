var express = require('express');
var router = express.Router();
var app = express();
var user = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('registration', { admin: 'Express' });
});

router.post('/', (req, res) => {
    let u = new user({
        fullname: req.body.fullname,
        username: req.body.username,
        phone: req.body.phone,
        password: req.body.password
    })
    u.save();
    res.end();
})



module.exports = router;