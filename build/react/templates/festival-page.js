'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Performers = require('../components/Performers.js');

var _Performers2 = _interopRequireDefault(_Performers);

var _rbac = require('../../rbac.js');

var _rbac2 = _interopRequireDefault(_rbac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FestivalPage = function (_React$Component) {
  _inherits(FestivalPage, _React$Component);

  function FestivalPage() {
    _classCallCheck(this, FestivalPage);

    return _possibleConstructorReturn(this, (FestivalPage.__proto__ || Object.getPrototypeOf(FestivalPage)).apply(this, arguments));
  }

  _createClass(FestivalPage, [{
    key: 'render',
    value: function render() {
      var festContent = this.props.festContent;
      var user = this.props.userInfo;
      var canEdit = _rbac2.default.can(user.role, 'edit');
      console.log(canEdit);
      return _react2.default.createElement(
        'div',
        { className: 'festival-body' },
        festContent.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'banner' },
            _react2.default.createElement(
              'div',
              { className: 'fest-navbar' },
              _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'a',
                  { href: '#overview' },
                  'Overview'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'a',
                  { href: '#lineup' },
                  'Lineup'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'a',
                  { href: '#gallery' },
                  'Gallery'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'a',
                  { href: '#venue' },
                  'Venue'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'a',
                  { href: '#faq' },
                  'FAQ'
                )
              ),
              canEdit ? _react2.default.createElement(
                'div',
                { className: 'subnavbar-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'subnavbar-content' },
                  _react2.default.createElement(
                    'a',
                    { href: '/edit/festival/' + festContent.fest_id + '/' + user.id + '/' + festContent.title },
                    'Edit'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'subnavbar-content' },
                  _react2.default.createElement(
                    'a',
                    { href: '/edit/festival/' + festContent.fest_id + '/' + user.id + '/' + festContent.title },
                    'Delete'
                  )
                )
              ) : _react2.default.createElement('div', null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'fest-banner-overlay' },
              _react2.default.createElement(
                'div',
                { className: 'fest-banner-overlay-title' },
                festContent.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'fest-banner-overlay-subtitle' },
                festContent.subtitle
              ),
              _react2.default.createElement(
                'div',
                { className: 'overlay-down' },
                _react2.default.createElement(
                  'a',
                  { href: '#overview' },
                  '  ',
                  _react2.default.createElement('i', { className: 'fa fa-angle-down', 'aria-hidden': 'true' })
                )
              )
            ),
            _react2.default.createElement('img', { src: '/images/festcover.png', alt: 'fest banner' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'overview', className: 'info-content' },
            _react2.default.createElement(
              'div',
              { className: 'page-title' },
              'THE BASICS',
              _react2.default.createElement('div', { className: 'gap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fest-info' },
              _react2.default.createElement(
                'div',
                { className: 'fest-date' },
                festContent.from_date.split("T")[0],
                '-',
                festContent.to_date.split("T")[0]
              ),
              _react2.default.createElement(
                'div',
                { className: 'fest-venue' },
                _react2.default.createElement('img', { src: '/images/flag.png', alt: 'flag' }),
                '  ',
                festContent.city,
                ', ',
                festContent.country
              ),
              _react2.default.createElement(
                'div',
                { className: 'fest-about' },
                festContent.description
              ),
              _react2.default.createElement(
                'div',
                { className: 'share-btns-fest' },
                _react2.default.createElement(
                  'div',
                  { className: 'share-text-fest' },
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
            ),
            _react2.default.createElement(
              'div',
              { className: 'fest-meta' },
              _react2.default.createElement(
                'div',
                { className: 'meta-item' },
                _react2.default.createElement(
                  'button',
                  { className: 'meta-muse' },
                  'Muse'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'meta-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true' }),
                  ' Happening on ',
                  festContent.from_date.split("T")[0]
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-building', 'aria-hidden': 'true' }),
                  ' Can Accomodate ',
                  festContent.capacity,
                  ' People'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-clock-o', 'aria-hidden': 'true' }),
                  ' This festival is ',
                  festContent.age,
                  ' years old'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true' }),
                  ' Will cost around ',
                  festContent.budget
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true' }),
                  ' Happening on ',
                  festContent.from_date.split("T")[0]
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-building', 'aria-hidden': 'true' }),
                  ' Can Accomodate ',
                  festContent.capacity,
                  ' People'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-clock-o', 'aria-hidden': 'true' }),
                  ' This festival is ',
                  festContent.age,
                  ' years old'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'meta-item' },
                  _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true' }),
                  ' Will cost around ',
                  festContent.budget
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FestivalPage;
}(_react2.default.Component);

exports.default = FestivalPage;
//# sourceMappingURL=festival-page.js.map