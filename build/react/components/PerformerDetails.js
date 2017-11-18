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

var PerformerDetails = function (_React$Component) {
  _inherits(PerformerDetails, _React$Component);

  function PerformerDetails() {
    _classCallCheck(this, PerformerDetails);

    return _possibleConstructorReturn(this, (PerformerDetails.__proto__ || Object.getPrototypeOf(PerformerDetails)).apply(this, arguments));
  }

  _createClass(PerformerDetails, [{
    key: 'hidePerformer',
    value: function hidePerformer(e) {
      if (e.target.className == "performer-background") {
        document.getElementsByClassName("performer-background")[0].style.display = "none";
        document.body.style.overflow = "scroll";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var performerDetails = this.props.details;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'performer-section' },
          _react2.default.createElement(
            'div',
            { className: 'performer-background', onClick: this.hidePerformer.bind(this) },
            performerDetails.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
              'div',
              { className: 'performer-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'performer-title-section' },
                _react2.default.createElement(
                  'div',
                  { className: 'performer-title' },
                  performerDetails.name
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'performer-tags' },
                  _react2.default.createElement(
                    'div',
                    { className: 'tag' },
                    PerformerDetails.tags
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'performer-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'performer-img' },
                  _react2.default.createElement('img', { src: performerDetails.img_url, alt: 'performer-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'performer-about' },
                  performerDetails.about
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'preview-btn-div' },
                  _react2.default.createElement(
                    'button',
                    { className: 'meta-muse' },
                    'Preview'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PerformerDetails;
}(_react2.default.Component);

exports.default = PerformerDetails;
//# sourceMappingURL=PerformerDetails.js.map