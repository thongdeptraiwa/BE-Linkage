var createError = require('http-errors');
const express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//config mongoose
// const connectDB = require("./connectMongoo");
// connectDB();
//config mongoose
const mongoose = require("mongoose");
require("./models/user");
require("./models/post");
require("./models/friendNotification");


var indexRouter = require('./routes/index');
//mogo
var userRoute = require('./routes/userRoute');
var postRoute = require('./routes/postRoute');
var friendNotificationRoute = require('./routes/friendNotificationRoute');

var app = express();

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-config.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//connect database
mongoose.connect('mongodb+srv://thong442001:F3WK9R2BOb3cV86h@totnghiep.8wwlj.mongodb.net/totNghiep')//link connect vs mongobd
    .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
    .catch(err => console.log('>>>>>>>>> DB Error: ', err));

app.use('/', indexRouter);
//mogo
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/friendNotification', friendNotificationRoute);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;