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

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/breadcrumb/style");

var _breadcrumb = _interopRequireDefault(require("antd/es/breadcrumb"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

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

var _page = _interopRequireDefault(require("../page"));

var _services = require("./services");

var _MessageModal = _interopRequireDefault(require("./MessageModal"));

var _NoticeModal = _interopRequireDefault(require("./NoticeModal"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var NewsManagement =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NewsManagement, _React$Component);

  function NewsManagement(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NewsManagement);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewsManagement).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getMessageList", function () {
      var params = {
        pageSize: _this.state.pageSize,
        pageNum: _this.state.pageNum,
        type: _this.state.type
      };
      (0, _services.messageList)(params).then(function (res) {
        var data = res.data;

        _this.setState({
          data: data.list,
          total: data.total
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSingleDelete", function (id) {
      var selectedRowKeys = [id];

      _this.setState({
        selectedRowKeys: selectedRowKeys
      }, function () {
        _this.handleDelete();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDelete", function () {
      var param = {
        messageIds: _this.state.selectedRowKeys,
        type: _this.state.type
      };
      (0, _services.messageDelete)(param).then(function (res) {
        _message2.default.success('删除成功');

        _this.setState({
          selectedRowKeys: []
        });

        _this.getMessageList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectChange", function (selectedRowKeys) {
      _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTabsChange", function (key) {
      _this.setState({
        type: key,
        pageNum: 1,
        pageSize: 10,
        total: 0
      }, function () {
        _this.getMessageList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "viewMessage", function (selectedRecord, type) {
      (0, _services.getMsgData)({
        id: selectedRecord.messageId
      }, function (response) {
        if (type === 'noticeMessage') {
          _this.setState({
            noticeModalType: 'view',
            noticeModalVisible: true,
            noticeSelectRecord: response
          });
        } else {
          _this.setState({
            msgModalType: 'view',
            msgModalVisible: true,
            msgSelectRecord: response
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClose", function (isRefresh, key) {
      _this.setState((0, _defineProperty2.default)({}, key, false), function () {
        if (isRefresh) {
          _this.getMessageList();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addMessage", function (type) {
      if (type === 'noticeMessage') {
        _this.setState({
          noticeSelectRecord: {},
          noticeModalType: 'new',
          noticeModalVisible: true
        });
      } else {
        _this.setState({
          msgSelectRecord: {},
          msgModalType: 'new',
          msgModalVisible: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePageChange", function (page, pageSize) {
      _this.setState({
        pageNum: page,
        pageSize: pageSize
      }, function () {
        _this.getMessageList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSizeChange", function (page, pageSize) {
      _this.setState({
        pageNum: page,
        pageSize: pageSize
      }, function () {
        _this.getMessageList();
      });
    });
    _this.state = {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      noticeModalType: '',
      msgModalType: '',
      msgSelectRecord: {},
      noticeSelectRecord: {},
      noticeModalVisible: false,
      msgModalVisible: false,
      type: props.location.search.slice(1) || 'noticeMessage',
      //信息类型  noticeMessage    othersMessage
      selectedRowKeys: [],
      visible: false,
      defaultKey: props.location.search.slice(1) || 'noticeMessage'
    };
    return _this;
  }

  (0, _createClass2.default)(NewsManagement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMessageList();
    }
  }, {
    key: "getTableColumns",
    value: function getTableColumns(title, type) {
      var _this2 = this;

      return [{
        title: '序号',
        dataIndex: 'number',
        render: function render(text, record, index) {
          var page = _this2.state.pageNum;
          return (page - 1) * 10 + index + 1;
        }
      }, {
        title: "".concat(title, "\u6807\u9898"),
        dataIndex: 'title'
      }, {
        title: "".concat(title, "\u5185\u5BB9"),
        dataIndex: 'content',
        render: function render(text) {
          return _react.default.createElement("div", {
            style: {
              wordWrap: 'break-word',
              wordBreak: 'break-all'
            }
          }, text);
        }
      }, {
        title: '发送时间',
        dataIndex: 'createTime',
        width: 200
      }, {
        title: '操作',
        dataIndex: 'operate',
        width: 200,
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: function onClick() {
              return _this2.viewMessage(record, type);
            }
          }, _react.default.createElement(_icon.default, {
            type: "eye"
          }), "\u8BE6\u60C5"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this2.handleSingleDelete(record.messageId);
            }
          }, _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "close"
          }), "\u5220\u9664")));
        }
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange
      };
      var TabPane = _tabs.default.TabPane;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, "\u6D88\u606F\u7BA1\u7406")), _react.default.createElement(_page.default, {
        className: "page news-management-container",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement("div", null, _react.default.createElement(_tabs.default, {
        defaultActiveKey: this.state.defaultKey,
        onChange: this.handleTabsChange
      }, _react.default.createElement(TabPane, {
        tab: "\u901A\u77E5",
        key: "noticeMessage"
      }, _react.default.createElement(_row.default, {
        style: {
          marginBottom: '10px'
        }
      }, _react.default.createElement("div", {
        style: {
          float: 'left'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.handleDelete,
        disabled: selectedRowKeys.length === 0
      }, "\u6279\u91CF\u5220\u9664")), _react.default.createElement("div", {
        style: {
          float: 'right'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: function onClick() {
          _this3.addMessage('noticeMessage');
        },
        style: {
          marginRight: '10px'
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))), _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.messageId;
        },
        rowSelection: rowSelection,
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: this.getTableColumns('通知', 'noticeMessage'),
        dataSource: this.state.data,
        onChange: this.handleChange,
        pagination: {
          showTotal: function showTotal(total, range) {
            return "".concat(range[0], "-").concat(range[1], " \u5171 ").concat(total, " \u6761");
          },
          current: this.state.pageNum,
          pageSize: this.state.pageSize,
          total: this.state.total,
          onChange: function onChange(current, size) {
            _this3.handlePageChange(current, size);
          },
          onShowSizeChange: function onShowSizeChange(current, size) {
            _this3.handleSizeChange(current, size);
          }
        }
      })), _react.default.createElement(TabPane, {
        tab: "\u6D88\u606F",
        key: "othersMessage"
      }, _react.default.createElement(_row.default, {
        style: {
          marginBottom: '10px'
        }
      }, _react.default.createElement("div", {
        style: {
          float: 'left'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.handleDelete,
        disabled: selectedRowKeys.length === 0
      }, "\u6279\u91CF\u5220\u9664")), _react.default.createElement("div", {
        style: {
          float: 'right'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: function onClick() {
          _this3.addMessage('sysMessage');
        },
        style: {
          marginRight: '10px'
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))), _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.messageId;
        },
        rowSelection: rowSelection,
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: this.getTableColumns('消息', 'sysMessage'),
        dataSource: this.state.data,
        onChange: this.handleChange,
        pagination: {
          showTotal: function showTotal(total, range) {
            return "".concat(range[0], "-").concat(range[1], " \u5171 ").concat(total, " \u6761");
          },
          current: this.state.pageNum,
          pageSize: this.state.pageSize,
          total: this.state.total,
          onChange: function onChange(current, size) {
            _this3.handlePageChange(current, size);
          },
          onShowSizeChange: function onShowSizeChange(current, size) {
            _this3.handleSizeChange(current, size);
          }
        }
      }))), this.state.msgModalVisible ? _react.default.createElement(_MessageModal.default, {
        type: this.state.msgModalType,
        selectedRecord: this.state.msgSelectRecord,
        visible: this.state.msgModalVisible,
        handleClose: function handleClose(isRefresh) {
          _this3.handleClose(isRefresh, 'msgModalVisible');
        }
      }) : null, this.state.noticeModalVisible ? _react.default.createElement(_NoticeModal.default, {
        type: this.state.noticeModalType,
        selectedRecord: this.state.noticeSelectRecord,
        visible: this.state.noticeModalVisible,
        handleClose: function handleClose(isRefresh) {
          _this3.handleClose(isRefresh, 'noticeModalVisible');
        }
      }) : null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return NewsManagement;
}(_react.default.Component);

var _default = NewsManagement;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewsManagement, "NewsManagement", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();