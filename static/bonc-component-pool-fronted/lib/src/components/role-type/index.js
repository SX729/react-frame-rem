"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/breadcrumb/style");

var _breadcrumb = _interopRequireDefault(require("antd/es/breadcrumb"));

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("../page"));

require("./index.less");

var _services = require("./services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var GroupType =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(GroupType, _React$Component);

  function GroupType(props) {
    var _this;

    (0, _classCallCheck2.default)(this, GroupType);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GroupType).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (pagination, filters, sorter) {
      _this.fetchGroupTypeList(pagination.current, {});
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showModal", function (e, editable) {
      _this.setState({
        visible: true,
        editable: editable,
        add: false
      });

      _this.props.form.resetFields();

      _this.props.form.setFieldsValue(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function (e) {
      _this.setState({
        visible: false,
        add: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAddModal", function (e, editable) {
      _this.setState({
        visible: true,
        editable: editable,
        add: true
      });

      _this.props.form.resetFields();

      _this.props.form.setFieldsValue(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          if (values.id) {
            (0, _services.updateGroupType)(values).then(function (res) {
              _this.setState({
                visible: false
              });

              _this.findGroupTypeByName(true);
            });
          } else {
            (0, _services.addGroupType)(values).then(function (res) {
              _this.setState({
                visible: false
              });

              _this.findGroupTypeByName(true);
            });
          }
        }
      });
    });
    _this.state = {
      data: [],
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      visible: false,
      editable: false,
      add: false
    };
    return _this;
  }

  (0, _createClass2.default)(GroupType, [{
    key: "fetchGroupTypeList",
    value: function fetchGroupTypeList(pageNum) {
      var _this2 = this;

      var name = this.props.form.getFieldValue('s_name');
      (0, _services.findGroupTypeList)(pageNum, {
        name: name
      }).then(function (res) {
        _this2.setState({
          data: res.data.list,
          pagination: {
            total: res.data.total
          }
        });
      });
    }
  }, {
    key: "findGroupTypeByName",
    value: function findGroupTypeByName(reset) {
      if (reset) {
        this.props.form.resetFields();
      }

      var pager = _objectSpread({}, this.state.pagination);

      pager.current = 1;
      this.setState({
        pagination: pager
      });
      this.fetchGroupTypeList(pager.current);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.findGroupTypeByName(true);
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(key) {
      var _this3 = this;

      (0, _services.deleteGroupType)(key).then(function (res) {
        _this3.findGroupTypeByName(true);
      });
    }
  }, {
    key: "checkCode",
    value: function checkCode(rule, value, callback) {
      if (value) {
        (0, _services.checkGroupTypeCode)(value).then(function (res) {
          if (res.data !== 0) {
            var msg = '编码已经存在';
            callback(msg);
          } else {
            callback();
          }
        });
      } else {
        callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var ColProps = {
        xs: 24,
        sm: 12,
        style: {
          marginBottom: 16
        }
      };
      var getFieldDecorator = this.props.form.getFieldDecorator;
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
      var columns = [{
        title: '编码',
        dataIndex: 'code',
        key: 'code'
      }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '操作',
        key: 'action',
        align: 'center',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: _this4.showModal.bind(_this4, record, false)
          }, _react.default.createElement(_icon.default, {
            type: "eye"
          }), "\u67E5\u770B"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: _this4.showModal.bind(_this4, record, true)
          }, _react.default.createElement(_icon.default, {
            type: "edit"
          }), "\u7F16\u8F91"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this4.handleDelete(record.id);
            }
          }, _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "close"
          }), "\u5220\u9664")));
        }
      }];
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, _react.default.createElement("a", {
        href: ""
      }, "\u89D2\u8272\u7EC4\u7C7B\u578B\u7BA1\u7406"))), _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_row.default, {
        gutter: 24
      }, _react.default.createElement(_col.default, (0, _extends2.default)({}, ColProps, {
        xl: {
          span: 4
        },
        md: {
          span: 8
        }
      }), getFieldDecorator('s_name', {})(_react.default.createElement(_input.default.Search, {
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u5B57"
      }))), _react.default.createElement(_col.default, null, _react.default.createElement(_row.default, {
        type: "flex",
        align: "middle",
        justify: "space-between"
      }, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.findGroupTypeByName.bind(this, false)
      }, "\u641C\u7D22"), _react.default.createElement(_button.default, {
        onClick: this.findGroupTypeByName.bind(this, true)
      }, "\u91CD\u7F6E")), _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.showAddModal.bind(this, {
          id: null,
          sex: '1'
        }, true)
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))))), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: columns,
        dataSource: this.state.data,
        onChange: this.handleChange,
        pagination: this.state.pagination
      })), _react.default.createElement(_modal.default, {
        title: "\u89D2\u8272\u7EC4\u7C7B\u578B",
        visible: this.state.visible,
        onCancel: this.handleCancel,
        footer: null
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "ID"
      }, getFieldDecorator('id', {})(_react.default.createElement(_input.default, null)))), this.state.add ? _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        rules: [{
          required: true,
          message: '请输入编码!',
          whitespace: true
        }, {
          validator: this.checkCode.bind(this)
        }]
      })(_react.default.createElement(_input.default, null))) : _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        rules: [{
          required: true,
          message: '',
          whitespace: true
        }, {}]
      })(_react.default.createElement(_input.default, {
        disabled: true
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('sort', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, {
        disabled: !this.state.editable
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7C7B\u578B\u540D\u79F0"
      }, formItemLayout), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: '请输入类型名称!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, {
        disabled: !this.state.editable
      }))), _react.default.createElement(_form.default.Item, {
        wrapperCol: {
          span: 24
        }
      }, _react.default.createElement("div", {
        style: {
          float: 'right',
          marginRight: '25px'
        }
      }, _react.default.createElement(_button.default, {
        onClick: this.handleCancel,
        style: {
          width: '120px'
        }
      }, "\u53D6\u6D88"), this.state.editable === true ? _react.default.createElement("span", null, _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          width: '120px'
        }
      }, "\u4FDD\u5B58"), " ") : null))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return GroupType;
}(_react.default.Component);

var _default = _form.default.create()(GroupType);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GroupType, "GroupType", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();