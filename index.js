const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const routes = require('./routes');
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/keyboards', routes);

const port = process.env.PORT || 5000;
app.listen(port);
