'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _festivalList = require('./festival-list');

var _festivalList2 = _interopRequireDefault(_festivalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalListPageContainer = function (_React$Component) {
  _inherits(FestivalListPageContainer, _React$Component);

  function FestivalListPageContainer() {
    _classCallCheck(this, FestivalListPageContainer);

    var _this2 = _possibleConstructorReturn(this, (FestivalListPageContainer.__proto__ || Object.getPrototypeOf(FestivalListPageContainer)).call(this));

    _this2.state = { festsList: [] };
    return _this2;
  }

  _createClass(FestivalListPageContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      fetch('http://test.musefests.com/api/fests').then(function (resp) {
        return resp.json();
      }).then(function (data) {
        _this.setState({ festsList: data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'fest-list' },
          _react2.default.createElement(_festivalList2.default, { initialFests: this.state.festsList })
        )
      );
    }
  }]);

  return FestivalListPageContainer;
}(_react2.default.Component);

exports.default = FestivalListPageContainer;
//# sourceMappingURL=festival-list-container.js.map