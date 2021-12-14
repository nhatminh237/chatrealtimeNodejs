var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var registrationRouter = require('./routes/registration');
var findPasswordRouter = require('./routes/findPassword');

var app = express();
//
const url = "mongodb+srv://nhatminh:nhatminh123@cluster.s5n5i.mongodb.net/dbProjectChatRealtime?retryWrites=true&w=majority";
mongoose.connect(url);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', loginRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/registration', registrationRouter);
app.use('/findPassword', findPasswordRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;