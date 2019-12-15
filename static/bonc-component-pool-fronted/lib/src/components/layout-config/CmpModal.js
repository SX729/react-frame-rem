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

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/upload/style");

var _upload = _interopRequireDefault(require("antd/es/upload"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("@config"));

var _Services = require("./Services");

var _wangeditor = _interopRequireDefault(require("wangeditor"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CmpOption =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CmpOption, _React$Component);
  (0, _createClass2.default)(CmpOption, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          config: nextProps.value.config || '',
          configHtml: nextProps.value.configHtml || ''
        };
      }

      return null;
    }
  }]);

  function CmpOption(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CmpOption);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CmpOption).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerChange", function (changedValue) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(Object.assign({}, _this.state, changedValue));
      }
    });
    var value = props.value || {};
    _this.state = {
      config: value.config || '',
      configHtml: value.configHtml || ''
    };
    _this.cmpEditor = null;
    return _this;
  }

  (0, _createClass2.default)(CmpOption, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var E = _wangeditor.default;
      var editor = this.cmpEditor = new E('#cmpConfigEditor');
      var thiz = this;
      editor.customConfig = {
        menus: [],
        onchange: function onchange(html) {
          console.log('llllllllllllllllllllllll');
          console.log(editor.txt.text());
          thiz.triggerChange({
            configHtml: html,
            // eslint-disable-next-line no-eval
            config: eval('(' + editor.txt.text().replace(/&nbsp;/g, '') + ')')
          });
        }
      };
      editor.create();
      editor.txt.html(this.state.configHtml);
    }
  }, {
    key: "isView",
    value: function isView() {
      return this.props.type === 'view';
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "cmpConfigEditor"
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
  return CmpOption;
}(_react.default.Component);

var ImgLogo =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(ImgLogo, _React$Component2);
  (0, _createClass2.default)(ImgLogo, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          fileList: nextProps.value.imgUrls || []
        };
      }

      return null;
    }
  }]);

  function ImgLogo(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, ImgLogo);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ImgLogo).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "triggerChange", function (changedValue) {
      var onChange = _this2.props.onChange;

      if (onChange) {
        onChange(Object.assign({}, _this2.state, changedValue));
      }
    });
    var value = props.value || {};
    _this2.state = {
      fileList: value.imgUrls || []
    };
    return _this2;
  }

  (0, _createClass2.default)(ImgLogo, [{
    key: "isView",
    value: function isView() {
      return this.props.type === 'view';
    }
    /**
     *渲染上传图片按钮
     *
     * @returns
     * @memberof _NewCmpsModal
     */

  }, {
    key: "renderUploadButton",
    value: function renderUploadButton() {
      return _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
        type: this.state.loading ? 'loading' : 'plus'
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var propsUpload = {
        name: 'imgLogo',
        listType: 'picture-card',
        action: _config.default.API_BASE_URL + 'pagemanage/uploadImg',
        showUploadList: false,
        onChange: function onChange(info) {
          var fileList = (0, _toConsumableArray2.default)(info.fileList);
          fileList = fileList.slice(-1);
          fileList = fileList.map(function (file) {
            if (file.response) {
              file.url = file.response;
            }

            return file;
          });

          _this3.setState({
            fileList: fileList,
            loading: fileList[0].status !== 'done'
          }, function () {
            _this3.triggerChange({
              imgUrls: fileList
            });
          });
        }
      };
      return _react.default.createElement(_upload.default, (0, _extends2.default)({}, propsUpload, {
        fileList: (0, _toConsumableArray2.default)(this.state.fileList)
      }), this.state.fileList.length > 0 && this.state.fileList[0].url ? _react.default.createElement("img", {
        style: {
          width: 102,
          height: 102
        },
        src: _config.default.FILE_BASE_URL + this.state.fileList[0].url,
        alt: "avatar"
      }) : this.renderUploadButton());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ImgLogo;
}(_react.default.Component);

var _NewCmpsModal =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(_NewCmpsModal, _React$Component3);

  function _NewCmpsModal(props) {
    var _this4;

    (0, _classCallCheck2.default)(this, _NewCmpsModal);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_NewCmpsModal).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "onOk", function () {
      var thiz = (0, _assertThisInitialized2.default)(_this4);
      thiz.props.form.validateFields(function (err, values) {
        values.img = values.img.imgUrls.length > 0 ? values.img.imgUrls[0].url || '' : '';
        values.config.config = JSON.stringify(values.config.config);
        var type = thiz.props.type;

        if (!err) {
          console.log(values);

          if (type === 'new') {
            (0, _Services.registerCmp)(_objectSpread({}, values, {
              classify: _this4.props.classify
            }), function (res) {
              _message2.default.success(res);

              thiz.props.handleClose(true);
            });
          } else {
            (0, _Services.updateCmp)(_objectSpread({}, values, {
              id: _this4.props.data.id,
              classify: _this4.props.classify
            }), function (res) {
              _message2.default.success(res);

              thiz.props.handleClose(true);
            });
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "onCancel", function () {
      _this4.props.handleClose();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "validateImgParameter", function (rule, value, callbackFn) {
      if (!value || value.imgUrls.length === 0) {
        callbackFn('请上传组件图标');
      }

      callbackFn();
    });
    _this4.state = {
      fileList: [],
      imageUrls: _this4.initImageUrls(),
      loading: false
    };
    return _this4;
  }

  (0, _createClass2.default)(_NewCmpsModal, [{
    key: "initImageUrls",
    value: function initImageUrls() {
      var data = this.props.data;

      if (this.isEdit()) {
        return [{
          uid: data.id,
          status: 'done',
          url: data.img
        }];
      }

      return [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.type !== this.props.type) {
        if (nextProps.type === 'edit') {
          this.setState({
            imageUrl: ''
          });
        }
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var type = this.props.type;

      if (type === 'new') {
        return '创建组件';
      } else if (type === 'edit') {
        return '编辑组件';
      }
    }
  }, {
    key: "isNew",
    value: function isNew() {
      var type = this.props.type;
      return type === 'new';
    }
  }, {
    key: "isEdit",
    value: function isEdit() {
      var type = this.props.type;
      return type === 'edit';
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this5 = this;

      var arr = [];
      arr.push(_react.default.createElement(_button.default, {
        key: "submit",
        onClick: this.onOk,
        type: "primary"
      }, "\u63D0\u4EA4"));
      arr.push(_react.default.createElement(_button.default, {
        key: "close",
        type: "danger",
        onClick: function onClick() {
          _this5.onCancel();
        }
      }, "\u5173\u95ED"));
      return arr;
    }
    /**
     * 验证组件图标
     */

  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props = this.props,
          data = _this$props.data,
          form = _this$props.form;
      var getFieldDecorator = form.getFieldDecorator;
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
        visible: this.props.visible,
        width: 800,
        title: this.getTitle(),
        onCancel: function onCancel() {
          _this6.onCancel();
        },
        footer: this.renderFooter()
      }, _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7EC4\u4EF6\u540D\u79F0(\u4E2D\u6587)"
      }, formItemLayout), getFieldDecorator('title', {
        initialValue: this.isEdit() ? data.title : '',
        rules: [{
          required: true,
          message: '请输入组件名称'
        }, {
          max: 30,
          message: '超过最大长度30!'
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u4E2D\u6587\u540D\u79F0"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u524D\u7AEF\u7EC4\u4EF6\u7C7B\u540D"
      }, formItemLayout), getFieldDecorator('component', {
        initialValue: this.isEdit() ? data.component : '',
        rules: [{
          required: true,
          message: '请输入前端组件类名'
        }, {
          max: 30,
          message: '超过最大长度30!'
        }, {
          pattern: new RegExp(/^[A-Za-z0-9]+$/),
          message: '请输入合法的英文名称'
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u524D\u7AEF\u7EC4\u4EF6\u7C7B\u540D"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7EC4\u4EF6\u56FE\u6807"
      }, formItemLayout), getFieldDecorator('img', {
        initialValue: {
          imgUrls: this.state.imageUrls
        },
        rules: [{
          required: true,
          message: '请上传组件图标'
        }, {
          validator: this.validateImgParameter
        }]
      })(_react.default.createElement(ImgLogo, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7EC4\u4EF6\u53C2\u6570"
      }, formItemLayout), getFieldDecorator('config', {
        initialValue: {
          config: this.isEdit() ? data.config.config : '',
          configHtml: this.isEdit() ? data.config.configHtml : ''
        },
        rules: [{
          required: false,
          message: '请输入组件参数'
        }]
      })(_react.default.createElement(CmpOption, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7EC4\u4EF6\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('componentDesc', {
        initialValue: this.isEdit() ? data.componentDesc : '',
        rules: [{
          required: false,
          message: '请输入组件描述'
        }, {
          max: 300,
          message: '超过最大长度300!'
        }]
      })(_react.default.createElement(_input.default.TextArea, {
        rows: 2,
        placeholder: "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u63CF\u8FF0"
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
  return _NewCmpsModal;
}(_react.default.Component);

var _default = _form.default.create()(_NewCmpsModal);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CmpOption, "CmpOption", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\CmpModal.jsx");
  reactHotLoader.register(ImgLogo, "ImgLogo", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\CmpModal.jsx");
  reactHotLoader.register(_NewCmpsModal, "_NewCmpsModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\CmpModal.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\CmpModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();