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

var _LayoutView = _interopRequireDefault(require("./LayoutView"));

var _Services = require("./Services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var NewLayoutPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NewLayoutPage, _React$Component);

  function NewLayoutPage(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NewLayoutPage);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewLayoutPage).call(this, props));
    _this.state = {
      layoutConfig: {}
    };
    return _this;
  }

  (0, _createClass2.default)(NewLayoutPage, [{
    key: "getPageData",
    value: function getPageData(id) {
      var _this2 = this;

      (0, _Services.getPageData)({
        id: id
      }, function (res) {
        _this2.setState({
          layoutConfig: JSON.parse(res.pageContext)
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPageData('ac5cd5c5cf2543c4bff34faaf724c8a5');
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.id !== nextProps.id) {
        this.getPageData('ac5cd5c5cf2543c4bff34faaf724c8a5');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_LayoutView.default, {
        ref: "layoutView",
        layoutConfig: this.state.layoutConfig
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return NewLayoutPage;
}(_react.default.Component);

exports.default = NewLayoutPage;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewLayoutPage, "NewLayoutPage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutManage.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();