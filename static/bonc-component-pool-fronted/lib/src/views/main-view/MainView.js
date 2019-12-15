"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PrimaryLayout = _interopRequireDefault(require("@/views/layout/PrimaryLayout"));

var _UCBLayout = _interopRequireDefault(require("@/views/layout/UCBLayout"));

var _index = _interopRequireDefault(require("@/config/index"));

require("./MainView.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var MainView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(MainView, _PureComponent);

  function MainView(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MainView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MainView).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(MainView, [{
    key: "layoutMapping",
    value: function layoutMapping() {
      return {
        primary: _PrimaryLayout.default,
        ucb: _UCBLayout.default
      };
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.layoutMapping()[_index.default['LAYOUT_MODE'] || 'primary'];
      return _react.default.createElement(Component, {
        childRoutes: (this.props.route || {}).childRoutes
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return MainView;
}(_react.PureComponent);

MainView.propTypes = {
  route: _propTypes.default.object
};
var _default = MainView;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainView, "MainView", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\main-view\\MainView.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\main-view\\MainView.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();