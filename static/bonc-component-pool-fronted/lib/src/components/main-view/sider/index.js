"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Nav = _interopRequireDefault(require("../nav/Nav"));

var _index = _interopRequireDefault(require("../../../config/index"));

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Sider =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Sider, _PureComponent);

  function Sider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Sider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sider).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(Sider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          menus = _this$props.menus,
          collapsed = _this$props.collapsed,
          onCollapseChange = _this$props.onCollapseChange;
      return _react.default.createElement(_layout.default.Sider, {
        className: "bonc-mung-sider",
        width: 256,
        breakpoint: "lg",
        collapsed: collapsed,
        onCollapse: onCollapseChange
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('bonc-mung-sider-brand', {
          'center': collapsed
        })
      }, _react.default.createElement("div", {
        className: "bonc-mung-sider-logo"
      }, _react.default.createElement("img", {
        alt: "logo",
        src: require('assets/images/logo.svg')
      }), collapsed ? null : _react.default.createElement("span", null, _index.default.applicationName))), _react.default.createElement("div", {
        className: "bonc-mung-sider-menuContainer"
      }, _react.default.createElement(_Nav.default, {
        menus: menus,
        mode: "inline"
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Sider;
}(_react.PureComponent);

Sider.propTypes = {
  menus: _propTypes.default.array,
  theme: _propTypes.default.string,
  collapsed: _propTypes.default.bool,
  onThemeChange: _propTypes.default.func,
  onCollapseChange: _propTypes.default.func
};
var _default = Sider;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sider, "Sider", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\sider\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\sider\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();