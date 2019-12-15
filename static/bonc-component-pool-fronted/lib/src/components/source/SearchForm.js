"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SearchForm, _React$Component);

  function SearchForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resetSearch", function () {
      _this.props.form.resetFields();

      _this.props.handleSubmit({});
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function () {
      _this.props.handleSubmit(_this.props.form.getFieldsValue());
    });
    return _this;
  }

  (0, _createClass2.default)(SearchForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return _react.default.createElement(_form.default, {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, _react.default.createElement(_form.default.Item, {
        label: "\u8D44\u6E90\u540D\u79F0"
      }, getFieldDecorator('title', {})(_react.default.createElement(_input.default.Search, {
        placeholder: "\u8BF7\u8F93\u5165\u8D44\u6E90\u540D\u79F0\u641C\u7D22",
        style: {
          width: 169
        }
      }))), _react.default.createElement(_form.default.Item, {
        label: "\u8D44\u6E90\u5206\u7C7B"
      }, getFieldDecorator('classify', {})(_react.default.createElement(_select.default, {
        placeholder: "\u8BF7\u9009\u62E9\u8D44\u6E90\u5206\u7C7B\u641C\u7D22",
        style: {
          width: 169
        },
        allowClear: true
      }, _react.default.createElement(_select.default.Option, {
        value: "common"
      }, "\u516C\u5171"), _react.default.createElement(_select.default.Option, {
        value: "pc"
      }, "PC\u7AEF"), _react.default.createElement(_select.default.Option, {
        value: "app"
      }, "\u79FB\u52A8\u7AEF")))), _react.default.createElement(_form.default.Item, null, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          marginRight: '10px'
        }
      }, "\u641C\u7D22"), _react.default.createElement(_button.default, {
        onClick: this.resetSearch
      }, "\u91CD\u7F6E"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return SearchForm;
}(_react.default.Component);

var _default = _form.default.create({
  name: 'horizontal_login'
})(SearchForm);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchForm, "SearchForm", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\SearchForm.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\SearchForm.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();