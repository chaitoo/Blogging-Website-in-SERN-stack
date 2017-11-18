"use strict";

var MongoClient = require('mongodb').MongoClient;

function DB() {
  this.db = null;
}

//start the database connection
DB.prototype.connect = function (uri) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    if (_this.db) {
      resolve();
    } else {
      var __this = _this;
      MongoClient.connect(uri).then(function (database) {
        __this.db = database;
        resolve();
      }, function (err) {
        console.log("Error message: " + err.message);
        reject(err.message);
      });
    }
  });
};

//close the database connection
DB.prototype.close = function () {
  if (this.db) {
    this.db.close().then(function () {
      console.log("disconnected from database");
    }, function (err) {
      console.log("Failed to close database: " + err.message);
    });
  }
};

// insert bult data at once

DB.prototype.insertBulkData = function (coll, docs) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.db.collection(coll, { strict: false }, function (error, collection) {
      if (error) {
        console.log("cannot accesss the collection :" + error.message);
        reject(err.message);
      } else {
        if (!Array.isArray(docs)) {
          console.log("Data is not an array");
          reject({ "message": "data is not array type" });
        } else {
          try {
            var _docs = JSON.parse(JSON.stringify(docs));
          } catch (e) {
            console.log("Array data is not in json");
          }

          collection.insertMany(_docs).then(function (results) {
            resolve(results.insertedCount);
          }, function (err) {
            console.log("Failed to -- insert Docs: " + err.message);
            reject(err.message);
          });
        }
      }
    });
  });
};

DB.prototype.getFestivals = function (coll, query) {

  var _this = this;

  return new Promise(function (resolve, reject) {
    _this.db.collection(coll, { strict: false }, function (error, collection) {
      if (error) {
        console.log("Could not access collection: " + error.message);
        reject(error.message);
      } else {
        var cursor = collection.find(query);
        cursor.toArray(function (error, docArray) {
          if (error) {
            console.log("Error reading fron cursor: " + error.message);
            reject(error.message);
          } else {
            resolve(docArray);
          }
        });
      }
    });
  });
};

module.exports = DB;
//# sourceMappingURL=db.js.map