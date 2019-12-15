"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var NumberCard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NumberCard, _React$Component);

  function NumberCard() {
    (0, _classCallCheck2.default)(this, NumberCard);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NumberCard).apply(this, arguments));
  }

  (0, _createClass2.default)(NumberCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          total = _this$props.total,
          trendComponent = _this$props.trendComponent,
          descComponent = _this$props.descComponent;
      return _react.default.createElement("div", {
        className: "bonc-mung-number-card"
      }, _react.default.createElement("div", {
        className: "number-card-top"
      }, _react.default.createElement("div", {
        className: "number-card-title"
      }, _react.default.createElement("span", null, title)), _react.default.createElement("div", {
        className: "number-card-data"
      }, _react.default.createElement("span", null, total))), _react.default.createElement("div", {
        className: "number-card-content"
      }, _react.default.createElement("div", null, trendComponent)), _react.default.createElement("div", {
        className: "number-card-footer"
      }, _react.default.createElement("div", null, descComponent)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return NumberCard;
}(_react.default.Component);

var _default = NumberCard;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NumberCard, "NumberCard", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\number-card\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\number-card\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();