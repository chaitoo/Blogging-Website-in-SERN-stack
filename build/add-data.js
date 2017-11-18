'use strict';

var express = require('express');

var DB = require('./db');
var docs = require('./data/festData.js');

var app = express();

var MongoDBURI = 'mongodb://chaitoo:musefests@ds125994.mlab.com:25994/musefests';
var collection = 'festivals';
var database = new DB();
var resultObject = {};

database.connect(MongoDBURI).then(function () {
  database.insertBulkData(collection, docs).then(function (results) {
    database.close();

    resultObject = {
      "success": true,
      "error": ""
    };
    console.log('Wrote all Mock data: ' + resultObject);
  }, function (error) {

    database.close();
    resultObject = {
      "success": false,
      "count": 0,
      "error": "Failed to write mock data: " + error
    };
    console.log("Error: " + resultObject);
  });
}, function (error) {
  resultObject = {
    "success": false,
    "count": 0,
    "error": "Failed to connect to database: " + error
  };
  console.log('error: ' + resultObject);
});
//# sourceMappingURL=add-data.js.map