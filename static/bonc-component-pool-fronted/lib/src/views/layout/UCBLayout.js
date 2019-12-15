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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterConfig = require("react-router-config");

var _reactRouterDom = require("react-router-dom");

var _root = require("react-hot-loader/root");

var _reactRedux = require("react-redux");

var _TopHeader = _interopRequireDefault(require("../../components/main-view/header/TopHeader"));

var _services = require("./services");

require("./UCBLayout.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Content = _layout.default.Content,
    Footer = _layout.default.Footer;

var mapStateToProps = function mapStateToProps(state) {
  return {
    collapsed: state.page.collapsed
  };
};

var UCBLayout =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(UCBLayout, _PureComponent);

  function UCBLayout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UCBLayout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UCBLayout).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCollapseChange", function (collapsed) {
      _this.props.dispatch({
        type: 'APP_HANDLE_COLLAPSE_CHANGE',
        payload: collapsed
      });
    });
    _this.state = {
      menus: []
    };
    return _this;
  }

  (0, _createClass2.default)(UCBLayout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _services.findMenuTreeList)({}).then(function (menus) {
        _this2.setState({
          menus: menus
        });
      });
    }
    /**
     * 页面左侧菜单折叠事件
     */

  }, {
    key: "render",
    value: function render() {
      var onCollapseChange = this.onCollapseChange;
      var childRoutes = this.props.childRoutes;
      var menus = this.state.menus;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_layout.default, {
        className: "bonc-mung-ucb-layout"
      }, _react.default.createElement(_TopHeader.default, {
        menus: menus,
        onCollapseChange: onCollapseChange
      }), _react.default.createElement(_layout.default, {
        className: "bonc-mung-layout-main"
      }, _react.default.createElement(Content, {
        className: "bonc-mung-layout-content"
      }, (0, _reactRouterConfig.renderRoutes)(childRoutes))), _react.default.createElement(Footer, {
        style: {
          textAlign: 'center'
        }
      }, "Copyright \xA92019 \u5317\u4EAC\u4E1C\u65B9\u56FD\u4FE1\u79D1\u6280\u6709\u9650\u516C\u53F8")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return UCBLayout;
}(_react.PureComponent);

var _default = (0, _root.hot)((0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(UCBLayout)));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\UCBLayout.jsx");
  reactHotLoader.register(Footer, "Footer", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\UCBLayout.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\UCBLayout.jsx");
  reactHotLoader.register(UCBLayout, "UCBLayout", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\UCBLayout.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\UCBLayout.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();