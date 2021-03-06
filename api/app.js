var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


// require routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup utils
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// require models
require('./models/notes.js');


// connect to database
mongoose.connect('mongodb://localhost/noter', {useNewUrlParser: true, useUnifiedTopology: true} )
  .catch(error => console.log(error)); // logs initial connect errors

// logs errors after initial connection
mongoose.connection.on('error', err => console.log(err));

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
