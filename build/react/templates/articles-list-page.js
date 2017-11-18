'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticlesList = require('../components/ArticlesList');

var _ArticlesList2 = _interopRequireDefault(_ArticlesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesListPage = function (_React$Component) {
  _inherits(ArticlesListPage, _React$Component);

  function ArticlesListPage() {
    _classCallCheck(this, ArticlesListPage);

    return _possibleConstructorReturn(this, (ArticlesListPage.__proto__ || Object.getPrototypeOf(ArticlesListPage)).apply(this, arguments));
  }

  _createClass(ArticlesListPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'page-title' },
          'Discover Trending Articles'
        ),
        _react2.default.createElement(_ArticlesList2.default, { articles: this.props.articles }),
        _react2.default.createElement(
          'div',
          { className: 'load-more' },
          _react2.default.createElement(
            'a',
            null,
            'View More'
          )
        )
      );
    }
  }]);

  return ArticlesListPage;
}(_react2.default.Component);

exports.default = ArticlesListPage;
//# sourceMappingURL=articles-list-page.js.map