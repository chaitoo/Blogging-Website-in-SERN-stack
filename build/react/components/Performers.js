'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PerformerDetails = require('./PerformerDetails.js');

var _PerformerDetails2 = _interopRequireDefault(_PerformerDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Performers = function (_React$Component) {
  _inherits(Performers, _React$Component);

  function Performers(props) {
    _classCallCheck(this, Performers);

    var _this = _possibleConstructorReturn(this, (Performers.__proto__ || Object.getPrototypeOf(Performers)).call(this, props));

    _this.state = {
      performer: []
    };
    return _this;
  }

  _createClass(Performers, [{
    key: 'showPerformer',
    value: function showPerformer(performer, e) {
      var content = document.getElementsByClassName("performer-background");
      content[0].style.display = "block";
      document.body.style.overflow = "hidden";
      this.setState({ performer: performer });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var performers = [];
      if (this.props.performersList) {
        performers = this.props.performersList;
      }
      return _react2.default.createElement(
        'div',
        null,
        performers.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PerformerDetails2.default, { details: this.state.performer })
          ),
          _react2.default.createElement(
            'div',
            { className: 'performers' },
            _react2.default.createElement(
              'div',
              { className: 'page-title' },
              'HEADLINERS',
              _react2.default.createElement('div', { className: 'gap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'performers-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'performers-div-main' },
                performers.map(function (performer) {
                  return _react2.default.createElement(
                    'div',
                    { className: 'performer-tile-main', onClick: _this2.showPerformer.bind(_this2, performer), key: performer.artist_id },
                    _react2.default.createElement('img', { src: performer.img_url, alt: 'performer' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'headliner-name' },
                      _react2.default.createElement(
                        'div',
                        { className: 'headline-overlay-name' },
                        performer.name
                      )
                    )
                  );
                })
              ),
              _react2.default.createElement(
                'button',
                { className: 'performer-slide-left-btn' },
                '\u276E'
              ),
              _react2.default.createElement(
                'button',
                { className: 'performer-slide-right-btn' },
                '\u276F'
              )
            )
          )
        )
      );
    }
  }]);

  return Performers;
}(_react2.default.Component);

exports.default = Performers;
//# sourceMappingURL=Performers.js.map