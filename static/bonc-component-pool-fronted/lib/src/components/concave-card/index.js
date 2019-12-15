"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.less");

var _classnames = _interopRequireDefault(require("classnames"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ConcaveCard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ConcaveCard, _React$Component);

  function ConcaveCard() {
    (0, _classCallCheck2.default)(this, ConcaveCard);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConcaveCard).apply(this, arguments));
  }

  (0, _createClass2.default)(ConcaveCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('bonc-mung-concave-card', (0, _defineProperty2.default)({}, className, true)),
        style: style
      }, _react.default.createElement("div", {
        className: "concave-card-border left"
      }, _react.default.createElement("div", {
        className: "inner-top"
      }), _react.default.createElement("div", {
        className: "inner-bottom"
      })), _react.default.createElement("div", {
        className: "concave-card-border top"
      }, _react.default.createElement("div", {
        className: "inner-left"
      }), _react.default.createElement("div", {
        className: "inner-right"
      })), _react.default.createElement("div", {
        className: "concave-card-border right"
      }, _react.default.createElement("div", {
        className: "inner-top"
      }), _react.default.createElement("div", {
        className: "inner-bottom"
      })), _react.default.createElement("div", {
        className: "concave-card-border bootom"
      }, _react.default.createElement("div", {
        className: "inner-left"
      }), _react.default.createElement("div", {
        className: "inner-right"
      })), _react.default.createElement("div", {
        className: "body"
      }, children), _react.default.createElement("div", {
        className: "concave-block top"
      }), _react.default.createElement("div", {
        className: "concave-block left"
      }), _react.default.createElement("div", {
        className: "concave-block right"
      }), _react.default.createElement("div", {
        className: "concave-block bottom"
      }), _react.default.createElement("div", {
        className: "corner-lt"
      }), _react.default.createElement("div", {
        className: "corner-rb"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ConcaveCard;
}(_react.default.Component);

ConcaveCard.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  style: _propTypes.default.object
};
var _default = ConcaveCard;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConcaveCard, "ConcaveCard", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\concave-card\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\concave-card\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();