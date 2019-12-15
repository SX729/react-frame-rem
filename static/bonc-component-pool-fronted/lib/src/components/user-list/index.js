"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

require("antd/es/notification/style");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("../page"));

var _services = require("./services");

var _utils = require("../../utils");

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Option = _select.default.Option;

var UserList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UserList, _React$Component);

  function UserList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserList).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changePage", function (page) {
      var pager = _objectSpread({}, _this.state.pagination);

      pager.current = page;

      _this.setState({
        pagination: pager
      });

      _this.fetchUserList(pager.current);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showModal", function (e, editable) {
      _this.setState({
        visible: true,
        editable: editable
      });

      _this.props.form.resetFields();

      _this.props.form.setFieldsValue(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function (e) {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var data = _this.props.form.getFieldsValue();

          if (data.id) {
            (0, _services.updateUser)(data).then(function (res) {
              _this.setState({
                visible: false
              });

              _this.findUserByName(true);
            });
          } else {
            (0, _services.addUser)(data).then(function (res) {
              _this.setState({
                visible: false
              });

              _this.findUserByName(true);
            });
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (pagination, filters, sorter) {
      _this.fetchUserList(pagination.current, {});
    });
    _this.state = {
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      data: [],
      selectedRowKeys: [],
      role_admin_user_add: false,
      role_admin_user_upd: false,
      role_admin_user_und: false,
      role_admin_user_rpa: false,
      role_admin_user_unm: false,
      role_admin_user_act: false,
      visible: false,
      editable: false
    };
    return _this;
  }

  (0, _createClass2.default)(UserList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.findUserByName(true);

      var permission = _utils.Storage.getUserPermissions('/user');

      if (permission && permission) {
        permission.children.map(function (itme) {
          var o = {};
          o[itme['code'].toLowerCase()] = true;

          _this2.setState(o);
        });
      }
    }
  }, {
    key: "findUserByName",
    value: function findUserByName(reset) {
      if (reset) {
        this.props.form.resetFields();
      }

      var pager = _objectSpread({}, this.state.pagination);

      pager.current = 1;
      this.setState({
        pagination: pager
      });
      this.fetchUserList(pager.current);
    }
  }, {
    key: "fetchUserList",
    value: function fetchUserList(pageNum) {
      var _this3 = this;

      var username = this.props.form.getFieldValue('s_username');
      (0, _services.findUserList)(pageNum, {
        username: username
      }).then(function (res) {
        _this3.setState({
          data: res.data.list,
          pagination: {
            total: res.data.total
          }
        });
      });
    }
  }, {
    key: "showConfirm",
    value: function showConfirm() {
      var confirm = _modal.default.confirm;
      var that = this;
      var selectedRowKeys = this.state.selectedRowKeys;
      var title = selectedRowKeys.length === 1 ? '确认禁用?' : '批量禁用?';
      var content = selectedRowKeys.length === 1 ? '请您确认是否禁用选中用户！' : '请您确认是否批量禁用选中用户！';
      confirm({
        title: title,
        content: content,
        onOk: function onOk() {
          that.handleDeleteAll();
        },
        onCancel: function onCancel() {}
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(key) {
      var _this4 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      selectedRowKeys.map(function (item, index) {
        if (item === key) {
          selectedRowKeys.splice(index, 1);
        }
      });
      (0, _services.deleteUser)(key).then(function (res) {
        _this4.findUserByName(true);

        _this4.setState({
          selectedRowKeys: selectedRowKeys
        });
      });
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(key) {
      var params = {
        id: key
      };
      (0, _services.resetPassword)(params).then(function (res) {
        if (res) {
          _notification2.default['success']({
            message: '密码重置',
            description: '操作成功'
          });
        }
      });
    }
  }, {
    key: "handleActive",
    value: function handleActive(key) {
      var _this5 = this;

      (0, _services.activeUser)(key).then(function (res) {
        _this5.findUserByName(true);
      });
    }
  }, {
    key: "handleDeleteAll",
    value: function handleDeleteAll() {
      var _this6 = this;

      (0, _services.deleteUserMore)(this.state.selectedRowKeys).then(function (res) {
        _this6.setState({
          selectedRowKeys: []
        });

        _this6.findUserByName(true);
      });
    }
  }, {
    key: "onSelectChange",

    /**
     * 行选择事件
     * @param {*} selectedRowKeys
     */
    value: function onSelectChange(selectedRowKeys) {
      this.setState({
        selectedRowKeys: selectedRowKeys
      });
    }
  }, {
    key: "getTableColumns",
    value: function getTableColumns() {
      var _this7 = this;

      return [{
        title: '登陆名',
        dataIndex: 'username'
      }, {
        title: '姓名',
        dataIndex: 'name'
      }, {
        title: '性别',
        dataIndex: 'sex',
        render: function render(text) {
          return text === '0' ? '女' : '男';
        }
      }, {
        title: '移动电话',
        dataIndex: 'telPhone'
      }, {
        title: '邮箱',
        dataIndex: 'email'
      }, {
        title: '状态',
        dataIndex: 'enabled',
        align: 'center',
        render: function render(text) {
          return text === 0 ? _react.default.createElement("span", {
            style: {
              color: 'red'
            }
          }, "\u7981\u7528") : _react.default.createElement("span", {
            style: {
              color: '#28a745'
            }
          }, "\u6B63\u5E38");
        }
      }, {
        title: '操作',
        key: 'action',
        width: 350,
        align: 'center',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: _this7.showModal.bind(_this7, record, 'view')
          }, _react.default.createElement(_icon.default, {
            type: "eye"
          }), "\u67E5\u770B"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _this7.state.role_admin_user_upd ? _react.default.createElement("a", {
            onClick: _this7.showModal.bind(_this7, record, 'edit')
          }, _react.default.createElement(_icon.default, {
            type: "edit"
          }), "\u7F16\u8F91") : null, _this7.state.role_admin_user_upd ? _react.default.createElement(_divider.default, {
            type: "vertical"
          }) : null, _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u91CD\u7F6E\u5BC6\u7801?",
            onConfirm: function onConfirm() {
              return _this7.resetPassword(record.id);
            }
          }, _react.default.createElement("a", {
            href: "javascript:"
          }, _react.default.createElement(_icon.default, {
            type: "unlock"
          }), "\u91CD\u7F6E\u5BC6\u7801")), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _this7.state.role_admin_user_act ? _react.default.createElement("span", null, record.enabled === 0 ? _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u542F\u7528?",
            onConfirm: function onConfirm() {
              return _this7.handleActive(record.id);
            }
          }, _react.default.createElement("a", {
            href: "javascript:",
            style: {
              color: '#28a745'
            }
          }, _react.default.createElement(_icon.default, {
            type: "redo"
          }), "\u542F\u7528")) : _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u7981\u7528?",
            onConfirm: function onConfirm() {
              return _this7.handleDelete(record.id);
            }
          }, _react.default.createElement("a", {
            href: "javascript:",
            style: {
              color: '#f81c23'
            }
          }, _react.default.createElement(_icon.default, {
            type: "close"
          }), "\u7981\u7528"))) : null);
        }
      }];
    }
  }, {
    key: "checkUsername",
    value: function checkUsername(rule, value, callback) {
      if (value && this.state.editable === 'add') {
        (0, _services.checkUsername)(value).then(function (res) {
          if (res.data.length !== 0) {
            var msg = '登录名已经存在';
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
      var selectedRowKeys = this.state.selectedRowKeys;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var ColProps = {
        xs: 24,
        sm: 12,
        style: {
          marginBottom: 16
        }
      };
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange.bind(this),
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            disabled: record.enabled === 0 // Column configuration not to be checked

          };
        }
      };
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
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, "\u7528\u6237\u7BA1\u7406")), _react.default.createElement(_page.default, {
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
      }), getFieldDecorator('s_username', {})(_react.default.createElement(_input.default.Search, {
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
        onClick: this.findUserByName.bind(this, false)
      }, "\u641C\u7D22"), _react.default.createElement(_button.default, {
        onClick: this.findUserByName.bind(this, true)
      }, "\u91CD\u7F6E")), _react.default.createElement("div", null, this.state.role_admin_user_add ? _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.showModal.bind(this, {
          id: null,
          sex: '1'
        }, 'add')
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA") : null, _react.default.createElement(_button.default, {
        type: "danger",
        onClick: this.showConfirm.bind(this),
        disabled: selectedRowKeys.length === 0
      }, _react.default.createElement(_icon.default, {
        type: "close"
      }), "\u7981\u7528"))))), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        rowSelection: rowSelection,
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: this.getTableColumns(),
        dataSource: this.state.data,
        onChange: this.handleChange,
        pagination: this.state.pagination
      })), _react.default.createElement(_modal.default, {
        title: "\u7528\u6237\u4FE1\u606F",
        visible: this.state.visible,
        onCancel: this.handleCancel,
        footer: null
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit,
        labelAlign: "right"
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "ID"
      }, formItemLayout), getFieldDecorator('id', {})(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "enabled"
      }, formItemLayout), getFieldDecorator('enabled', {})(_react.default.createElement(_input.default, null)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u767B\u5F55\u540D"
      }, formItemLayout), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: '请输入登录名!',
          whitespace: true
        }, {
          validator: this.checkUsername.bind(this)
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.state.editable !== 'add',
        placeholder: "\u8BF7\u8F93\u5165\u767B\u5F55\u540D,\u4E0D\u80FD\u4E3A\u4E2D\u6587"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u59D3\u540D"
      }, formItemLayout), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: '请输入姓名!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u79FB\u52A8\u7535\u8BDD"
      }, formItemLayout), getFieldDecorator('telPhone', {
        rules: [{
          pattern: new RegExp('^[1]{1}[0-9]{1}[0-9]{9}$'),
          required: true,
          message: '请输入移动电话!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u79FB\u52A8\u7535\u8BDD"
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u6027\u522B"
      }, formItemLayout), getFieldDecorator('sex', {})(_react.default.createElement(_select.default, {
        placeholder: "\u8BF7\u9009\u62E9\u6027\u522B"
      }, _react.default.createElement(Option, {
        value: "1"
      }, "\u7537"), _react.default.createElement(Option, {
        value: "0"
      }, "\u5973")))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u7535\u8BDD"
      }, formItemLayout), getFieldDecorator('mobilePhone', {})(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u90AE\u7BB1"
      }, formItemLayout), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: '请输入正确的邮箱地址!'
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, {
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
      }, "\u53D6\u6D88"), this.state.editable !== 'view' ? _react.default.createElement("span", null, _react.default.createElement(_divider.default, {
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
  return UserList;
}(_react.default.Component);

var _default = _form.default.create()(UserList);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\index.jsx");
  reactHotLoader.register(UserList, "UserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();