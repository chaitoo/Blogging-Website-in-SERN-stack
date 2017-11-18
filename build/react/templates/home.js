'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

var _FestivalGrid = require('../components/FestivalGrid');

var _FestivalGrid2 = _interopRequireDefault(_FestivalGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      //console.log(this.props.fests);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'banner-component' },
          _react2.default.createElement(
            'div',
            { className: 'banner-img' },
            _react2.default.createElement('img', { src: 'http://media2.intoday.in/indiatoday/images/stories//2015August/bacardi-nh7-weekender-shillong,-october_mos_082715041824.jpg', alt: 'banner' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'banner-overlay' },
            _react2.default.createElement(
              'div',
              { className: 'banner-title' },
              'Your Online Guide To Worlds Music Festival Across The Globe'
            ),
            _react2.default.createElement(
              'div',
              { className: 'search-div' },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Search for your favorite festivals, articles and videos' }),
              _react2.default.createElement(
                'button',
                { type: 'button', name: 'button' },
                'Search'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'trending-div' },
          _react2.default.createElement(
            'div',
            { className: 'trending-title' },
            'Trending Festivals Around The World'
          ),
          _react2.default.createElement(
            'div',
            { className: 'trending-subtitle' },
            'Discover f festivals across the globe. Preview for quality videos and Muse to stay connected'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'grid' },
          _react2.default.createElement(_FestivalGrid2.default, { fests: this.props.fests })
        ),
        _react2.default.createElement(
          'div',
          { className: 'load-more' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/festivals' },
            'View More'
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;
//# sourceMappingURL=home.js.map