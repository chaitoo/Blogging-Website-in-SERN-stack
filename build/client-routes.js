'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

require('isomorphic-fetch');

var _Navbar = require('./react/components/Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _home = require('./react/templates/home.js');

var _home2 = _interopRequireDefault(_home);

var _festivalList = require('./react/templates/festival-list.js');

var _festivalList2 = _interopRequireDefault(_festivalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(_ref) {
  var initial = _ref.initial;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Navbar2.default }),
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', render: function render() {
        return _react2.default.createElement(_home2.default, { fests: initial });
      } }),
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/festivals', component: _festivalList2.default })
  );
};

exports.default = Routes;
//# sourceMappingURL=client-routes.js.map