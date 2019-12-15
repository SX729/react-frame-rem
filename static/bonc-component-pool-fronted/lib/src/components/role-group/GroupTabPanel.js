"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/transfer/style");

var _transfer = _interopRequireDefault(require("antd/es/transfer"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/tree-select/style");

var _treeSelect = _interopRequireDefault(require("antd/es/tree-select"));

require("antd/es/tree/style");

var _tree = _interopRequireDefault(require("antd/es/tree"));

var _react = _interopRequireDefault(require("react"));

require("./index.less");

var _services = require("./services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TreeNode = _tree.default.TreeNode;
var TreeSelectNode = _treeSelect.default.TreeNode;

var GroupTabPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(GroupTabPanel, _React$Component);

  function GroupTabPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, GroupTabPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GroupTabPanel).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOk", function () {
      _this.setState({
        loading: true
      });

      setTimeout(function () {
        _this.setState({
          loading: false,
          visible: false,
          editvisible: false,
          authorlVisible: false,
          checkedKeys: []
        });
      }, 3000);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.setState({
        visible: false,
        editvisible: false,
        authorlVisible: false,
        sonvisible: false,
        checkedKeys: []
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          (0, _services.addGroup)(values).then(function (res) {
            _this.setState({
              visible: false,
              sonvisible: false
            });

            _this.fetchTree({});
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleUpdate", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          (0, _services.editGroup)(values).then(function (res) {
            if (res.data === 1) {
              // 更新成功 关闭modal 刷新页面
              _this.setState({
                editvisible: false
              });

              _this.fetchTree({});
            }
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAddModal", function () {
      _this.setState({
        visible: true
      });

      _this.props.form.resetFields();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showEditModal", function (e) {
      var tableData = _this.state.tableData;
      var treedata = [{
        code: '根节点',
        id: '0',
        children: (0, _toConsumableArray2.default)(tableData)
      }];
      var newData = []; // treedata.unshift([{code: '一级', id: '0',children: [...tableData]}])

      var dataMap = function dataMap(value, arr) {
        value.map(function (item, index) {
          if (item.id !== e.id) {
            if (item.children) {
              arr.push({
                code: item.code,
                id: item.id,
                children: dataMap(item.children, [])
              });
            } else {
              arr.push({
                code: item.code,
                id: item.id
              });
            }
          }
        });
        return arr;
      };

      _this.setState({
        editvisible: true,
        treedata: dataMap(treedata, [])
      }, function () {
        _this.props.form.resetFields();

        _this.props.form.setFieldsValue(e);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showUserModal", function (e) {
      _this.setState({
        userModalVisible: true,
        userModalData: e
      });

      (0, _services.findUserList)().then(function (res) {
        _this.setState({
          userModalListData: res.data.list
        });

        (0, _services.findRoleUserList)(e.id).then(function (res) {
          var data = [];

          for (var i in res.data) {
            data.push(res.data[i].userId);
          }

          _this.setState({
            userModalTargetKeys: data
          });
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelUserModal", function (e) {
      _this.setState({
        userModalTargetKeys: [],
        userModalVisible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSearch", function (dir, value) {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (nextTargetKeys, direction, moveKeys) {
      _this.setState({
        userModalTargetKeys: nextTargetKeys
      });

      if (direction === 'right') {
        (0, _services.insertUserRoleBatch)(_this.state.userModalData.id, _this.state.userModalData.groupType, moveKeys).then(function (res) {});
      } else {
        (0, _services.deleteUserRoleBatch)(_this.state.userModalData.id, _this.state.userModalData.groupType, moveKeys).then(function (res) {});
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTreeNodes", function (data) {
      return data.map(function (item) {
        if (item.children) {
          return _react.default.createElement(TreeNode, {
            title: item.title,
            key: item.id,
            dataRef: item
          }, _this.renderTreeNodes(item.children));
        }

        return _react.default.createElement(TreeNode, {
          title: item.title,
          key: item.id,
          dataRef: item
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTreeSelectNodes", function (data) {
      return data.map(function (item) {
        if (item.children) {
          return _react.default.createElement(TreeSelectNode, {
            title: item.code,
            key: item.id,
            value: item.id
          }, _this.renderTreeSelectNodes(item.children));
        }

        return _react.default.createElement(TreeSelectNode, {
          title: item.code,
          key: item.id,
          value: item.id
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onExpand", function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCheck", function (checkedKeys) {
      _this.setState({
        checkedKeys: checkedKeys.checked
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelect", function (selectedKeys, info) {
      _this.setState({
        selectedKeys: selectedKeys
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAuthModal", function (e) {
      _this.setState({
        authorlVisible: true,
        authModalData: e
      });

      _this.props.form.resetFields();

      _this.props.form.setFieldsValue(e); // 设置表单数据


      _this.fetchMenuTree({
        groupId: e.id
      }); // 获取菜单树数据 设定选中项

    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelAuthModal", function (e) {
      _this.setState({
        authorlVisible: false,
        checkedKeys: []
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAuthSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var params = {
            groupId: _this.state.authModalData.id,
            groupType: _this.state.authModalData.groupType,
            resourceIds: _this.state.checkedKeys
          };
          (0, _services.authMenuToGroup)(params).then(function (res) {
            if (res.data >= 1) {
              // 增加成功 关闭modal 刷新页面
              _this.setState({
                authorlVisible: false
              });

              _this.fetchTree({});
            }
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showSonAddModal", function (e) {
      _this.setState({
        sonvisible: true
      }, function () {
        var param = {
          parentId: e.id,
          groupType: e.groupType
        };

        _this.props.form.resetFields();

        _this.props.form.setFieldsValue(param);
      });
    });
    _this.state = {
      loading: false,
      visible: false,
      editvisible: false,
      parentId: '0',
      authorlVisible: false,
      userModalVisible: false,
      userModalListData: [],
      userModalSelectedKeys: [],
      userModalTargetKeys: [],
      userModalData: [],
      tableData: [],
      tableExpandAllRows: true,
      tableAutoExpandParent: true,
      tableExpandedRowKeys: [],
      menuData: [],
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treedata: [],
      sonvisible: false
    };
    return _this;
  }

  (0, _createClass2.default)(GroupTabPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTree();
    }
  }, {
    key: "fetchTree",
    value: function fetchTree() {
      var _this2 = this;

      var getKey = function getKey(items, children) {
        (items.children || []).map(function (data) {
          children.push(data.id);
          getKey(data, children);
        });
      };

      (0, _services.findGroupList)({
        'groupType': this.props.code
      }).then(function (data) {
        var keys = [];
        data.map(function (d) {
          keys.push(d.id);
          getKey(d, keys);
        });

        _this2.setState({
          tableExpandedRowKeys: keys,
          tableData: data
        });
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(e, record) {
      var _this3 = this;

      (0, _services.deleteGroup)(record).then(function (res) {
        if (res.data === 1) {
          // delete success refresh
          _this3.fetchTree({});
        }
      });
    }
  }, {
    key: "onTableRowExpand",
    value: function onTableRowExpand(expanded, record) {} //获取菜单基础数据

  }, {
    key: "fetchMenuTree",
    value: function fetchMenuTree(params) {
      var _this4 = this;

      (0, _services.findMenuTreeList)({}).then(function (menus) {
        var expandedKeys = [];
        menus.map(function (menu) {
          expandedKeys.push(menu.id);
        });

        _this4.setState({
          expandedKeys: expandedKeys,
          menuData: menus
        });
      }).then(function (res) {
        (0, _services.getAuthedMenuList)(params).then(function (keys) {
          _this4.setState({
            checkedKeys: keys
          });
        });
      });
    } // 用于生成子树

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          userModalTargetKeys = _this$state.userModalTargetKeys,
          editvisible = _this$state.editvisible,
          sonvisible = _this$state.sonvisible;
      var _this$props = this.props,
          name = _this$props.name,
          code = _this$props.code;
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
        'title': '编码',
        'dataIndex': 'code'
      }, {
        'title': '名称',
        'dataIndex': 'name'
      }, {
        'title': '描述',
        'dataIndex': 'description'
      }, {
        'title': '操作',
        'key': 'action',
        'align': 'center',
        'render': function render(text, record) {
          return _react.default.createElement("div", null, _react.default.createElement("a", {
            onClick: _this5.showSonAddModal.bind(_this5, record)
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u521B\u5EFA\u5B50\u7EA7"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: _this5.showEditModal.bind(_this5, record)
          }, _react.default.createElement(_icon.default, {
            type: "minus"
          }), "\u7F16\u8F91"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this5.handleDelete(_this5, record);
            }
          }, _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "delete"
          }), "\u5220\u9664")), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: _this5.showAuthModal.bind(_this5, record)
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u6388\u6743"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: _this5.showUserModal.bind(_this5, record)
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u4EBA\u5458"));
        }
      }]; // console.log(this.state.tableExpandedRowKeys)

      return _react.default.createElement("div", {
        tab: name,
        key: code
      }, _react.default.createElement(_row.default, {
        gutter: 24,
        style: {
          height: '30px',
          marginBottom: '12px'
        }
      }, _react.default.createElement(_col.default, null, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px',
          float: 'right'
        },
        onClick: this.showAddModal.bind(this)
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))), _react.default.createElement(_row.default, {
        gutter: 24
      }, _react.default.createElement(_col.default, null, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        bordered: true,
        columns: columns,
        dataSource: this.state.tableData,
        pagination: "false"
      }))), _react.default.createElement(_modal.default, {
        title: "\u89D2\u8272\u5173\u8054\u4EBA\u5458",
        visible: this.state.userModalVisible,
        onCancel: this.cancelUserModal,
        footer: null,
        width: '50%'
      }, _react.default.createElement(_row.default, {
        gutter: 24
      }, _react.default.createElement(_transfer.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        dataSource: this.state.userModalListData,
        listStyle: {
          width: '47%',
          height: 600
        },
        showSearch: true,
        filterOption: this.filterOption,
        targetKeys: userModalTargetKeys,
        onChange: this.handleChange,
        onSearch: this.handleSearch,
        render: function render(item) {
          return item.name + '(' + item.username + ')';
        }
      }))), this.state.authorlVisible ? _react.default.createElement(_modal.default, {
        title: "\u89D2\u8272\u5173\u8054\u8D44\u6E90",
        visible: this.state.authorlVisible,
        onCancel: this.cancelAuthModal.bind(this),
        footer: null,
        width: '50%'
      }, _react.default.createElement(_row.default, {
        gutter: 24
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleAuthSubmit
      }, getFieldDecorator('id', {})(_react.default.createElement("div", {
        style: {
          height: '600px',
          overflowY: 'auto'
        }
      }, _react.default.createElement(_tree.default, {
        checkable: true,
        onExpand: this.onExpand // 展开/收起节点时触发
        ,
        expandedKeys: this.state.expandedKeys // 展开指定的树节点
        ,
        autoExpandParent: this.state.autoExpandParent,
        onCheck: this.onCheck // 点击复选框触发
        ,
        checkedKeys: this.state.checkedKeys // 选中复选框的树节点
        ,
        onSelect: this.onSelect // 点击树节点触发
        ,
        selectedKeys: this.state.selectedKeys // 设置选中的树节点
        ,
        checkStrictly: true // 节点选择完全受控（父子节点选中状态不再关联）

      }, this.renderTreeNodes(this.state.menuData)))), _react.default.createElement(_form.default.Item, null, _react.default.createElement("div", {
        style: {
          marginLeft: '30px'
        }
      }, _react.default.createElement(_button.default, {
        onClick: this.handleCancel,
        style: {
          width: '120px'
        }
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          width: '120px'
        }
      }, "\u4FDD\u5B58")))))) : null, this.state.visible ? _react.default.createElement(_modal.default, {
        visible: this.state.visible,
        title: "\u65B0\u5EFA",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: null
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "groupType"
      }, getFieldDecorator('groupType', {
        initialValue: this.props.code
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, {
        label: "parentId"
      }, getFieldDecorator('parentId', {
        initialValue: this.state.parentId
      })(_react.default.createElement(_input.default, null)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色编码!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u540D\u5B57"
      }, formItemLayout), getFieldDecorator('name', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色名字!'
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('orders', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('description', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请输入角色描述!'
        }]
      })(_react.default.createElement(_input.default.TextArea, null))), _react.default.createElement(_form.default.Item, {
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
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          width: '120px'
        }
      }, "\u4FDD\u5B58"))))) : null, sonvisible ? _react.default.createElement(_modal.default, {
        visible: sonvisible,
        title: "\u65B0\u5EFA\u5B50\u89D2\u8272",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: null
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleSubmit
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "groupType"
      }, getFieldDecorator('groupType', {})(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, {
        label: "parentId"
      }, getFieldDecorator('parentId', {})(_react.default.createElement(_input.default, null)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色编码!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u540D\u5B57"
      }, formItemLayout), getFieldDecorator('name', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色名字!'
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('orders', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('description', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请输入角色描述!'
        }]
      })(_react.default.createElement(_input.default.TextArea, null))), _react.default.createElement(_form.default.Item, {
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
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          width: '120px'
        }
      }, "\u4FDD\u5B58"))))) : null, editvisible ? _react.default.createElement(_modal.default, {
        visible: editvisible,
        title: "\u7F16\u8F91",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: null
      }, _react.default.createElement(_form.default, {
        onSubmit: this.handleUpdate
      }, _react.default.createElement("div", {
        style: {
          display: 'none'
        }
      }, _react.default.createElement(_form.default.Item, {
        label: "groupType"
      }, getFieldDecorator('groupType', {
        initialValue: this.props.code
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, {
        label: "ID"
      }, getFieldDecorator('id', {})(_react.default.createElement(_input.default, null)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u7F16\u7801"
      }, formItemLayout), getFieldDecorator('code', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色编码!',
          whitespace: true
        }]
      })(_react.default.createElement(_input.default, {
        disabled: true
      }))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u540D\u5B57"
      }, formItemLayout), getFieldDecorator('name', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入角色名字!'
        }]
      })(_react.default.createElement(_input.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u5E8F\u53F7"
      }, formItemLayout), getFieldDecorator('orders', {
        initialValue: '',
        rules: [{
          required: true,
          message: '请输入序号!'
        }]
      })(_react.default.createElement(_inputNumber.default, null))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u6307\u5B9A\u7236\u7EA7"
      }, formItemLayout), getFieldDecorator('parentId', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请选择父级!'
        }]
      })(_react.default.createElement(_treeSelect.default, null, this.renderTreeSelectNodes(this.state.treedata)))), _react.default.createElement(_form.default.Item, (0, _extends2.default)({
        label: "\u89D2\u8272\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('description', {
        initialValue: '',
        rules: [{
          required: false,
          message: '请输入角色描述!'
        }]
      })(_react.default.createElement(_input.default.TextArea, null))), _react.default.createElement(_form.default.Item, {
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
      }, "\u53D6\u6D88"), _react.default.createElement(_divider.default, {
        type: "vertical"
      }), _react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        style: {
          width: '120px'
        }
      }, "\u4FDD\u5B58"))))) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return GroupTabPanel;
}(_react.default.Component);

var _default = _form.default.create()(GroupTabPanel);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TreeNode, "TreeNode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\GroupTabPanel.jsx");
  reactHotLoader.register(TreeSelectNode, "TreeSelectNode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\GroupTabPanel.jsx");
  reactHotLoader.register(GroupTabPanel, "GroupTabPanel", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\GroupTabPanel.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\GroupTabPanel.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();