'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clientRoutes = require('./client-routes');

var _clientRoutes2 = _interopRequireDefault(_clientRoutes);

var _festivalGridContainer = require('./react/templates/festivalGrid-container');

var _festivalGridContainer2 = _interopRequireDefault(_festivalGridContainer);

var _festivalList = require('./react/templates/festival-list.js');

var _festivalList2 = _interopRequireDefault(_festivalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverApp = (0, _express2.default)();

serverApp.set('view engine', 'ejs');
serverApp.set('views', _path2.default.join(__dirname, 'views'));

serverApp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

serverApp.get('/festivals', function (req, res) {
  var content = (0, _server.renderToString)(_react2.default.createElement(_festivalList2.default, null));
  res.render('festival-listing', { title: 'Musefests-Festivals', content: content });
});

serverApp.get('/', function (req, res) {
  fetch('http://localhost:2525/api/fests').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var festGridContainer = (0, _server.renderToString)(_react2.default.createElement(_festivalGridContainer2.default, { fests: data }));
    res.render('index', { title: 'Musefests', festGridContainer: festGridContainer });
  }).catch(function (e) {
    console.log("err api fetching" + e);
  });
});

module.exports = serverApp;
//# sourceMappingURL=server-routes.js.map