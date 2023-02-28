const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const velikaArkanaRouter = require('./routes/velika-arkana');
const paliceRouter = require('./routes/palice');
const kelihiRouter = require('./routes/kelihi');
const meciRouter = require('./routes/meci');
const pentakljiRouter = require('./routes/pentaklji');

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/velika-arkana', velikaArkanaRouter);
app.use('/palice', paliceRouter);
app.use('/kelihi', kelihiRouter);
app.use('/meci', meciRouter);
app.use('/pentaklji', pentakljiRouter);

module.exports = app;

app.listen(3000)
