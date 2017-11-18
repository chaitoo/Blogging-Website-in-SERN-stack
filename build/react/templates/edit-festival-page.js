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

var EditFestival = function (_React$Component) {
  _inherits(EditFestival, _React$Component);

  function EditFestival() {
    _classCallCheck(this, EditFestival);

    return _possibleConstructorReturn(this, (EditFestival.__proto__ || Object.getPrototypeOf(EditFestival)).apply(this, arguments));
  }

  _createClass(EditFestival, [{
    key: 'render',
    value: function render() {
      var festContent = this.props.festival;
      var performers = this.props.performers;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'page-title' },
          'Add New Festival',
          _react2.default.createElement('div', { className: 'gap' })
        ),
        festContent.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
          'form',
          { className: 'add-festival', action: '/api/add/festival', method: 'post' },
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Title'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'Title', value: festContent.title })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Subtitle'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'subtitle', placeholder: 'Subtitle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Full Title'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'fullTitle', placeholder: 'Full Title' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Date'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'From:'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'fromDate', placeholder: 'From Date' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'To: '
            ),
            _react2.default.createElement('input', { type: 'text', name: 'toDate', placeholder: 'To Date' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Description'
            ),
            _react2.default.createElement('textarea', { name: 'description', rows: '8', cols: '90' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Capacity'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'capacity', placeholder: 'capacity' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Age'
            ),
            _react2.default.createElement('input', { type: 'number', name: 'age', placeholder: 'Age' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Budget'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'budget', placeholder: 'Budget' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'City'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'city', placeholder: 'City' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Country'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'country', placeholder: 'country' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              null,
              'Image URL'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'img_url', placeholder: 'Image URL' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row submit-btn' },
            _react2.default.createElement('input', { type: 'submit', name: 'Save' })
          )
        )
      );
    }
  }]);

  return EditFestival;
}(_react2.default.Component);

exports.default = EditFestival;
//# sourceMappingURL=edit-festival-page.js.map