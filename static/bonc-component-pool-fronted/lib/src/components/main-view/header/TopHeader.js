"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/avatar/style");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../../../config/index"));

var loginServices = _interopRequireWildcard(require("../../../services/login"));

var _Nav = _interopRequireDefault(require("../nav/Nav"));

var _utils = require("../../../utils");

require("./TopHeader.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SubMenu = _menu.default.SubMenu;

var TopHeader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TopHeader, _Component);

  function TopHeader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TopHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TopHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (_ref) {
      var key = _ref.key;

      if (key === 'user-pwd') {
        _this.props.history.push('/jzc/changePassword');
      } else {
        _this.logout();

        _this.props.history.push('/login');
      }
    });
    return _this;
  }

  (0, _createClass2.default)(TopHeader, [{
    key: "logout",
    // 登出
    value: function logout() {
      loginServices.logout();
    }
  }, {
    key: "render",
    value: function render() {
      var menus = this.props.menus;
      return _react.default.createElement(_layout.default.Header, {
        id: "layoutHeader",
        className: (0, _classnames.default)('bonc-mung-layout-top-header')
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 4
      }, _react.default.createElement("div", {
        className: "bonc-mung-sider-logo"
      }, _react.default.createElement("img", {
        alt: "logo",
        src: require('assets/images/logo.svg')
      }), _react.default.createElement("span", null, _index.default.applicationName))), _react.default.createElement(_col.default, {
        span: 14
      }, _react.default.createElement(_Nav.default, {
        menus: menus,
        mode: "horizontal"
      })), _react.default.createElement(_col.default, {
        span: 6
      }, _react.default.createElement("div", {
        className: "menu-header-btn-container"
      }, _react.default.createElement("div", {
        className: "menu-header-btn"
      }, _react.default.createElement(_icon.default, {
        type: "question-circle"
      })), _react.default.createElement(_menu.default, {
        key: "user",
        mode: "horizontal",
        className: "menu-header-btn",
        onClick: this.handleClick,
        selectable: false
      }, _react.default.createElement(SubMenu, {
        title: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
          style: {
            marginRight: 4
          }
        }, "\u4F60\u597D,"), _react.default.createElement("span", {
          style: {
            marginRight: 8
          }
        }, _utils.Storage.getUserName()), _react.default.createElement(_avatar.default, {
          icon: "user",
          style: {
            marginRight: 8
          }
        }))
      }, _react.default.createElement(_menu.default.Item, {
        key: "user-center"
      }, _react.default.createElement(_icon.default, {
        type: "user"
      }), "\u4E2A\u4EBA\u4E2D\u5FC3"), _react.default.createElement(_menu.default.Item, {
        key: "user-pwd"
      }, _react.default.createElement(_icon.default, {
        type: "setting"
      }), "\u4FEE\u6539\u5BC6\u7801"), _react.default.createElement(_menu.default.Divider, null), _react.default.createElement(_menu.default.Item, {
        key: "user-out"
      }, _react.default.createElement(_icon.default, {
        type: "logout"
      }), "\u9000\u51FA")))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TopHeader;
}(_react.Component);

TopHeader.propTypes = {
  menus: _propTypes.default.array,
  collapsed: _propTypes.default.bool,
  onCollapseChange: _propTypes.default.func
};

var _default = (0, _reactRouterDom.withRouter)(TopHeader);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubMenu, "SubMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\TopHeader.jsx");
  reactHotLoader.register(TopHeader, "TopHeader", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\TopHeader.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\TopHeader.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();