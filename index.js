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

if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets
  // like our main.js file
  app.use(express.static('./client/build'));

  // express will serve the index.html file if
  // it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port);
