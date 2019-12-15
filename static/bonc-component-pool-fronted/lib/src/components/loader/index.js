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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Loader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Loader, _React$Component);

  function Loader() {
    (0, _classCallCheck2.default)(this, Loader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Loader).apply(this, arguments));
  }

  (0, _createClass2.default)(Loader, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('bonc-mung-loader', {
          'hidden': !this.props.spinning,
          'fullScreen': this.props.fullScreen
        })
      }, _react.default.createElement("div", {
        className: "warpper"
      }, _react.default.createElement("div", {
        className: "inner"
      }), _react.default.createElement("div", {
        className: "text"
      }, "LOADING")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Loader;
}(_react.default.Component);

Loader.propTypes = {
  spinning: _propTypes.default.bool,
  fullScreen: _propTypes.default.bool
};

Loader.newInstance = function (properties) {
  var props = properties || {};
  var div = document.createElement('div');
  document.body.appendChild(div);

  _reactDom.default.render(_react.default.createElement(Loader, props), div);

  return {
    destroy: function destroy() {
      _reactDom.default.unmountComponentAtNode(div);

      document.body.removeChild(div);
    }
  };
};

var loadingInstance = 0;

Loader.getLoadingInstance = function () {
  loadingInstance = loadingInstance || Loader.newInstance({
    spinning: true
  });
  return loadingInstance;
};

Loader.open = function () {
  Loader.getLoadingInstance();
};

Loader.close = function () {
  if (loadingInstance) {
    loadingInstance.destroy();
    loadingInstance = null;
  }
};

var _default = Loader;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\loader\\index.jsx");
  reactHotLoader.register(loadingInstance, "loadingInstance", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\loader\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\loader\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();