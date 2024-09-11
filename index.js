var createError = require('http-errors');
const express = require("express");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//config mongoose
const connectDB = require("./connectMongoo");
connectDB();


var indexRouter = require('./routes/index');
//mogo
var userRoute = require('./routes/userRoute');
var postRoute = require('./routes/postRoute');
var friendNotificationRoute = require('./routes/friendNotificationRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-config.js');
app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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

//app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(3000, () => console.log("Server ready on port 3000."));


module.exports = app;