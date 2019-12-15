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

var _reactRouterConfig = require("react-router-config");

var _reactRouterDom = require("react-router-dom");

var _propTypes = require("prop-types");

var _index = _interopRequireDefault(require("routes/index.jsx"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _actions = require("@/redux/actions");

require("@/App.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var App =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(App, _PureComponent);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRouterDom.HashRouter, null, (0, _reactRouterConfig.renderRoutes)(_index.default));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return App;
}(_react.PureComponent);

App.propTypes = {
  login: _propTypes.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: (0, _redux.bindActionCreators)(_actions.login, dispatch)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\App.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\App.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\App.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\App.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();