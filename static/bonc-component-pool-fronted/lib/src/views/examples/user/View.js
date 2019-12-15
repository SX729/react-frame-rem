"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/breadcrumb/style");

var _breadcrumb = _interopRequireDefault(require("antd/es/breadcrumb"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _page = _interopRequireDefault(require("@/components/page"));

var _concaveCard = _interopRequireDefault(require("@/components/concave-card"));

require("./View.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var UserView =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UserView, _React$Component);

  function UserView(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserView).call(this, props));
    _this.state = {
      name: '东方国信',
      age: 20,
      address: '朝阳区东方国信大厦'
    };
    return _this;
  }

  (0, _createClass2.default)(UserView, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_page.default, {
        className: "page"
      }, _react.default.createElement(_breadcrumb.default, null, _react.default.createElement(_breadcrumb.default.Item, {
        href: "/"
      }, _react.default.createElement(_icon.default, {
        type: "home"
      })), _react.default.createElement(_breadcrumb.default.Item, {
        href: "#/example/user"
      }, _react.default.createElement(_icon.default, {
        type: "user"
      }), _react.default.createElement("span", null, "\u7528\u6237\u5217\u8868")), _react.default.createElement(_breadcrumb.default.Item, null, "\u7528\u6237")), _react.default.createElement("div", {
        className: "bonc-mung-user-content"
      }, _react.default.createElement("div", {
        className: "form-item"
      }, _react.default.createElement("span", {
        className: "label"
      }, "\u59D3\u540D: "), _react.default.createElement("span", null, this.state.name)), _react.default.createElement("div", {
        className: "form-item"
      }, _react.default.createElement("span", {
        className: "label"
      }, "\u5E74\u9F84: "), _react.default.createElement("span", null, this.state.age)), _react.default.createElement("div", {
        className: "form-item"
      }, _react.default.createElement("span", {
        className: "label"
      }, "\u5730\u5740: "), _react.default.createElement("span", null, this.state.address))), _react.default.createElement(_concaveCard.default, {
        style: {
          width: '400px',
          height: '400px'
        }
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
  return UserView;
}(_react.default.Component);

var _default = (0, _reactRouter.withRouter)(UserView);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserView, "UserView", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\user\\View.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\user\\View.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();