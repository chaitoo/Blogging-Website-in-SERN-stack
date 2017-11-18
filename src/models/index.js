"use strict";
var mysql      = require('mysql');

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
const config = {
  "username": "root",
  "password": "admin",
  "database": "musefests",
  "host": "localhost",
  "dialect": "mysql"
}
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};


fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      if (file === "users.js") {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
      }


    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
