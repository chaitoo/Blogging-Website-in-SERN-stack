'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var user = this.props.userInfo;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            'div',
            { className: 'nav-logo' },
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement('img', { src: '/images/logo.png', alt: 'logo' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mobile-navbar-content nav-button-xs' },
            _react2.default.createElement(
              'div',
              { className: 'xs user-login nav-button-xs' },
              _react2.default.createElement('i', { className: 'fa fa-user ', 'aria-hidden': 'true' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'xs ham-icon nav-button-xs' },
              _react2.default.createElement('i', { className: 'fa fa-bars nav-ham-button-xs', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-body hide' },
            _react2.default.createElement(
              'div',
              { className: 'nav-content' },
              _react2.default.createElement(
                'a',
                { href: '/festivals' },
                'Festivals'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'nav-content' },
              _react2.default.createElement(
                'a',
                { href: '/articles' },
                'Articles'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'nav-content' },
              _react2.default.createElement(
                'a',
                { href: '/videos' },
                'Videos'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'nav-content' },
              _react2.default.createElement(
                'a',
                { href: '/search' },
                'Search'
              )
            )
          ),
          Object.keys(user).length !== 0 && user.constructor === Object ? _react2.default.createElement(
            'div',
            { className: 'login-div hide' },
            _react2.default.createElement(
              'div',
              { className: 'nav-industry-login' },
              _react2.default.createElement(
                'a',
                null,
                'Hello ',
                user.firstname
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'nav-login ' },
              _react2.default.createElement(
                'a',
                { className: 'navbar-user-options' },
                _react2.default.createElement('i', { className: 'fa fa-user-o', 'aria-hidden': 'true' })
              )
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'login-div hide' },
            _react2.default.createElement(
              'div',
              { className: 'nav-industry-login' },
              _react2.default.createElement(
                'a',
                { href: '/signup' },
                'Industry Sign In'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'nav-login' },
              _react2.default.createElement(
                'a',
                { href: '/signin' },
                'Log In'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'user-options-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'user-options' },
            _react2.default.createElement(
              'a',
              { href: '/add/festival' },
              'Add New Festival'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-options' },
            _react2.default.createElement(
              'a',
              { href: '/add/article' },
              'Add New Article'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-options' },
            _react2.default.createElement(
              'a',
              { href: '/logout' },
              'Logout'
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map