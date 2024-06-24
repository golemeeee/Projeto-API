const express = require('express');

const AppError = require('./utils/appError');
const cityRouter = require('./routes/cityRoutes');
const clientRouter = require('./routes/clientRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();


app.use(express.json({limit: '10kb'}));

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
  });

app.use('/api/v1/cities', cityRouter);
app.use('/api/v1/client', clientRouter);
app.use(globalErrorHandler);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

module.exports = app;