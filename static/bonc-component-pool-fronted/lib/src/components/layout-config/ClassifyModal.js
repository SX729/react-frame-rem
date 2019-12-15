"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

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

var _Services = require("./Services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ClassifyModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ClassifyModal, _Component);

  function ClassifyModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ClassifyModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ClassifyModal).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function () {
      var thiz = (0, _assertThisInitialized2.default)(_this);
      var type = thiz.props.type; // 校验参数

      thiz.props.form.validateFieldsAndScroll(function (errors, value) {
        // 如果校验通过
        if (!errors) {
          if (type === 'new') {
            (0, _Services.addClassify)(_objectSpread({}, value), function (res) {
              _message2.default.success(res);

              thiz.props.handleClose(true);
            });
          } else {
            (0, _Services.editClassify)(_objectSpread({}, value, {
              id: _this.props.data.id
            }), function (res) {
              _message2.default.success(res);

              thiz.props.handleClose(true);
            });
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeModal", function (isRefresh) {
      _this.props.handleClose(isRefresh);
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(ClassifyModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {}
  }, {
    key: "isView",
    value: function isView() {
      return this.props.type === 'view';
    }
    /**
     * 事件-提交
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      if (this.props.type === 'new') {
        return '创建组件分类';
      } else if (this.props.type === 'edit') {
        return '编辑组件分类';
      }
    }
  }, {
    key: "isNew",
    value: function isNew() {
      var type = this.props.type;
      return type === 'new';
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this2 = this;

      var arr = [];

      if (!this.isView()) {
        arr.push(_react.default.createElement(_button.default, {
          key: "submit",
          type: "primary",
          onClick: function onClick() {
            _this2.onSubmit();
          }
        }, "\u63D0\u4EA4"));
      }

      arr.push(_react.default.createElement(_button.default, {
        key: "close",
        type: "danger",
        onClick: function onClick() {
          _this2.closeModal(false);
        }
      }, "\u5173\u95ED"));
      return arr;
    }
  }, {
    key: "initItem",
    value: function initItem(key) {
      var data = this.props.data;
      return this.isNew() ? '' : data[key] || '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$props = this.props,
          visible = _this$props.visible,
          data = _this$props.data; // FormItem的样式-响应式布局

      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        }
      };
      return _react.default.createElement(_modal.default, {
        visible: visible,
        maskClosable: false,
        width: 800,
        title: this.getTitle(),
        onCancel: function onCancel() {
          _this3.props.handleClose(false);
        },
        footer: this.renderFooter()
      }, _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5206\u7C7B\u540D\u79F0"
      }, formItemLayout), getFieldDecorator('title', {
        initialValue: this.isNew() ? '' : data['title'] || '',
        rules: [{
          required: !this.isView(),
          message: '请输入分类名称'
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.isView(),
        placeholder: "\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5206\u7C7B\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        initialValue: this.isNew() ? '' : data['code'] || '',
        rules: [{
          required: !this.isView(),
          message: '请输入分类编码'
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.isView(),
        placeholder: "\u8BF7\u8F93\u5165\u5206\u7C7B\u7F16\u7801"
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ClassifyModal;
}(_react.Component);

var _default = _form.default.create()(ClassifyModal);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClassifyModal, "ClassifyModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\ClassifyModal.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\ClassifyModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();