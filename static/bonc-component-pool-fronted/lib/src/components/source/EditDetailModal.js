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

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

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

var EditDetailForm_ =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EditDetailForm_, _React$Component);

  function EditDetailForm_(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EditDetailForm_);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditDetailForm_).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      _this.props.form.resetFields();

      _this.props.form.setFieldsValue(_this.props.record);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          values.icon = _this.state.selectedIcon;
          (0, _services.updateMenu)(values).then(function (res) {
            if (res.data === 1) {
              // 更新成功 关闭modal 刷新页面
              _this.props.handleOk();

              _this.props.fetchTree({});
            }
          }).catch(function (e) {
            console.log('updateMenu接口异常---', e);
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
      editable: props.editable,
      inputdisable: props.inputdisable,
      selectedIcon: props.record.icon,
      addtype: props.addtype
    };
    return _this;
  }

  (0, _createClass2.default)(EditDetailForm_, [{
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
        onSubmit: this.handleSubmit,
        className: "edit-detail-modal"
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "ID"
      }, getFieldDecorator('id', {})(_react.default.createElement(_input.default, null)))), _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "parentId"
      }, getFieldDecorator('parentId', {})(_react.default.createElement(_input.default, null)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        rules: [{
          required: true,
          message: '请输入资源编码!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, {
        disabled: true
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u540D\u5B57"
      }, formItemLayout), getFieldDecorator('title', {
        rules: [{
          required: true,
          message: '请输入资源名字!'
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.state.inputdisable
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u5206\u7C7B"
      }, formItemLayout), getFieldDecorator('classify', {
        initialValue: 'pc',
        rules: [{
          required: true,
          message: '请输入名字!'
        }]
      })(_react.default.createElement(_select.default, {
        style: {
          width: 120
        }
      }, _react.default.createElement(_select.default.Option, {
        value: "common"
      }, "\u516C\u5171"), _react.default.createElement(_select.default.Option, {
        value: "pc"
      }, "PC\u7AEF"), _react.default.createElement(_select.default.Option, {
        value: "app"
      }, "\u79FB\u52A8\u7AEF")))), this.state.addtype === 'button' ? null : _react.default.createElement(_form.default.Item, (0, _extends2.default)({
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
        },
        selectedIcon: this.state.selectedIcon
      })), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u8D44\u6E90\u7C7B\u578B"
      }, formItemLayout), getFieldDecorator('type', {
        rules: [{
          required: true,
          message: '请选择菜单类型!'
        }]
      })(_react.default.createElement(RadioGroup, {
        disabled: true
      }, this.state.addtype === 'folder' || this.state.addtype === 'menu' ? resourcekeys.map(function (item, index) {
        return _react.default.createElement(_radio.default, {
          value: item,
          key: index
        }, resourceType[item]);
      }) : elementkeys.map(function (item, index) {
        return _react.default.createElement(_radio.default, {
          value: item,
          key: index
        }, resourceType[item]);
      })))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('sort', {
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, {
        disabled: this.state.inputdisable
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('description', {
        rules: [{
          required: false,
          message: ''
        }]
      })(_react.default.createElement(_input.default.TextArea, {
        disabled: this.state.inputdisable
      }))), _react.default.createElement(_form.default.Item, null, _react.default.createElement(_button.default, {
        onClick: this.props.handleCancel
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), this.state.editable === true ? _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit"
      }, "\u4FDD\u5B58") : null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return EditDetailForm_;
}(_react.default.Component);

var EditDetailForm = _form.default.create({
  name: 'EditDetailForm'
})(EditDetailForm_);

var EditDetailModal =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(EditDetailModal, _React$Component2);

  function EditDetailModal(props) {
    var _this3;

    (0, _classCallCheck2.default)(this, EditDetailModal);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditDetailModal).call(this, props));
    _this3.state = {};
    return _this3;
  }

  (0, _createClass2.default)(EditDetailModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_modal.default, {
        title: this.props.title,
        visible: this.props.visible,
        onCancel: this.props.handleCancel,
        footer: null
      }, _react.default.createElement(EditDetailForm, (0, _extends2.default)({}, this.props, {
        ref: "EditDetailForm"
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
  return EditDetailModal;
}(_react.default.Component);

exports.default = EditDetailModal;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditDetailForm_, "EditDetailForm_", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\EditDetailModal.jsx");
  reactHotLoader.register(EditDetailForm, "EditDetailForm", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\EditDetailModal.jsx");
  reactHotLoader.register(EditDetailModal, "EditDetailModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\EditDetailModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();