"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

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

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

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

require("./index.less");

var _Services = require("./Services");

var _moment = _interopRequireDefault(require("moment"));

var _TaskModal = _interopRequireDefault(require("./TaskModal"));

var _SearchForm = _interopRequireDefault(require("./SearchForm"));

var _alibabaIconfont = _interopRequireDefault(require("@/utils/alibaba-iconfont"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TaskList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TaskList, _React$Component);

  function TaskList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TaskList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaskList).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getTaskIncetanceListData", function () {
      var _this$state = _this.state,
          instancePageNum = _this$state.instancePageNum,
          instancePageSize = _this$state.instancePageSize,
          selectedRowKeys = _this$state.selectedRowKeys,
          taskData = _this$state.taskData;
      var ts = [];

      for (var i = 0; i < selectedRowKeys.length; i++) {
        ts.push(taskData[selectedRowKeys[i]].taskId);
      }

      (0, _Services.getTaskIncetanceListData)({
        pageNum: instancePageNum,
        pageSize: instancePageSize,
        taskIds: ts.join(',')
      }, function (res) {
        _this.setState({
          selectedRowKeys: selectedRowKeys,
          instanceData: res.list || [],
          instanceTotal: res.total
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getTaskListData", function () {
      var params = _this.getSearchFormParams();

      (0, _Services.getTaskListData)(_objectSpread({
        pageNum: _this.state.taskPageNum,
        pageSize: _this.state.taskPageSize
      }, params), function (res) {
        _this.setState({
          taskData: res.list || [],
          taskPageTotal: res.total
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deleteTask", function (record) {
      (0, _Services.deleteTask)({
        taskId: record.taskId
      }, function (res) {
        if (res.success) {
          _message2.default.success(res.msg);

          _this.getTaskListData();
        } else {
          _message2.default.error(res.msg);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addNewTask", function () {
      _this.setState({
        selectedRecord: {},
        taskModalType: 'new',
        taskModalVisible: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "editTask", function (selectedRecord) {
      (0, _Services.getTaskData)({
        taskId: selectedRecord.taskId
      }, function (response) {
        _this.setState({
          taskModalType: 'edit',
          taskModalVisible: true,
          selectedRecord: response
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "executeTask", function (record) {
      (0, _Services.executeTask)({
        taskId: record.taskId
      }, function (res) {
        if (res.success) {
          _message2.default.success(res.msg);

          _this.getTaskListData();
        } else {
          _message2.default.error(res.msg);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stopTask", function (record) {
      (0, _Services.stopTask)({
        taskId: record.taskId
      }, function (res) {
        if (res.success) {
          _message2.default.success(res.msg);

          _this.getTaskListData();
        } else {
          _message2.default.error(res.msg);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "viewTask", function (selectedRecord) {
      (0, _Services.getTaskData)({
        taskId: selectedRecord.taskId
      }, function (response) {
        _this.setState({
          taskModalType: 'view',
          taskModalVisible: true,
          selectedRecord: response
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.setState({
        errorModalVisible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSubmit", function (isReset) {
      //如果是重置
      if (isReset) {
        _this.setState({
          instancePageNum: 1,
          instancePageSize: 10,
          instancePageTotal: 0,
          instanceData: [],
          //任务实例数据
          selectedRowKeys: []
        }, function () {
          _this.getTaskListData();
        });
      } else {
        _this.setState({
          taskPageNum: 1,
          taskPageSize: 10
        }, function () {
          _this.getTaskListData();
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTaskChange", function (page, pageSize) {
      _this.setState({
        taskPageNum: page,
        taskPageSize: pageSize
      }, function () {
        _this.getTaskListData();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTaskSizeChange", function (page, pageSize) {
      _this.setState({
        taskPageNum: page,
        taskPageSize: pageSize
      }, function () {
        _this.getTaskListData();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleIncetanceChange", function (page, pageSize) {
      _this.setState({
        instancePageNum: page,
        instancePageSize: pageSize
      }, function () {
        _this.getTaskIncetanceListData();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleIncetanceSizeChange", function (page, pageSize) {
      _this.setState({
        instancePageNum: page,
        instancePageSize: pageSize
      }, function () {
        _this.getTaskIncetanceListData();
      });
    });
    _this.state = {
      taskModalType: '',
      taskModalVisible: false,
      errorMsg: '',
      errorModalVisible: false,
      taskPageNum: 1,
      taskPageSize: 10,
      taskPageTotal: 0,
      taskData: [],
      //任务列表数据
      instancePageNum: 1,
      instancePageSize: 10,
      instancePageTotal: 0,
      instanceData: [],
      //任务实例数据
      visibleNew: false,
      visibleEdit: false,
      visibleView: false,
      selectedRecord: {},
      selectedRowKeys: [],
      checkTaskId: ''
    };
    _this.searchForm = null;
    return _this;
  }
  /**
   * 关闭弹窗
   * @param isRefresh  是否刷新表格数据
   * @param key
   */


  (0, _createClass2.default)(TaskList, [{
    key: "handleClose",
    value: function handleClose(isRefresh) {
      var _this2 = this;

      this.setState({
        taskModalVisible: false
      }, function () {
        if (isRefresh) {
          _this2.getTaskListData();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTaskListData();
    }
    /**
     * 获取任务实例的数据
     */

  }, {
    key: "getSearchFormParams",
    value: function getSearchFormParams() {
      return this.searchForm.props.form.getFieldsValue();
    }
  }, {
    key: "getTaskColumns",

    /**
     * 获取任务的列
     * @returns {*[]}
     */
    value: function getTaskColumns() {
      var _this3 = this;

      return [{
        title: '任务名称',
        dataIndex: 'taskName',
        align: 'center',
        key: 'taskName'
      }, {
        title: '任务类型',
        dataIndex: 'taskType',
        align: 'center',
        key: 'taskType',
        render: function render(text) {
          return _this3.renderTaskType(text);
        }
      }, {
        title: '任务模板',
        dataIndex: 'taskClassDesc',
        align: 'center',
        key: 'taskClassDesc'
      }, {
        title: '任务状态',
        dataIndex: 'taskStatus',
        align: 'center',
        key: 'taskStatus',
        render: function render(text) {
          return _this3.renderTaskStatus(text);
        }
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
        align: 'center',
        key: 'createTime',
        render: function render(text) {
          return _this3.renderTime(text);
        }
      }, {
        title: '任务描述',
        dataIndex: 'taskDesc',
        align: 'center',
        key: 'taskDesc'
      }, {
        title: '操作',
        key: 'action',
        width: 320,
        align: 'center',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _this3.renderEditTaskBtn(record), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _this3.renderExeBtn(record), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            onClick: function onClick() {
              return _this3.viewTask(record);
            }
          }, _react.default.createElement(_icon.default, {
            type: "eye"
          }), "\u8BE6\u60C5"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _this3.renderDeleteTaskBtn(record));
        }
      }];
    }
    /**
     * 渲染任务编辑按钮
     */

  }, {
    key: "renderEditTaskBtn",
    value: function renderEditTaskBtn(record) {
      var _this4 = this;

      //如果是执行中：编辑和删除不可操作
      //如果执行完毕：删除：删除任务和实例   编辑：编辑不会影响任务实例
      if (record.taskStatus === 'executing') {
        return _react.default.createElement("a", {
          href: "javascript:void(0);",
          style: {
            color: 'rgba(0, 0, 0, 0.25)'
          }
        }, _react.default.createElement(_icon.default, {
          type: "edit"
        }), "\u7F16\u8F91");
      }

      return _react.default.createElement("a", {
        onClick: function onClick() {
          return _this4.editTask(record);
        }
      }, _react.default.createElement(_icon.default, {
        type: "edit"
      }), "\u7F16\u8F91");
    }
    /**
     * 渲染任务编辑按钮
     */

  }, {
    key: "renderDeleteTaskBtn",
    value: function renderDeleteTaskBtn(record) {
      var _this5 = this;

      if (record.taskStatus === 'executing') {
        return _react.default.createElement("a", {
          href: "javascript:void(0);",
          style: {
            color: 'rgba(0, 0, 0, 0.25)'
          }
        }, _react.default.createElement(_icon.default, {
          type: "close"
        }), "\u5220\u9664");
      }

      return _react.default.createElement(_popconfirm.default, {
        title: "\u786E\u8BA4\u5220\u9664?",
        onConfirm: function onConfirm() {
          return _this5.deleteTask(record);
        }
      }, _react.default.createElement("a", {
        href: "javascript:;"
      }, _react.default.createElement(_icon.default, {
        type: "close"
      }), "\u5220\u9664"));
    }
    /**
     * 渲染 执行/停止按钮
     * @param record
     * @returns {*}
     */

  }, {
    key: "renderExeBtn",
    value: function renderExeBtn(record) {
      var _this6 = this;

      //执行中
      if (record.taskStatus === 'executing') {
        return _react.default.createElement("a", {
          onClick: function onClick() {
            return _this6.stopTask(record);
          }
        }, _react.default.createElement(_alibabaIconfont.default, {
          type: "icon-tingzhi"
        }), "\u505C\u6B62");
      } else {
        return _react.default.createElement("a", {
          onClick: function onClick() {
            return _this6.executeTask(record);
          }
        }, _react.default.createElement(_icon.default, {
          type: "step-forward"
        }), "\u6267\u884C");
      }
    }
  }, {
    key: "renderTaskType",
    value: function renderTaskType(type) {
      if (type === 'immediately') {
        return _react.default.createElement("span", null, "\u7ACB\u5373\u6267\u884C");
      } else {
        return _react.default.createElement("span", null, "\u5B9A\u65F6\u6267\u884C");
      }
    }
  }, {
    key: "renderTaskStatus",
    value: function renderTaskStatus(status) {
      if (status === 'not_performed') {
        return _react.default.createElement("span", {
          style: {
            color: '#1890ff'
          }
        }, "\u672A\u6267\u884C");
      } else if (status === 'executing') {
        return _react.default.createElement("span", {
          style: {
            color: '#ff9500'
          }
        }, "\u6267\u884C\u4E2D");
      } else if (status === 'completed') {
        return _react.default.createElement("span", {
          style: {
            color: 'green'
          }
        }, "\u6267\u884C\u5B8C\u6BD5");
      }
    }
    /**
     * 获取任务实例的列
     * @returns {*[]}
     */

  }, {
    key: "getInstanceColumns",
    value: function getInstanceColumns() {
      var _this7 = this;

      return [{
        title: '所属任务名称',
        dataIndex: 'taskName',
        key: 'taskName',
        align: 'center'
      }, {
        title: '开始时间',
        dataIndex: 'beginTime',
        key: 'beginTime',
        align: 'center',
        render: function render(text) {
          return _this7.renderTime(text);
        }
      }, {
        title: '结束时间',
        dataIndex: 'endTime',
        key: 'endTime',
        align: 'center',
        render: function render(text) {
          return _this7.renderTime(text);
        }
      }, {
        title: '实例状态',
        dataIndex: 'instanceStatus',
        key: 'instanceStatus',
        align: 'center',
        render: function render(text) {
          return _this7.renderInstanceStatus(text);
        }
      }, {
        title: '错误名称',
        dataIndex: 'errorName',
        align: 'center',
        key: 'errorName'
      }, {
        title: '错误详情',
        dataIndex: 'errorDetail',
        align: 'center',
        key: 'errorDetail',
        render: function render(text, record) {
          return _this7.renderErrorDetail(text, record);
        }
      }];
    }
  }, {
    key: "renderErrorDetail",
    value: function renderErrorDetail(text, record) {
      var _this8 = this;

      if (record.instanceStatus !== 'failed') {
        return _react.default.createElement("span", null, "--");
      }

      return _react.default.createElement("a", {
        href: "javascript:void(0)",
        style: {
          color: 'red'
        },
        onClick: function onClick() {
          _this8.showErrorDetail(text);
        }
      }, "\u8BE6\u60C5");
    }
  }, {
    key: "showErrorDetail",
    value: function showErrorDetail(text) {
      this.setState({
        errorMsg: text || '无',
        errorModalVisible: true
      });
    }
  }, {
    key: "renderInstanceStatus",
    value: function renderInstanceStatus(status) {
      if (status === 'failed') {
        return _react.default.createElement("span", {
          style: {
            color: 'red'
          }
        }, "\u6267\u884C\u5931\u8D25");
      } else if (status === 'executing') {
        return _react.default.createElement("span", {
          style: {
            color: '#ff9500'
          }
        }, "\u6267\u884C\u4E2D");
      } else if (status === 'success') {
        return _react.default.createElement("span", {
          style: {
            color: 'green'
          }
        }, "\u6267\u884C\u6210\u529F");
      }
    }
  }, {
    key: "renderTime",
    value: function renderTime(text) {
      if (text === '' || text === null) {
        return '--';
      } else {
        return _react.default.createElement("span", null, (0, _moment.default)(text).format('YYYY-MM-DD HH:mm:ss'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
          _this9.setState({
            selectedRowKeys: selectedRowKeys
          }, function () {
            _this9.getTaskIncetanceListData();
          });
        }
      };
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_breadcrumb.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_breadcrumb.default.Item, null, "\u9996\u9875"), _react.default.createElement(_breadcrumb.default.Item, null, _react.default.createElement("a", {
        href: ""
      }, "\u4EFB\u52A1"))), _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        style: {
          padding: '24px'
        }
      }, _react.default.createElement(_SearchForm.default, {
        wrappedComponentRef: function wrappedComponentRef(ref) {
          return _this9.searchForm = ref;
        },
        handleSubmit: this.handleSubmit
      }), _react.default.createElement(_row.default, null, _react.default.createElement("div", {
        style: {
          float: 'right'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.addNewTask,
        style: {
          marginRight: '10px'
        }
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }), "\u521B\u5EFA"))), _react.default.createElement(_row.default, {
        style: {
          margin: '10px 0'
        }
      }, _react.default.createElement("span", {
        className: "task-title"
      }, "\u4EFB\u52A1\u5217\u8868")), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        bordered: true,
        className: "bonc-mung-ant-table",
        rowSelection: rowSelection,
        columns: this.getTaskColumns(),
        dataSource: this.state.taskData,
        pagination: {
          showTotal: function showTotal(total, range) {
            return "".concat(range[0], "-").concat(range[1], " \u5171 ").concat(total, " \u6761");
          },
          current: this.state.taskPageNum,
          pageSize: this.state.taskPageSize,
          total: this.state.taskPageTotal,
          onChange: function onChange(current, size) {
            _this9.handleTaskChange(current, size);
          },
          onShowSizeChange: function onShowSizeChange(current, size) {
            _this9.handleTaskSizeChange(current, size);
          }
        }
      })), _react.default.createElement(_row.default, {
        style: {
          margin: '10px 0'
        }
      }, _react.default.createElement("span", {
        className: "task-title"
      }, "\u4EFB\u52A1\u5B9E\u4F8B")), _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        rowKey: function rowKey(record) {
          return record.id;
        },
        bordered: true,
        className: "bonc-mung-ant-table",
        columns: this.getInstanceColumns(),
        dataSource: this.state.instanceData,
        pagination: {
          showTotal: function showTotal(total, range) {
            return "".concat(range[0], "-").concat(range[1], " \u5171 ").concat(total, " \u6761");
          },
          current: this.state.instancePageNum,
          pageSize: this.state.instancePageSize,
          total: this.state.instanceTotal,
          onChange: function onChange(current, size) {
            _this9.handleIncetanceChange(current, size);
          },
          onShowSizeChange: function onShowSizeChange(current, size) {
            _this9.handleIncetanceSizeChange(current, size);
          }
        }
      })), _react.default.createElement(_TaskModal.default, {
        type: this.state.taskModalType,
        selectedRecord: _objectSpread({}, this.state.selectedRecord),
        visible: this.state.taskModalVisible,
        handleClose: function handleClose(isRefresh) {
          _this9.handleClose(isRefresh);
        }
      }), _react.default.createElement(_modal.default, {
        title: "\u9519\u8BEF\u8BE6\u60C5",
        visible: this.state.errorModalVisible,
        footer: [_react.default.createElement(_button.default, {
          onClick: this.handleCancel
        }, "\u5173\u95ED")],
        onCancel: this.handleCancel
      }, this.state.errorMsg)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TaskList;
}(_react.default.Component);

var _default = TaskList;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TaskList, "TaskList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();