"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesList = function (_React$Component) {
  _inherits(ArticlesList, _React$Component);

  function ArticlesList() {
    _classCallCheck(this, ArticlesList);

    return _possibleConstructorReturn(this, (ArticlesList.__proto__ || Object.getPrototypeOf(ArticlesList)).apply(this, arguments));
  }

  _createClass(ArticlesList, [{
    key: "render",
    value: function render() {
      var articles = this.props.articles;
      return _react2.default.createElement(
        "div",
        { className: "blog-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "blog-grid" },
          articles.map(function (blog) {
            return _react2.default.createElement(
              "div",
              { className: "blog-card", key: blog.id },
              _react2.default.createElement(
                "div",
                { className: "blog-card-wrapper" },
                _react2.default.createElement(
                  "div",
                  { className: "background-img" },
                  _react2.default.createElement("img", { src: blog.img_url, alt: "img" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "foreground-title" },
                  _react2.default.createElement(
                    "div",
                    { className: "banner-heart" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "/images/heart.png", alt: "img" })
                    )
                  ),
                  _react2.default.createElement(
                    "a",
                    { href: "/article/" + blog.id + "/" + blog.title },
                    _react2.default.createElement(
                      "div",
                      { className: "blog-grid-title" },
                      blog.title
                    )
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return ArticlesList;
}(_react2.default.Component);

exports.default = ArticlesList;
//# sourceMappingURL=ArticlesList.js.map