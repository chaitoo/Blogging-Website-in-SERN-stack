'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _festData = require('../../data/festData.js');

var _festData2 = _interopRequireDefault(_festData);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalList = function (_React$Component) {
  _inherits(FestivalList, _React$Component);

  function FestivalList() {
    _classCallCheck(this, FestivalList);

    return _possibleConstructorReturn(this, (FestivalList.__proto__ || Object.getPrototypeOf(FestivalList)).apply(this, arguments));
  }

  _createClass(FestivalList, [{
    key: 'removeFest',
    value: function removeFest(fest_id, e) {
      console.log(fest_id);
      fetch('http://test.musefests.com/api/remove/festival/' + fest_id).then(function (resp) {
        location.reload(true);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var festsList = this.props.initialFests;
      var user = this.props.userInfo;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'fest-list-main-content' },
          festsList.map(function (fest) {
            return _react2.default.createElement(
              'div',
              { className: 'fest-list-container', key: fest.fest_id },
              _react2.default.createElement(
                'div',
                { className: 'fest-list-wrapper' },
                _react2.default.createElement(
                  'div',
                  { className: 'fest-list-content' },
                  _react2.default.createElement(
                    'div',
                    { className: 'left-content' },
                    _react2.default.createElement('img', { src: '/images/festival.jpg', alt: 'fest pic' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'right-content' },
                    _react2.default.createElement(
                      'div',
                      { className: 'header' },
                      _react2.default.createElement(
                        'div',
                        { className: 'remove-fest' },
                        _react2.default.createElement(
                          'button',
                          { onClick: _this2.removeFest.bind(_this2, fest.fest_id) },
                          'Remove Fest'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        _react2.default.createElement(
                          'a',
                          { href: '/festival/' + fest.fest_id + '/' + fest.title },
                          fest.title
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'xs-hide btn-muse' },
                        _react2.default.createElement(
                          'button',
                          { className: 'muse-btn' },
                          'Muse'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'date' },
                      _react2.default.createElement('i', { className: 'fa fa-calendar-check-o', 'aria-hidden': 'true' }),
                      ' ',
                      fest.from_date.split("T")[0],
                      ' | ',
                      fest.fromtime,
                      ' Onwards'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'venue' },
                      _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                      ' ',
                      fest.city,
                      ', ',
                      fest.country
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'about' },
                      fest.short_desc,
                      '\u2026. ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'Read More'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'headline' },
                      'Headliners: ',
                      _react2.default.createElement(
                        'a',
                        null,
                        'DJ Snake'
                      ),
                      ', ',
                      _react2.default.createElement(
                        'a',
                        null,
                        'Dj David Guetta'
                      ),
                      ', ',
                      _react2.default.createElement(
                        'a',
                        null,
                        'DJ Skip'
                      ),
                      ' and +  35 more'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'xs btn-muse' },
                  _react2.default.createElement(
                    'button',
                    { className: 'muse-btn' },
                    'Muse'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'share-btns' },
                  _react2.default.createElement(
                    'div',
                    { className: 'share-text' },
                    'Share with friends'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'a',
                    null,
                    _react2.default.createElement('img', { src: '/images/fb.png', alt: '' })
                  ),
                  _react2.default.createElement(
                    'a',
                    null,
                    _react2.default.createElement('img', { src: '/images/insta.png', alt: '' })
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return FestivalList;
}(_react2.default.Component);

exports.default = FestivalList;
//# sourceMappingURL=FestivalList.js.map