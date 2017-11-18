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

var _festData = require('../../data/festData.js');

var _festData2 = _interopRequireDefault(_festData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalGrid = function (_React$Component) {
  _inherits(FestivalGrid, _React$Component);

  function FestivalGrid(props) {
    _classCallCheck(this, FestivalGrid);

    var _this = _possibleConstructorReturn(this, (FestivalGrid.__proto__ || Object.getPrototypeOf(FestivalGrid)).call(this, props));

    _this.state = { festivals: props.fests };
    //this.loadData = this.loadData.bind(this);
    return _this;
  }

  _createClass(FestivalGrid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ festivals: this.props.fests });
    }

    // loadData() {
    //   var _this = this;
    //   fetch('http://localhost:2525/api/fests')
    //     .then(resp => resp.json())
    //     .then(function (data) {
    //         _this.setState ({festivals:data});
    //     })
    //     .catch(function(e) {
    //       console.log("err api fetching"+e);
    //     });
    // }
    //
    // componentDidMount() {
    //   this.loadData();
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.state ? _react2.default.createElement(
          'div',
          null,
          'none'
        ) : this.props.fests.map(function (fest) {
          return _react2.default.createElement(
            'div',
            { className: 'card', key: fest.fest_id },
            _react2.default.createElement(
              'div',
              { className: 'card-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'primary-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'fest-thumb' },
                  _react2.default.createElement('img', { src: fest.img_url, alt: 'image' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'heart' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('img', { src: '/images/heart.png', alt: '' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'fest-content' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fest-title' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      fest.title
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fest-venue' },
                    _react2.default.createElement('img', { src: '/images/flag.png', alt: 'flag' }),
                    ' ',
                    fest.city,
                    ', ',
                    fest.country,
                    ' '
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fest-date' },
                    _react2.default.createElement('img', { src: '/images/calendar.png', alt: 'date' }),
                    ' ',
                    fest.from_date.split("T")[0],
                    ' - ',
                    fest.to_date.split("T")[0]
                  )
                )
              )
            )
          );
        })
      );
    }
  }]);

  return FestivalGrid;
}(_react2.default.Component);

exports.default = FestivalGrid;
//# sourceMappingURL=FestivalGrid.js.map