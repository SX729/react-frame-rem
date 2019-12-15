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

var _sider = _interopRequireDefault(require("../../components/main-view/sider"));

var _Header = _interopRequireDefault(require("../../components/main-view/header/Header"));

var _services = require("./services");

require("./PrimaryLayout.less");

var _config = _interopRequireDefault(require("@config"));

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
}; // const menus1 = [{
//   icon: 'user',
//   title: '系统管理',
//   subMenus: [
//     {
//       icon: 'user',
//       title: '用户管理',
//       href: '/user'
//     }, {
//       icon: 'user',
//       title: '角色组管理',
//       href: '/group'
//     }, {
//       icon: 'user',
//       title: '角色类型管理',
//       href: '/groupType'
//     }, {
//       icon: 'user',
//       title: '资源管理',
//       href: '/sourceType'
//     }
//   ]
// }, {
//   icon: 'user',
//   title: '约束说明',
//   href: '/'
// }, {
//   icon: 'user',
//   title: 'Dashboard',
//   href: '/example/dashboard'
// }, {
//   icon: 'user',
//   title: '记数器',
//   href: '/example/counter'
// }]


var PrimaryLayout =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PrimaryLayout, _PureComponent);

  function PrimaryLayout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PrimaryLayout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PrimaryLayout).call(this, props));
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

  (0, _createClass2.default)(PrimaryLayout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _services.findMenuTreeList)({
        classify: _config.default.SIDE_CLASSIFY
      }).then(function (menus) {
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
      var _this$props = this.props,
          collapsed = _this$props.collapsed,
          childRoutes = _this$props.childRoutes;
      var menus = this.state.menus;
      var siderProps = {
        collapsed: collapsed,
        onCollapseChange: onCollapseChange,
        menus: menus
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_layout.default, {
        className: "bonc-mung-layout"
      }, _react.default.createElement(_sider.default, siderProps), _react.default.createElement(_layout.default, {
        className: "bonc-mung-layout-main"
      }, _react.default.createElement(_Header.default, {
        collapsed: collapsed,
        onCollapseChange: onCollapseChange
      }), _react.default.createElement(Content, {
        className: "bonc-mung-layout-content"
      }, (0, _reactRouterConfig.renderRoutes)(childRoutes)), _react.default.createElement(Footer, {
        style: {
          textAlign: 'center'
        }
      }, "Copyright \xA92019 \u5317\u4EAC\u4E1C\u65B9\u56FD\u4FE1\u79D1\u6280\u6709\u9650\u516C\u53F8"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return PrimaryLayout;
}(_react.PureComponent);

var _default = (0, _root.hot)((0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(PrimaryLayout)));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\PrimaryLayout.jsx");
  reactHotLoader.register(Footer, "Footer", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\PrimaryLayout.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\PrimaryLayout.jsx");
  reactHotLoader.register(PrimaryLayout, "PrimaryLayout", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\PrimaryLayout.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\PrimaryLayout.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();