var express = require('express');
var bodyParser = require('body-parser');
var mongodbClient = require('mongodb');
var mongodb = require('./db/connect');

var app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port} :) and is connected to DataBase :)`);
    });
  }
});
