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

var _services = require("./services");

require("./index.less");

var _CreateListModal = _interopRequireDefault(require("./CreateListModal"));

var _EditDetailModal = _interopRequireDefault(require("./EditDetailModal"));

var _CreateElementModal = _interopRequireDefault(require("./CreateElementModal"));

var _config = _interopRequireDefault(require("../../config"));

var _SearchForm = _interopRequireDefault(require("./SearchForm"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var MenuMng =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MenuMng, _React$Component);

  function MenuMng(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MenuMng);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MenuMng).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fetchTree", function (params) {
      _this.setState({
        loading: true
      });

      (0, _services.findMenuTreeList)(params).then(function (data) {
        if (data && data instanceof Array) {
          _this.setState({
            loading: false,
            visible: false,
            elementvisible: false,
            addvisible: false
          });

          var keys = [];
          data.map(function (d) {
            keys.push(d.id);
          });

          _this.setState({
            tableExpandedRowKeys: keys,
            data: data
          });
        }
      }).catch(function (e) {
        console.log('findMenuTreeList接口异常---', e);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (values, isReset) {
      _this.fetchTree(_objectSpread({}, values));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showModal", function (e, edit) {
      _this.setState({
        visible: true,
        editable: edit,
        inputdisable: !edit,
        addtype: e.type,
        record: e
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAddModal", function () {
      _this.setState({
        addvisible: true,
        addtype: ''
      });

      _this.props.form.resetFields();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showElementModal", function (e, type) {
      _this.setState({
        elementvisible: true,
        addtype: type,
        parentId: e.id
      });

      _this.props.form.resetFields();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOk", function () {// this.setState({ loading: true })
      // setTimeout(() => {
      //   this.setState({ loading: false, visible: false, elementvisible: false, addvisible: false })
      // }, 3000)
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.setState({
        visible: false,
        elementvisible: false,
        addvisible: false
      });
    });
    _this.state = {
      data: [],
      treedata: [],
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      loading: false,
      visible: false,
      editable: false,
      addvisible: false,
      inputdisable: false,
      elementvisible: false,
      addtype: '',
      parentId: '',
      selectedRowKeys: [],
      tableExpandedRowKeys: []
    };
    _this.searchForm = null;
    return _this;
  }

  (0, _createClass2.default)(MenuMng, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTree({});
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(e, record) {
      var _this2 = this;

      (0, _services.deleteMenu)(record).then(function (res) {
        if (res.data === 1) {
          // delete success refresh
          _this2.fetchTree({});
        }
      });
    }
  }, {
    key: "findMenuByTitleReset",
    // 重置方法
    value: function findMenuByTitleReset() {
      var pager = _objectSpread({}, this.state.pagination);

      this.props.form.resetFields();
      pager.current = 1;
      this.setState({
        pagination: pager
      });
      this.fetchTree({});
    }
    /* show edit or view modal */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var ColProps = {
        xs: 24,
        sm: 12,
        style: {
          marginBottom: 16
        }
      };
      var _this$state = this.state,
          visible = _this$state.visible,
          addvisible = _this$state.addvisible,
          elementvisible = _this$state.elementvisible;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var columns = [{
        title: '菜单名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '编码',
        dataIndex: 'code',
        key: 'code'
      }, {
        title: '资源分类',
        dataIndex: 'classify',
        key: 'classify',
        render: function render(text) {
          if (text === 'pc') {
            return 'pc端';
          } else if (text === 'app') {
            return '移动端';
          } else {
            return '公共';
          }
        }
      }, {
        title: '菜单类别',
        dataIndex: 'type',
        key: 'type',
        render: function render(text) {
          var resourceType = _config.default.resourceType;
          return _react.default.createElement("span", null, resourceType[text]);
        }
      }, {
        title: '菜单链接',
        dataIndex: 'href',
        key: 'href'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          var menutype = record.type;
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: _this3.showModal.bind(_this3, record, false)
          }, _react.default.createElement(_icon.default, {
            type: "zoom-in"
          }), "\u67E5\u770B"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: _this3.showModal.bind(_this3, record, true)
          }, _react.default.createElement(_icon.default, {
            type: "edit"
          }), "\u7F16\u8F91"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), menutype === 'folder' ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("a", {
            onClick: _this3.showElementModal.bind(_this3, record, menutype),
            style: {
              color: '#28a745'
            }
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u521B\u5EFA\u5B50\u9879\u76EE"), _react.default.createElement(_divider.default, {
            type: "vertical"
          })) : null, menutype === 'menu' ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("a", {
            onClick: _this3.showElementModal.bind(_this3, record, menutype),
            style: {
              color: '#f81c23'
            }
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u521B\u5EFA\u5B50\u5143\u7D20"), _react.default.createElement(_divider.default, {
            type: "vertical"
          })) : null, _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this3.handleDelete(_this3, record);
            }
          }, _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "delete"
          }), "\u5220\u9664")));
        }
      }];
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, _react.default.createElement("a", {
        href: ""
      }, " \u8D44\u6E90\u7BA1\u7406"))), _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_SearchForm.default, {
        wrappedComponentRef: function wrappedComponentRef(ref) {
          _this3.searchForm = ref;
        },
        handleSubmit: this.handleSubmit
      }), _react.default.createElement(_row.default, null, _react.default.createElement("div", {
        style: {
          float: 'right',
          marginBottom: '5px'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.showAddModal.bind(this),
        style: {
          marginRight: '10px'
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        bordered: true,
        rowKey: function rowKey(record) {
          return record.id;
        },
        defaultExpandedRowKeys: this.state.tableExpandedRowKeys,
        className: "bonc-mung-ant-table",
        columns: columns,
        dataSource: this.state.data,
        pagination: "false"
      }))), this.state.addvisible ? _react.default.createElement(_CreateListModal.default, {
        visible: addvisible,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        fetchTree: this.fetchTree
      }) : null, this.state.visible ? _react.default.createElement(_EditDetailModal.default, {
        visible: visible,
        title: this.state.editable === true ? '编辑' : '详情',
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        fetchTree: this.fetchTree,
        record: this.state.record,
        editable: this.state.editable,
        inputdisable: this.state.inputdisable,
        addtype: this.state.addtype
      }) : null, this.state.elementvisible ? _react.default.createElement(_CreateElementModal.default, {
        visible: elementvisible,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        fetchTree: this.fetchTree,
        addtype: this.state.addtype,
        parentId: this.state.parentId,
        inputdisable: this.state.inputdisable
      }) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return MenuMng;
}(_react.default.Component);

var _default = _form.default.create()(MenuMng);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MenuMng, "MenuMng", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();