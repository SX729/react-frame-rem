"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

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

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _services = require("./services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var FormItem = _form.default.Item;

var NoticeModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NoticeModal, _Component);

  function NoticeModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NoticeModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NoticeModal).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function () {
      var thiz = (0, _assertThisInitialized2.default)(_this);
      var type = thiz.props.type; // 校验参数

      thiz.props.form.validateFieldsAndScroll(function (errors, value) {
        value.type = 'noticeMessage'; // 如果校验通过

        if (!errors) {
          if (type === 'new') {
            (0, _services.addMsg)(value, function (res) {
              thiz.closeModal(true);

              _message2.default.success(res);
            });
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeModal", function (isRefresh) {
      _this.props.form.resetFields();

      _this.props.handleClose(isRefresh);
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(NoticeModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isView()) {
        this.props.form.resetFields();
        this.props.form.setFieldsValue(this.props.selectedRecord);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedRecord !== nextProps.selectedRecord) {
        if (this.isView()) {
          this.props.form.resetFields();
          this.props.form.setFieldsValue(nextProps.selectedRecord);
        }
      }
    }
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
        return '创建通知';
      } else if (this.props.type === 'edit') {
        return '编辑通知';
      } else {
        return '查看通知';
      }
    }
  }, {
    key: "isNew",
    value: function isNew() {
      var type = this.props.type;
      return type === 'new';
    }
  }, {
    key: "initItem",
    value: function initItem(key) {
      var selectedRecord = this.props.selectedRecord;
      return this.isNew() ? '' : selectedRecord[key];
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
        }, "\u53D1\u5E03"));
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
    key: "initTipMsg",
    value: function initTipMsg(attrName) {
      return !this.isView() ? '请输入' + attrName : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var visible = this.props.visible; // FormItem的样式-响应式布局

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
      }, _react.default.createElement(_form.default, null, _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u901A\u77E5\u6807\u9898"
      }, formItemLayout), getFieldDecorator('title', {
        initialValue: this.initItem('title'),
        rules: [{
          required: !this.isView(),
          message: '请输入通知标题'
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.isView(),
        placeholder: this.initTipMsg('通知标题')
      }))), _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u901A\u77E5\u5185\u5BB9"
      }, formItemLayout), getFieldDecorator('content', {
        initialValue: this.initItem('content'),
        rules: [{
          required: !this.isView(),
          message: '请输入通知内容'
        }]
      })(_react.default.createElement(_input.default.TextArea, {
        disabled: this.isView(),
        placeholder: this.initTipMsg('通知内容')
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
  return NoticeModal;
}(_react.Component);

var _default = _form.default.create()(NoticeModal);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, "FormItem", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\NoticeModal.jsx");
  reactHotLoader.register(NoticeModal, "NoticeModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\NoticeModal.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\NoticeModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();