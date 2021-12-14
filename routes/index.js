var express = require('express');
const { json, render } = require('express/lib/response');
var router = express.Router();


/* GET home page. */

router.get('/index', (req, res) => {
    var f = $('#friend').title();
    console.log(f);
    render('login', { title: f });
})

module.exports = router;