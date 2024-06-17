var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const db = require("./dbconn");
const registRouter = require('./routes/regist');
const loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const deleteRouter = require('./routes/delete');
const editRouter = require('./routes/edit');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());





app.use('/', indexRouter);
app.use('/', registRouter);
app.use('/', loginRouter);
app.use('/', usersRouter);
app.use('/', deleteRouter);
app.use('/edit', editRouter);



app.get('/', (req, res) => {
  res.redirect('/users');
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};



  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(() => {
  console.log("listening");
})

module.exports = app;
