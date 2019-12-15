"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

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

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _page = _interopRequireDefault(require("../page"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./index.less");

var _Services = require("./Services");

var _NewLayoutPage = _interopRequireDefault(require("./NewLayoutPage"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var PlateManagement =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PlateManagement, _React$Component);

  function PlateManagement(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PlateManagement);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PlateManagement).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getQueryPlate", function (pageNumber) {
      var _this$state = _this.state,
          plateInputValue = _this$state.plateInputValue,
          plateSelectValue = _this$state.plateSelectValue,
          pageNum = _this$state.pageNum,
          pageSize = _this$state.pageSize;
      var params = {
        pageName: plateInputValue,
        belongPage: plateSelectValue,
        pageNum: pageNumber || pageNum,
        pageSize: pageSize
      };
      (0, _Services.queryPlate)(params).then(function (res) {
        _this.setState({
          data: res.data.list,
          pagination: {
            total: res.data.total
          }
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (pagination, filters, sorter) {
      _this.getQueryPlate(pagination.current);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDeletePlate", function (record) {
      (0, _Services.deletePlate)({
        id: record.pageId
      }).then(function (res) {
        _this.getQueryPlate();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "plateInputChange", function (e) {
      _this.setState({
        plateInputValue: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "plateSelectChange", function (value) {
      _this.setState({
        plateSelectValue: value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "checkResize", function () {
      _this.setState({
        plateInputValue: '',
        plateSelectValue: ''
      }, function () {
        _this.getQueryPlate();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setNewPlate", function () {
      _this.setState({
        layoutConfig: {
          selectTpl: {
            //默认选中第一个布局
            layoutCode: '12-12',
            layout: ['1:1', '1:1', '1:1', '1:1']
          },
          selectIndicators: []
        },
        pageInfo: {
          pageId: 1
        },
        editStatus: 'new',
        layoutPageVisible: true
      }, function () {
        console.log('9999---------------9999999999999');
        console.log(_this.state);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "checkNewPlate", function (value) {
      var a = JSON.parse(value.pageContext);

      _this.setState({
        layoutConfig: a,
        pageInfo: value,
        editStatus: 'check',
        layoutPageVisible: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "editPlate", function (value) {
      var a = JSON.parse(value.pageContext);

      _this.setState({
        layoutConfig: a,
        pageInfo: value,
        editStatus: 'edit',
        layoutPageVisible: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateLayoutConfig", function (layoutConfig) {
      _this.setState({
        layoutConfig: layoutConfig
      });
    });
    _this.state = {
      layoutPageVisible: false,
      selectedRowKeys: [],
      plateInputValue: '',
      plateSelectValue: '',
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      pageNum: 1,
      pageSize: 10,
      data: [{
        belongCode: 'WW_WW',
        belongPage: '系统',
        pageContext: {
          selectTpl: {
            //当前选中布局
            layoutCode: '12-12',
            layout: ['1:1', '1:1', '1:1', '1:1']
          },
          selectIndicators: []
        },
        pageDesc: '配置页面新建',
        pageName: '配置',
        validTime: '2019-06-22',
        pageId: 2
      }],
      belongPage: [],
      //主题板块
      layoutConfig: {
        selectTpl: {
          //当前选中布局
          layoutCode: '12-12',
          layout: ['1:1', '1:1', '1:1', '1:1']
        },
        selectIndicators: []
      },
      pageInfo: {
        pageId: 1
      },
      editStatus: 'new'
    };
    return _this;
  }

  (0, _createClass2.default)(PlateManagement, [{
    key: "getTableColumns",
    value: function getTableColumns() {
      var _this2 = this;

      return [{
        title: '版块名称',
        dataIndex: 'pageName'
      }, {
        title: '有效时间',
        dataIndex: 'validTime'
      }, {
        title: '所属版块',
        dataIndex: 'belongPage'
      }, {
        title: '版块描述',
        dataIndex: 'pageDesc'
      }, {
        title: '版块操作',
        dataIndex: 'opreat',
        align: 'center',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            href: "javascript:",
            onClick: function onClick() {
              return _this2.editPlate(record);
            }
          }, "\u7F16\u8F91"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u5220\u9664\u6B64\u6761\u7248\u9762\u4FE1\u606F?",
            onConfirm: function onConfirm() {
              return _this2.getDeletePlate(record);
            }
          }, _react.default.createElement("a", {
            href: "javascript:"
          }, "\u5220\u9664")), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            href: "javascript:",
            onClick: function onClick() {
              return _this2.checkNewPlate(record);
            }
          }, "\u9884\u89C8"));
        }
      }];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQueryPlate();
    } //列表查询

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
    } //版块名称查询

  }, {
    key: "hideLayoutPage",
    value: function hideLayoutPage() {
      var _this3 = this;

      this.setState({
        layoutPageVisible: false
      }, function () {
        _this3.getQueryPlate();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          plateInputValue = _this$state2.plateInputValue,
          plateSelectValue = _this$state2.plateSelectValue,
          belongPage = _this$state2.belongPage;
      var ColProps = {
        xs: 24,
        sm: 12,
        style: {
          marginBottom: 16
        }
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, "\u7248\u5757\u7BA1\u7406")), _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, (0, _extends2.default)({}, ColProps, {
        xl: {
          span: 5
        },
        md: {
          span: 9
        }
      }), _react.default.createElement("div", {
        className: "plate-search-top-div"
      }, _react.default.createElement("span", {
        className: "plate-name-span"
      }, "\u7248\u5757\u540D\u79F0\uFF1A"), _react.default.createElement(_input.default.Search, {
        className: "plate-name-input",
        placeholder: "\u8BF7\u8F93\u5165",
        style: {
          width: 'calc(100% - 80px)'
        },
        onChange: this.plateInputChange,
        value: plateInputValue
      }))), _react.default.createElement(_col.default, (0, _extends2.default)({}, ColProps, {
        xl: {
          span: 4
        },
        md: {
          span: 8
        }
      }), _react.default.createElement("div", {
        className: "plate-search-top-div"
      }, _react.default.createElement("span", {
        className: "theme-plate-span"
      }, "\u4E3B\u9898\u7248\u5757\uFF1A"), _react.default.createElement(_select.default, {
        className: "theme-plate-select",
        value: plateSelectValue,
        onChange: this.plateSelectChange,
        style: {
          width: 'calc(100% - 90px)'
        }
      }, belongPage && belongPage.map(function (item, index) {
        return _react.default.createElement(_select.default.Option, {
          key: item.code,
          value: item.title
        }, item.title);
      })))), _react.default.createElement(_col.default, (0, _extends2.default)({}, ColProps, {
        xl: {
          span: 15
        },
        md: {
          span: 7
        }
      }), _react.default.createElement(_row.default, {
        type: "flex",
        align: "middle",
        justify: "space-between"
      }, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: function onClick() {
          return _this4.getQueryPlate();
        }
      }, "\u641C\u7D22"), _react.default.createElement(_button.default, {
        onClick: this.checkResize
      }, "\u91CD\u7F6E")), _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this4.setNewPlate();
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u65B0\u5EFA"))))), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: this.getTableColumns(),
        dataSource: this.state.data,
        onChange: this.handleChange,
        pagination: this.state.pagination
      }))), _react.default.createElement(_NewLayoutPage.default, {
        editStatus: this.state.editStatus,
        pageInfo: this.state.pageInfo,
        getList: function getList() {
          return _this4.getQueryPlate();
        },
        layoutConfig: this.state.layoutConfig,
        handleCancel: function handleCancel() {
          return _this4.hideLayoutPage();
        },
        layoutPageVisible: this.state.layoutPageVisible
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return PlateManagement;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(PlateManagement);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PlateManagement, "PlateManagement", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();