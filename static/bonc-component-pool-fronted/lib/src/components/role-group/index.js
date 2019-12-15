"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/breadcrumb/style");

var _breadcrumb = _interopRequireDefault(require("antd/es/breadcrumb"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("../page"));

var _GroupTabPanel = _interopRequireDefault(require("./GroupTabPanel"));

require("./index.less");

var _services = require("./services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TabPane = _tabs.default.TabPane;

var Group =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Group, _React$Component);

  function Group(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Group);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Group).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleModeChange", function (e) {
      var mode = e.target.value;

      _this.setState({
        mode: mode
      });
    });
    _this.state = {
      mode: 'top',
      tabs: []
    };
    return _this;
  }

  (0, _createClass2.default)(Group, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _services.findGroupTypeList)().then(function (res) {
        _this2.setState({
          tabs: res.data.list
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.state.mode;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, _react.default.createElement("a", {
        href: ""
      }, "\u89D2\u8272\u7EC4\u7BA1\u7406"))), _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_tabs.default, {
        defaultActiveKey: "role",
        tabPosition: mode
      }, this.state.tabs.map(function (tab) {
        return _react.default.createElement(TabPane, {
          tab: tab.name,
          key: tab.code
        }, _react.default.createElement(_GroupTabPanel.default, tab));
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Group;
}(_react.default.Component);

var _default = _form.default.create()(Group);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabPane, "TabPane", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\index.jsx");
  reactHotLoader.register(Group, "Group", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();