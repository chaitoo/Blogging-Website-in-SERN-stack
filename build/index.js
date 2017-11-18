'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _Navbar = require('./react/components/Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _homeContainer = require('./react/templates/homeContainer.js');

var _homeContainer2 = _interopRequireDefault(_homeContainer);

var _festivalListContainer = require('./react/templates/festival-list-container.js');

var _festivalListContainer2 = _interopRequireDefault(_festivalListContainer);

var _festivalPageContainer = require('./react/templates/festival-page-container.js');

var _festivalPageContainer2 = _interopRequireDefault(_festivalPageContainer);

var _festData = require('./data/festData.js');

var _festData2 = _interopRequireDefault(_festData);

require('./static/third-party/font-awesome/css/font-awesome.min.css');

require('./static/css/mobile-styles.css');

require('./static/css/home.css');

require('./static/css/festival-page.css');

require('./static/css/festival-list.css');

require('./static/css/crud-styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouterDom.Route, { component: _Navbar2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _homeContainer2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/festivals', component: _festivalListContainer2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/festival/:_id/:title', component: _festivalPageContainer2.default })
    )
  ), document.getElementById('main'));
};
//# sourceMappingURL=index.js.map