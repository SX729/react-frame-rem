"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _actions = require("@/redux/actions");

require("./Counter.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    increment: (0, _redux.bindActionCreators)(_actions.increment, dispatch)
  };
};

var Counter = function Counter(_ref) {
  var count = _ref.count,
      increment = _ref.increment;
  return _react.default.createElement("div", {
    className: "counter"
  }, _react.default.createElement("a", {
    href: "javascript: void(0)",
    onClick: increment
  }, "\u70B9\u8FD9\u91CC\u513F"), count);
};

Counter.prototype.propTypes = {
  count: _propTypes.default.number,
  increment: _propTypes.default.func
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\counter\\components\\Counter.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\counter\\components\\Counter.jsx");
  reactHotLoader.register(Counter, "Counter", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\counter\\components\\Counter.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\counter\\components\\Counter.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();