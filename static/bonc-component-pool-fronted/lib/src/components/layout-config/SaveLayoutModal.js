"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireDefault(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TextArea = _input.default.TextArea;

var NewLayoutPageForm_ =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NewLayoutPageForm_, _React$Component);

  function NewLayoutPageForm_(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NewLayoutPageForm_);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewLayoutPageForm_).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(NewLayoutPageForm_, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          span: 3,
          offset: 2
        },
        wrapperCol: {
          span: 16
        }
      };
      return _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit,
        style: {
          margin: '30px auto'
        }
      }, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u9875\u9762\u540D\u79F0"
      }, formItemLayout), getFieldDecorator('pageName', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入页面名称'
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u6240\u5C5E\u9875\u9762"
      }, formItemLayout), getFieldDecorator('belongPage', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请选择所属页面'
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u9009\u62E9\u6240\u5C5E\u9875\u9762"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u9875\u9762\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('pageDesc', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请选择组件类别!'
        }]
      })(_react.default.createElement(TextArea, {
        placeholder: "\u8BF7\u8F93\u5165\u9875\u9762\u63CF\u8FF0"
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
  return NewLayoutPageForm_;
}(_react.default.Component);

var NewLayoutPageForm = _form.default.create({
  name: 'NewLayoutPage'
})(NewLayoutPageForm_);

var NewLayoutPage =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(NewLayoutPage, _React$Component2);

  function NewLayoutPage(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, NewLayoutPage);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewLayoutPage).call(this, props));
    _this2.state = {};
    return _this2;
  }

  (0, _createClass2.default)(NewLayoutPage, [{
    key: "handleOk",
    value: function handleOk() {
      var thiz = this;
      thiz.refs.NewLayoutPageForm.validateFields(function (err, values) {
        if (!err) {
          thiz.props.handleOk(values);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_modal.default, {
        maskClosable: false,
        title: "\u4FDD\u5B58\u9875\u9762",
        className: "modal-save",
        visible: this.props.saveLayoutModalVisible,
        onOk: function onOk() {
          return _this3.handleOk();
        },
        onCancel: function onCancel() {
          return _this3.props.toggleVisible(false);
        }
      }, _react.default.createElement(NewLayoutPageForm, (0, _extends2.default)({}, this.props, {
        ref: "NewLayoutPageForm"
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
  return NewLayoutPage;
}(_react.default.Component);

exports.default = NewLayoutPage;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\SaveLayoutModal.jsx");
  reactHotLoader.register(NewLayoutPageForm_, "NewLayoutPageForm_", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\SaveLayoutModal.jsx");
  reactHotLoader.register(NewLayoutPageForm, "NewLayoutPageForm", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\SaveLayoutModal.jsx");
  reactHotLoader.register(NewLayoutPage, "NewLayoutPage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\SaveLayoutModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();