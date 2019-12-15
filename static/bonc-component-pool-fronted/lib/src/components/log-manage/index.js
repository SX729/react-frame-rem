"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/breadcrumb/style");

var _breadcrumb = _interopRequireDefault(require("antd/es/breadcrumb"));

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

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

var _page = _interopRequireDefault(require("../../components/page"));

var _services = require("./services");

var _moment = _interopRequireDefault(require("moment"));

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LogManagement =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LogManagement, _React$Component);

  function LogManagement(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LogManagement);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LogManagement).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      _this.getLogsList();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getLogsList", function () {
      var _this$state$paginatio = _this.state.pagination,
          current = _this$state$paginatio.current,
          defaultPageSize = _this$state$paginatio.defaultPageSize;
      var _this$state = _this.state,
          beginTime = _this$state.beginTime,
          endTime = _this$state.endTime,
          pagination = _this$state.pagination,
          crtUserName = _this$state.crtUserName;
      var params = {
        pageSize: defaultPageSize,
        pageNum: current,
        beginTime: beginTime,
        endTime: endTime,
        crtUserName: crtUserName
      };
      (0, _services.logsList)(params).then(function (res) {
        pagination.total = res.data.total;

        _this.setState({
          data: res.data.list,
          pagination: pagination
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "findByCondition", function () {
      var pagination = _this.state.pagination;
      pagination.current = 1;

      _this.setState({
        pagination: pagination
      });

      _this.getLogsList();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (pagination, filters, sorter) {
      _this.setState({
        pagination: pagination
      }, function () {
        _this.getLogsList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleRangePickerChange", function (date, dateString) {
      _this.setState({
        beginTime: dateString[0],
        endTime: dateString[1]
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectChange", function (selectedRowKeys) {
      _this.setState({
        selectedRowKeys: selectedRowKeys
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showModal", function (record) {
      _this.setState({
        visible: true,
        detail: record
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDelete", function () {
      var param = {
        logIds: _this.state.selectedRowKeys
      };
      (0, _services.logsDelete)(param).then(function (res) {
        _message2.default.success('删除成功');

        _this.getLogsList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOperatorChange", function (e) {
      _this.setState({
        crtUserName: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDetailContent", function (code) {
      var detail = _this.state.detail;
      var retVal = detail && detail[code] || '';

      if (code === 'crtTime') {
        retVal = (0, _moment.default)(detail[code]).format('YYYY-MM-DD HH:mm:ss');
      }

      return retVal;
    });
    _this.state = {
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0,
        current: 1
      },
      data: [],
      beginTime: '',
      endTime: '',
      selectedRowKeys: [],
      visible: false,
      crtUserName: '',
      detailRows: [{
        title: '日志标题',
        code: 'typeName'
      }, {
        title: '操作IP地址',
        code: 'remoteAddr'
      }, {
        title: '请求URI',
        code: 'requestUri'
      }, {
        title: '操作方式',
        code: 'method'
      }, {
        title: '操作提交的数据',
        code: 'params'
      }, {
        title: '操作人',
        code: 'crtUserName'
      }, {
        title: '操作时间',
        code: 'crtTime'
      }]
    };
    return _this;
  }

  (0, _createClass2.default)(LogManagement, [{
    key: "getTableColumns",
    value: function getTableColumns() {
      var _this2 = this;

      return [{
        title: '序号',
        dataIndex: 'number',
        render: function render(text, record, index) {
          var page = _this2.state.pagination.current;
          return (page - 1) * 10 + index + 1;
        }
      }, {
        title: '日志标题',
        dataIndex: 'title'
      }, {
        title: '操作IP地址',
        dataIndex: 'remoteAddr'
      }, {
        title: '请求URI',
        dataIndex: 'requestUri'
      }, {
        title: '操作方式',
        dataIndex: 'method'
      }, {
        title: '操作提交的数据',
        dataIndex: 'params',
        width: 200,
        render: function render(text) {
          return _react.default.createElement("div", {
            style: {
              wordWrap: 'break-word',
              wordBreak: 'break-all'
            }
          }, text);
        }
      }, {
        title: '操作人',
        dataIndex: 'crtUserName'
      }, {
        title: '操作时间',
        dataIndex: 'crtTime',
        render: function render(text) {
          return (0, _moment.default)(text).format('YYYY-MM-DD HH:mm:ss');
        }
      }, {
        title: '操作',
        dataIndex: 'operate',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: _this2.showModal.bind(_this2, record)
          }, _react.default.createElement(_icon.default, {
            type: "eye"
          }), "\u67E5\u770B"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this2.handleSingleDelete(record.id);
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

      var RangePicker = _datePicker.default.RangePicker;
      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, "\u65E5\u5FD7\u7BA1\u7406")), _react.default.createElement(_page.default, {
        className: "page log-management-container",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_row.default, {
        gutter: 24,
        className: "searchBar"
      }, _react.default.createElement(_col.default, {
        span: 1,
        style: {
          paddingRight: 0,
          paddingTop: '5px'
        }
      }, "\u65F6\u95F4 :"), _react.default.createElement(_col.default, {
        span: 4,
        style: {
          paddingLeft: 0
        }
      }, _react.default.createElement(RangePicker, {
        onChange: this.handleRangePickerChange
      })), _react.default.createElement(_col.default, {
        span: 1,
        style: {
          width: '80px',
          paddingRight: 0,
          paddingTop: '5px'
        }
      }, "\u64CD\u4F5C\u4EBA :"), _react.default.createElement(_col.default, {
        span: 4,
        style: {
          paddingLeft: 0
        }
      }, _react.default.createElement(_input.default, {
        placeholder: "\u8BF7\u8F93\u5165\u64CD\u4F5C\u4EBA\u540D\u79F0",
        onChange: this.handleOperatorChange
      })), _react.default.createElement(_col.default, null, _react.default.createElement(_row.default, {
        type: "flex",
        align: "middle",
        justify: "space-between"
      }, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.findByCondition.bind(this)
      }, "\u641C\u7D22"), _react.default.createElement(_button.default, {
        type: "primary",
        style: {
          marginRight: '10px'
        },
        onClick: this.handleDelete,
        disabled: selectedRowKeys.length === 0
      }, "\u6279\u91CF\u5220\u9664"))))), _react.default.createElement("div", {
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
      }))), this.state.visible ? _react.default.createElement(_modal.default, {
        title: "\u8BE6\u60C5",
        visible: this.state.visible,
        onCancel: this.handleCancel,
        footer: null,
        className: "log-management-detail-modal",
        width: 600
      }, _react.default.createElement("div", null, this.state.detailRows.map(function (item, index) {
        return _react.default.createElement(_row.default, {
          gutter: 24,
          className: "row"
        }, _react.default.createElement(_col.default, {
          span: 6,
          className: "title-col"
        }, item.title, ":"), _react.default.createElement(_col.default, {
          span: 12,
          style: {
            paddingLeft: 0
          }
        }, _this3.getDetailContent(item.code)));
      }), _react.default.createElement(_row.default, {
        style: {
          textAlign: 'right'
        }
      }, _react.default.createElement(_button.default, {
        onClick: this.handleCancel,
        style: {
          width: '120px'
        }
      }, "\u53D6\u6D88")))) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return LogManagement;
}(_react.default.Component);

var _default = _form.default.create()(LogManagement);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogManagement, "LogManagement", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\log-manage\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\log-manage\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();