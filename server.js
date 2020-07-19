const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
//const mainRouter = require('./routes/index');
const eventrouter = require('./routes/addevent')
const currenteventrouter= require('./routes/event')
const app = express();
const mongoose = require('mongoose');
dotenv.config();

require('./models/db');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/Assets'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || '3000'}`);
});

// app.use('/', mainRouter);
app.use('/addevent', eventrouter);
app.use('/event', currenteventrouter);