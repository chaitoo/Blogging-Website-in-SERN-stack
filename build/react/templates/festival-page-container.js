'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _festivalPage = require('./festival-page');

var _festivalPage2 = _interopRequireDefault(_festivalPage);

var _editFestivalPage = require('./edit-festival-page');

var _editFestivalPage2 = _interopRequireDefault(_editFestivalPage);

var _Performers = require('../components/Performers');

var _Performers2 = _interopRequireDefault(_Performers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalPageContainer = function (_React$Component) {
  _inherits(FestivalPageContainer, _React$Component);

  function FestivalPageContainer(props) {
    _classCallCheck(this, FestivalPageContainer);

    var _this2 = _possibleConstructorReturn(this, (FestivalPageContainer.__proto__ || Object.getPrototypeOf(FestivalPageContainer)).call(this, props));

    _this2.state = {
      festContent: [],
      performersContent: []
    };
    return _this2;
  }

  _createClass(FestivalPageContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fest_id = this.props.match.params._id;
      var _this = this;
      fetch('http://test.musefests.com/api/festival/' + fest_id).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        _this.setState({
          festContent: data.festData,
          performersContent: data.performers[0]
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_festivalPage2.default, { festContent: this.state.festContent, performersList: this.state.performersContent })
      );
    }
  }]);

  return FestivalPageContainer;
}(_react2.default.Component);

exports.default = FestivalPageContainer;
//# sourceMappingURL=festival-page-container.js.map