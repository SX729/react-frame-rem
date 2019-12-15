"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _services = require("./services");

var _config = _interopRequireDefault(require("../../config"));

var _SelectIcon = _interopRequireDefault(require("./SelectIcon"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CreateElementForm_ =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CreateElementForm_, _React$Component);

  function CreateElementForm_(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CreateElementForm_);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CreateElementForm_).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleElementSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          values.icon = _this.state.selectedIcon;
          var params = values;
          params.parentId = _this.props.parentId;
          (0, _services.addMenu)(params).then(function (res) {
            if (res.data === 1) {
              // 增加成功 关闭modal 刷新页面
              _this.props.handleOk();

              _this.props.fetchTree({});
            }
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSelect", function (iconName) {
      _this.setState({
        selectedIcon: iconName
      });
    });
    _this.state = {
      addtype: props.addtype,
      inputdisable: props.inputdisable,
      selectedIcon: ''
    };
    return _this;
  }

  (0, _createClass2.default)(CreateElementForm_, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var RadioGroup = _radio.default.Group;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 5
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      var resourceType = _config.default.resourceType;
      var resourcekeys = ['folder', 'menu'];
      var elementkeys = ['button'];
      return _react.default.createElement(_form.default, {
        onSubmit: this.handleElementSubmit,
        className: "create-element-modal"
      }, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入编码!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u540D\u5B57"
      }, formItemLayout), getFieldDecorator('title', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入名字!'
        }]
      })(_react.default.createElement(_input.default, null))), this.state.addtype === 'button' ? null : _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "URL"
      }, formItemLayout), getFieldDecorator('href', {
        rules: [{
          required: false,
          message: ''
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.state.inputdisable
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u56FE\u6807"
      }, formItemLayout), _react.default.createElement(_SelectIcon.default, {
        handleSelect: function handleSelect(iconName) {
          _this2.handleSelect(iconName);
        }
      })), this.state.addtype === 'folder' ? _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u7C7B\u578B"
      }, formItemLayout), getFieldDecorator('type', {
        initialValue: 'folder',
        rules: [{
          required: true,
          message: '请选择资源类型!'
        }]
      })(_react.default.createElement(RadioGroup, null, resourcekeys.map(function (item, index) {
        return _react.default.createElement(_radio.default, {
          value: item,
          key: index
        }, resourceType[item]);
      })))) : _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u7C7B\u578B"
      }, formItemLayout), getFieldDecorator('type', {
        initialValue: 'button',
        rules: [{
          required: true,
          message: '请选择资源类型!'
        }]
      })(_react.default.createElement(RadioGroup, null, elementkeys.map(function (item, index) {
        return _react.default.createElement(_radio.default, {
          value: item,
          key: index
        }, resourceType[item]);
      })))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('sort', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('description', {
        initialValue: '',
        rules: [{
          required: false,
          message: ''
        }]
      })(_react.default.createElement(_input.default.TextArea, null))), _react.default.createElement(_form.default.Item, null, _react.default.createElement(_button.default, {
        onClick: this.props.handleCancel
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit"
      }, "\u4FDD\u5B58")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return CreateElementForm_;
}(_react.default.Component);

var CreateElementForm = _form.default.create({
  name: 'CreateElementForm'
})(CreateElementForm_);

var CreateListModal =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(CreateListModal, _React$Component2);

  function CreateListModal(props) {
    var _this3;

    (0, _classCallCheck2.default)(this, CreateListModal);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CreateListModal).call(this, props));
    _this3.state = {};
    return _this3;
  }

  (0, _createClass2.default)(CreateListModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_modal.default, {
        title: "\u65B0\u5EFA\u83DC\u5355",
        visible: this.props.visible,
        onCancel: this.props.handleCancel,
        footer: null
      }, _react.default.createElement(CreateElementForm, (0, _extends2.default)({}, this.props, {
        ref: "CreateElementForm"
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
  return CreateListModal;
}(_react.default.Component);

exports.default = CreateListModal;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateElementForm_, "CreateElementForm_", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\CreateElementModal.jsx");
  reactHotLoader.register(CreateElementForm, "CreateElementForm", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\CreateElementModal.jsx");
  reactHotLoader.register(CreateListModal, "CreateListModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\CreateElementModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();