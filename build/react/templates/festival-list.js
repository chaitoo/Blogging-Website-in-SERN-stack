'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FestivalList = require('../components/FestivalList');

var _FestivalList2 = _interopRequireDefault(_FestivalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalListPage = function (_React$Component) {
  _inherits(FestivalListPage, _React$Component);

  function FestivalListPage() {
    _classCallCheck(this, FestivalListPage);

    return _possibleConstructorReturn(this, (FestivalListPage.__proto__ || Object.getPrototypeOf(FestivalListPage)).apply(this, arguments));
  }

  _createClass(FestivalListPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'fest-list' },
          _react2.default.createElement(
            'div',
            { className: 'page-title' },
            'Discover Trending Festivals'
          ),
          _react2.default.createElement(_FestivalList2.default, { initialFests: this.props.initialFests })
        )
      );
    }
  }]);

  return FestivalListPage;
}(_react2.default.Component);

exports.default = FestivalListPage;
//# sourceMappingURL=festival-list.js.map