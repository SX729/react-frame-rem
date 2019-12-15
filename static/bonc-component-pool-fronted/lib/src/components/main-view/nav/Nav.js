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

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Nav.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SubMenu = _menu.default.SubMenu;

var Nav =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Nav, _Component);

  function Nav(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Nav);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Nav).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (_ref) {
      var key = _ref.key;

      _this.setState({
        current: key
      });

      var oldPath = _this.props.location.pathname;

      if (oldPath !== key) {
        _this.props.history.push(key);
      }
    });
    _this.state = {
      current: ''
    };
    return _this;
  }

  (0, _createClass2.default)(Nav, [{
    key: "fixCurrent",
    // 修复刷新后显示异常的bug
    value: function fixCurrent() {
      var currentPath = this.props.location.pathname;
      this.setState({
        current: currentPath
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixCurrent();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          menus = _this$props.menus,
          mode = _this$props.mode;

      var renderMenuItem = function renderMenuItem(menu) {
        if (menu && menu.subMenus && menu.subMenus.length > 0) {
          return _react.default.createElement(SubMenu, {
            key: menu.href,
            ssss: menu.id,
            title: _react.default.createElement("span", null, _react.default.createElement("span", {
              className: "fa fa-".concat('flag', " font-icon")
            }), _react.default.createElement("span", {
              className: "title-text"
            }, menu.title))
          }, menu.subMenus.map(function (m) {
            return renderMenuItem(m);
          }));
        } else {
          return _react.default.createElement(_menu.default.Item, {
            key: menu.href
          }, _react.default.createElement("span", {
            className: "fa fa-".concat(menu.icon, " font-icon")
          }), _react.default.createElement("span", {
            className: "title-text"
          }, menu.title));
        }
      };

      return _react.default.createElement(_menu.default, {
        className: "bonc-mung-sider-nav",
        theme: "dark",
        mode: mode,
        onClick: this.handleClick,
        selectedKeys: [this.state.current]
      }, menus.map(function (menu) {
        return renderMenuItem(menu);
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
  return Nav;
}(_react.Component);

Nav.propTypes = {
  mode: _propTypes.default.string,
  menus: _propTypes.default.array
};

var _default = (0, _reactRouterDom.withRouter)(Nav);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubMenu, "SubMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\nav\\Nav.jsx");
  reactHotLoader.register(Nav, "Nav", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\nav\\Nav.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\nav\\Nav.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();