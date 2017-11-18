'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BannerNavbar = require('./BannerNavbar');

var _BannerNavbar2 = _interopRequireDefault(_BannerNavbar);

var _rbac = require('../../rbac.js');

var _rbac2 = _interopRequireDefault(_rbac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlePageBanner = function (_React$Component) {
  _inherits(ArticlePageBanner, _React$Component);

  function ArticlePageBanner() {
    _classCallCheck(this, ArticlePageBanner);

    return _possibleConstructorReturn(this, (ArticlePageBanner.__proto__ || Object.getPrototypeOf(ArticlePageBanner)).apply(this, arguments));
  }

  _createClass(ArticlePageBanner, [{
    key: 'render',
    value: function render() {
      var blogContent = this.props.blogDetails;
      var user = this.props.userInfo;
      var accessParams = {
        user: {},
        post: {}
      };
      accessParams.user.id = user.id;
      accessParams.post.owner = blogContent.writer_id;
      var canEdit = _rbac2.default.can(user.role, 'edit', accessParams);
      return _react2.default.createElement(
        'div',
        { className: 'banner' },
        canEdit ? _react2.default.createElement(_BannerNavbar2.default, { blog_id: blogContent.id, user_id: user.id, blog_title: blogContent.title }) : _react2.default.createElement('div', null),
        _react2.default.createElement(
          'div',
          { className: 'fest-banner-overlay' },
          _react2.default.createElement(
            'div',
            { className: 'fest-banner-overlay-title' },
            blogContent.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'fest-banner-overlay-subtitle' },
            blogContent.subtitle
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
        _react2.default.createElement('img', { src: blogContent.img_url, alt: 'fest banner' })
      );
    }
  }]);

  return ArticlePageBanner;
}(_react2.default.Component);

exports.default = ArticlePageBanner;
//# sourceMappingURL=ArticlePageBanner.js.map