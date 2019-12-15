"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("../../config"));

var _jqueryVendor = _interopRequireDefault(require("../../config/jquery-vendor"));

require("./SelectIcon.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SelectIcon =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SelectIcon, _React$Component);

  function SelectIcon(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, SelectIcon);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectIcon).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "componentDidMount", function () {
      //hide photo selecter when lose foucs
      var _this = (0, _assertThisInitialized2.default)(_this2);

      (0, _jqueryVendor.default)('body').click(function (e) {
        if (_this.state.visible) {
          _this.setState({
            visible: false
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "clickHandle", function () {
      _this2.setState({
        visible: !_this2.state.visible
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "handleSelect", function (iconName) {
      _this2.setState({
        selectedIcon: iconName
      });

      _this2.props.handleSelect(iconName);
    });
    _this2.state = {
      visible: false,
      selectedIcon: props.selectedIcon,
      icons: _config.default.icons
    };
    return _this2;
  }

  (0, _createClass2.default)(SelectIcon, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_row.default, {
        className: "select-icon-container"
      }, _react.default.createElement(_col.default, {
        span: 16,
        className: ""
      }, _react.default.createElement("div", {
        className: "selected-icon"
      }, _react.default.createElement("span", {
        className: "fa fa-".concat(this.state.selectedIcon, " fa-2x")
      }))), _react.default.createElement(_col.default, {
        span: 8,
        className: "arrow-icon",
        onClick: this.clickHandle
      }, _react.default.createElement(_icon.default, {
        type: "caret-down"
      })), _react.default.createElement("div", {
        className: "pop-icons",
        style: {
          display: this.state.visible ? '' : 'none'
        }
      }, this.state.icons.map(function (item, index) {
        return _react.default.createElement("span", {
          className: "fa fa-".concat(item, " fontIcon fa-2x"),
          key: index,
          onClick: function onClick() {
            _this3.handleSelect(item);
          }
        });
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return SelectIcon;
}(_react.default.Component);

var _default = SelectIcon;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectIcon, "SelectIcon", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\SelectIcon.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\SelectIcon.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();