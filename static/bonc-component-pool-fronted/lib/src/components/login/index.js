"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _login = require("../../services/login");

var _utils = require("../../utils");

var _index = _interopRequireDefault(require("../../config/index"));

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LoginPage, _React$Component);

  function LoginPage(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LoginPage);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoginPage).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleUserName", function (e) {
      _this.setState({
        userName: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePassword", function (e) {
      _this.setState({
        password: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleLogin", function () {
      (0, _login.login)({
        username: _this.state.userName,
        password: _this.state.password
      }).then(function (response) {
        _utils.Storage.setAuthorizationToken(response.data.token);

        _utils.Storage.setUserInfo(response.data.userInfo);

        _this.props.history.push('/');
      }).catch(function (error) {
        console.log(error);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleEnter", function (e) {
      if (e.keyCode === 13) {
        if (_this.state.password !== '' && _this.state.userName !== '') {
          _this.handleLogin();
        } else {
          _message2.default.warning('请输入用户名或密码');
        }
      }
    });
    _this.state = {
      userName: '',
      password: ''
    };
    return _this;
  }

  (0, _createClass2.default)(LoginPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _utils.Storage.logout();
    } // 用户名

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var disabled = this.state.password === '' || this.state.userName === '';
      return _react.default.createElement("div", {
        className: "sign-in"
      }, _react.default.createElement("div", {
        className: "sign-in-container"
      }, _react.default.createElement("h1", {
        className: "title"
      }, _index.default.applicationName), _react.default.createElement("div", {
        className: "user-name"
      }, _react.default.createElement(_input.default, {
        onKeyUp: function onKeyUp(e) {
          return _this2.handleEnter(e);
        },
        onChange: function onChange(e) {
          return _this2.handleUserName(e);
        },
        className: "user-input",
        type: "user",
        placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
      })), _react.default.createElement("div", {
        className: "user-name"
      }, _react.default.createElement(_input.default, {
        onKeyUp: function onKeyUp(e) {
          return _this2.handleEnter(e);
        },
        onChange: function onChange(e) {
          return _this2.handlePassword(e);
        },
        className: "user-input",
        type: "password",
        placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
      })), _react.default.createElement("div", {
        className: "login-btn-border"
      }, _react.default.createElement(_button.default, {
        disabled: disabled,
        onClick: function onClick() {
          return _this2.handleLogin();
        },
        className: "login-btn",
        type: "primary"
      }, "\u767B\u5F55"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return LoginPage;
}(_react.default.Component);

var _default = LoginPage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginPage, "LoginPage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\login\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\login\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();