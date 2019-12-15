"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _react = _interopRequireWildcard(require("react"));

var _services = require("./services");

require("./index.less");

var _utils = require("../../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChangePassword =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ChangePassword, _Component);

  function ChangePassword(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ChangePassword);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChangePassword).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChangePassword", function () {
      _this.props.form.validateFields(function (err, values) {
        var params = {
          oldPassword: encodeURIComponent(_utils.AesEncrypt.encrypt(values.oldPassword)),
          newPassword: encodeURIComponent(_utils.AesEncrypt.encrypt(values.newPassword))
        };
        (0, _services.changePassword)(params).then(function (res) {
          _message2.default.success('修改成功!');
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleConfirmPassword", function (rule, value, callback) {
      var getFieldValue = _this.props.form.getFieldValue;
      var tip = '两次输入不一致！';

      if (value && value !== getFieldValue('newPassword')) {
        callback(tip);
      }

      callback();
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(ChangePassword, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 10
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 4
          }
        }
      };
      return _react.default.createElement("div", {
        className: "change-password-container"
      }, _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u65E7\u5BC6\u7801"
      }, formItemLayout), getFieldDecorator('oldPassword', {})(_react.default.createElement(_input.default.Password, {
        placeholder: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u65B0\u5BC6\u7801"
      }, formItemLayout), getFieldDecorator('newPassword', {})(_react.default.createElement(_input.default.Password, {
        placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u518D\u6B21\u786E\u8BA4\u65B0\u5BC6\u7801"
      }, formItemLayout), getFieldDecorator('newPasswordAgain', {
        rules: [{
          validator: this.handleConfirmPassword
        }]
      })(_react.default.createElement(_input.default.Password, {
        placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801"
      })))), _react.default.createElement(_row.default, {
        className: "button-block"
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.handleChangePassword
      }, "\u786E\u8BA4\u4FEE\u6539")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ChangePassword;
}(_react.Component);

var _default = _form.default.create()(ChangePassword);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChangePassword, "ChangePassword", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\change-pwd\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\change-pwd\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();