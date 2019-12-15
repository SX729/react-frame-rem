"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

require("antd/es/time-picker/style");

var _timePicker = _interopRequireDefault(require("antd/es/time-picker"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/cascader/style");

var _cascader = _interopRequireDefault(require("antd/es/cascader"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _Services = require("./Services");

var _moment = _interopRequireDefault(require("moment"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var FormItem = _form.default.Item;

function initTime(value) {
  if (!value) {
    return null;
  }

  var exeCycle = value.exeCycle,
      time = value.time;

  if (time === '' || time === null) {
    return null;
  } //如果是预约执行


  if (!exeCycle || exeCycle instanceof Array && exeCycle.length < 1) {
    return null;
  }

  if (exeCycle[0] === 'reservation') {
    return (0, _moment.default)(time, 'YYYY-MM-DD HH:mm:ss');
  } else {
    return (0, _moment.default)(time, 'HH:mm:ss');
  }
}
/**
 * 是否是预约执行
 */


function isReservation(exeCycle) {
  return exeCycle[0] === 'reservation';
}

var TaskExeTime =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TaskExeTime, _React$Component);
  (0, _createClass2.default)(TaskExeTime, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // Should be a controlled component.
      if ('value' in nextProps) {
        return {
          exeCycle: nextProps.value ? nextProps.value.exeCycle || '' : '',
          //周期方式
          time: initTime(nextProps.value)
        };
      }

      return null;
    }
  }]);

  function TaskExeTime(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TaskExeTime);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaskExeTime).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerChange", function (changedValue) {
      // Should provide an event to pass value to Form.
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(Object.assign({}, _this.state, changedValue));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onExeCycleChange", function (exeCycle) {
      if (!('value' in _this.props)) {
        _this.setState({
          exeCycle: exeCycle
        });
      }

      _this.triggerChange({
        exeCycle: exeCycle,
        time: ''
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTimeChange", function (time) {
      if (!('value' in _this.props)) {
        _this.setState({
          time: time
        });
      }

      var formatStr = isReservation(_this.state.exeCycle) ? 'YYYY-MM-DD HH:mm:ss' : 'HH:mm:ss';

      _this.triggerChange({
        time: time === null ? '' : time.format(formatStr)
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "disabledDate", function (current) {
      return current && current < (0, _moment.default)().endOf('day').subtract(1, 'days');
    });
    var value = props.value || {};
    _this.state = {
      exeCycle: value.exeCycle || '',
      //周期方式
      time: initTime(value)
    };
    _this.weekCNLabel = _this.getWeekCNLabel();
    return _this;
  }

  (0, _createClass2.default)(TaskExeTime, [{
    key: "getExeCycleOptions",

    /**
     * 返回执行周期option
     */
    value: function getExeCycleOptions() {
      return [{
        value: 'day',
        label: '每天'
      }, {
        value: 'week',
        label: '每周',
        children: this.generateWeekOptions()
      }, {
        value: 'month',
        label: '每月',
        children: this.generateMonthOptions()
      }, {
        value: 'reservation',
        label: '预约'
      }];
    }
    /**
     * 生成周的数据
     */

  }, {
    key: "generateWeekOptions",
    value: function generateWeekOptions() {
      var arr = [];

      for (var i = 0; i < 7; i++) {
        arr.push({
          value: String(i),
          label: this.weekCNLabel[i]
        });
      }

      return arr;
    }
    /**
     * 返回中文的周几
     * @param num
     */

  }, {
    key: "getWeekCNLabel",
    value: function getWeekCNLabel() {
      return {
        0: '周日',
        1: '周一',
        2: '周二',
        3: '周三',
        4: '周四',
        5: '周五',
        6: '周六'
      };
    }
    /**
     * 返回中文的几号
     */

  }, {
    key: "generateMonthOptions",
    value: function generateMonthOptions() {
      var arr = [];

      for (var i = 1; i < 29; i++) {
        arr.push({
          value: String(i),
          label: i + '号'
        });
      }

      return arr;
    }
    /**
     * 处理执行周期方式变化
     * @param exeCycle
     */

  }, {
    key: "isView",
    value: function isView() {
      return this.props.type === 'view';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          exeCycle = _this$state.exeCycle,
          time = _this$state.time;
      return _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 11
      }, _react.default.createElement(_cascader.default, {
        disabled: this.isView(),
        onChange: this.onExeCycleChange,
        value: exeCycle,
        options: this.getExeCycleOptions(),
        placeholder: "\u8BF7\u9009\u62E9"
      })), _react.default.createElement(_col.default, {
        span: 2
      }), _react.default.createElement(_col.default, {
        span: 11
      }, !isReservation(exeCycle) ? _react.default.createElement(_timePicker.default, {
        disabled: this.isView(),
        value: time,
        placeholder: "\u8BF7\u9009\u62E9",
        onChange: this.onTimeChange
      }) : _react.default.createElement(_datePicker.default, {
        disabledDate: this.disabledDate,
        showTime: true,
        disabled: this.isView(),
        format: "YYYY-MM-DD HH:mm:ss",
        value: time,
        placeholder: "\u8BF7\u9009\u62E9",
        onChange: this.onTimeChange
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TaskExeTime;
}(_react.default.Component);

var TaskModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TaskModal, _Component);

  function TaskModal(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, TaskModal);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaskModal).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "onSubmit", function () {
      var thiz = (0, _assertThisInitialized2.default)(_this2);
      var type = thiz.props.type; // 校验参数

      thiz.props.form.validateFieldsAndScroll(function (errors, value) {
        var taskType = value.taskType; //如果是周期执行

        if (taskType === 'timing') {
          var effectiveTime = value.effectiveTime;

          if (effectiveTime) {
            value.planBeginTime = effectiveTime[0] === null ? '' : effectiveTime[0].format('YYYY-MM-DD');
            value.planEndTime = effectiveTime[1] === null ? '' : effectiveTime[1].format('YYYY-MM-DD');
          }

          delete value.effectiveTime;
        } // 如果校验通过


        if (!errors) {
          if (type === 'new') {
            (0, _Services.addNewTask)(value, function (res) {
              if (res.success) {
                thiz.closeModal(true);

                _message2.default.success(res.msg);
              } else {
                _message2.default.error(res.msg);
              }
            });
          } else {
            (0, _Services.updateTask)(_objectSpread({}, value, {
              taskId: _this2.props.selectedRecord.taskId
            }), function (res) {
              if (res.success) {
                thiz.setState({});
                thiz.closeModal(true);

                _message2.default.success(res.msg);
              } else {
                _message2.default.error(res.msg);
              }
            });
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "closeModal", function (isRefresh) {
      _this2.props.form.resetFields();

      _this2.props.handleClose(isRefresh);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "onTaskTypeChange", function (e) {
      _this2.setState({
        taskType: e.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "validateTimingParameter", function (rule, value, callbackFn) {
      if (value.exeCycle === '' || value.exeCycle === null || value.exeCycle.length === 0 || value.time === '' || value.time === null) {
        callbackFn('请选择有效的执行时间');
      }

      callbackFn();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "disabledDate", function (current) {
      return current && current < (0, _moment.default)().endOf('day').subtract(1, 'days');
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "onTaskCycleTypeChange", function (val) {
      var exeCycle = val.exeCycle;

      _this2.setState({
        taskCycleType: exeCycle[0]
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "renderTaskCycleParameter", function () {
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
      var getFieldDecorator = _this2.props.form.getFieldDecorator;
      var selectedRecord = _this2.props.selectedRecord;
      var arr = [];

      if (_this2.state.taskType === 'timing') {
        arr.push(_react.default.createElement(FormItem, (0, _extends2.default)({
          key: "exeTime",
          label: "\u6267\u884C\u65F6\u95F4"
        }, formItemLayout), getFieldDecorator('timingParameter', {
          initialValue: _this2.isNew() ? {
            exeCycle: ['day'],
            time: ''
          } : selectedRecord['timingParameter'],
          rules: [{
            required: !_this2.isView(),
            message: '请选择执行时间'
          }, {
            validator: _this2.validateTimingParameter
          }]
        })(_react.default.createElement(TaskExeTime, (0, _extends2.default)({}, _this2.props, {
          onChange: _this2.onTaskCycleTypeChange
        })))));

        if (_this2.state.taskCycleType !== 'reservation') {
          arr.push(_react.default.createElement(FormItem, (0, _extends2.default)({
            key: "effectiveTime",
            label: "\u6709\u6548\u65F6\u95F4"
          }, formItemLayout), getFieldDecorator('effectiveTime', {
            initialValue: _this2.isNew() ? [] : _this2.initEffectiveTime(),
            rules: [{
              required: !_this2.isView(),
              message: '请选择有效时间'
            }]
          })(_react.default.createElement(_datePicker.default.RangePicker, {
            disabledDate: _this2.disabledDate,
            disabled: _this2.isView()
          }))));
        }
      }

      return arr;
    });
    _this2.state = {
      taskTpls: [],
      taskType: 'immediately',
      //默认是立即执行
      taskCycleType: 'day' //周期方式：每天   周  月  预约

    };
    return _this2;
  }

  (0, _createClass2.default)(TaskModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTaskTpls();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var selectedRecord = nextProps.selectedRecord;

      if (this.props.selectedRecord !== selectedRecord) {
        var obj = {
          taskType: selectedRecord.taskType || 'immediately'
        };

        if (selectedRecord.taskType === 'timing') {
          obj.taskCycleType = selectedRecord.timingParameter.exeCycle[0] || 'day';
        }

        this.setState(_objectSpread({}, obj));
      }
    }
  }, {
    key: "initTaskType",
    value: function initTaskType(selectedRecord) {
      return this.isNew() ? 'immediately' : selectedRecord['taskType'];
    }
  }, {
    key: "initTaskCycleType",
    value: function initTaskCycleType(selectedRecord) {
      var taskType = selectedRecord.taskType,
          timingParameter = selectedRecord.timingParameter;

      if (this.isNew()) {
        return 'day';
      }

      if (taskType === 'immediately') {
        return '';
      } else {
        if (!timingParameter || !timingParameter.exeCycle || timingParameter.exeCycle.length === 0) {
          return '';
        }

        return timingParameter.exeCycle[0];
      }
    }
  }, {
    key: "isView",
    value: function isView() {
      return this.props.type === 'view';
    }
    /**
     * 获取任务模板的数据
     */

  }, {
    key: "getTaskTpls",
    value: function getTaskTpls() {
      var _this3 = this;

      (0, _Services.getTaskTpls)({}, function (response) {
        _this3.setState({
          taskTpls: response || []
        });
      });
    }
    /**
     * 事件-提交
     */

  }, {
    key: "initEffectiveTime",
    value: function initEffectiveTime() {
      var dateFormat = 'YYYY-MM-DD';
      var _this$props$selectedR = this.props.selectedRecord,
          planBeginTime = _this$props$selectedR.planBeginTime,
          planEndTime = _this$props$selectedR.planEndTime;
      var beginTime = !planBeginTime ? null : (0, _moment.default)(planBeginTime, dateFormat);
      var endTime = !planEndTime ? null : (0, _moment.default)(planEndTime, dateFormat);
      return [beginTime, endTime];
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      if (this.props.type === 'new') {
        return '创建任务';
      } else if (this.props.type === 'edit') {
        return '编辑任务';
      } else {
        return '查看任务';
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
      var _this4 = this;

      var arr = [];

      if (!this.isView()) {
        arr.push(_react.default.createElement(_button.default, {
          key: "submit",
          type: "primary",
          onClick: function onClick() {
            _this4.onSubmit();
          }
        }, "\u63D0\u4EA4"));
      }

      arr.push(_react.default.createElement(_button.default, {
        key: "close",
        type: "danger",
        onClick: function onClick() {
          _this4.closeModal(false);
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
      var _this5 = this;

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
          _this5.props.handleClose(false);
        },
        footer: this.renderFooter()
      }, _react.default.createElement(_form.default, null, _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u4EFB\u52A1\u540D\u79F0"
      }, formItemLayout), getFieldDecorator('taskName', {
        initialValue: this.initItem('taskName'),
        rules: [{
          required: !this.isView(),
          message: '请输入任务名称'
        }]
      })(_react.default.createElement(_input.default, {
        disabled: this.isView(),
        placeholder: this.initTipMsg('任务名称')
      }))), _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u4EFB\u52A1\u6A21\u677F"
      }, formItemLayout), getFieldDecorator('taskClassId', {
        initialValue: this.initItem('taskClassId'),
        rules: [{
          required: !this.isView(),
          message: '请选择任务模板'
        }]
      })(_react.default.createElement(_select.default, {
        placeholder: this.initTipMsg('任务模板'),
        disabled: this.isView()
      }, this.state.taskTpls && this.state.taskTpls.map(function (item) {
        return _react.default.createElement(_select.default.Option, {
          key: item.templateCode,
          value: item.templateCode
        }, item.templateName);
      })))), _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u4EFB\u52A1\u53C2\u6570"
      }, formItemLayout), getFieldDecorator('taskParameter', {
        initialValue: this.initItem('taskParameter'),
        rules: [{
          required: false
        }]
      })(_react.default.createElement(_input.default.TextArea, {
        disabled: this.isView(),
        placeholder: this.initTipMsg('任务参数')
      }))), _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u4EFB\u52A1\u7C7B\u578B"
      }, formItemLayout), getFieldDecorator('taskType', {
        initialValue: this.state.taskType,
        rules: [{
          required: !this.isView()
        }]
      })(_react.default.createElement(_radio.default.Group, {
        onChange: this.onTaskTypeChange,
        disabled: this.isView()
      }, _react.default.createElement(_radio.default, {
        value: "immediately"
      }, "\u7ACB\u5373\u6267\u884C"), _react.default.createElement(_radio.default, {
        value: "timing"
      }, "\u5B9A\u65F6\u6267\u884C")))), this.renderTaskCycleParameter(), _react.default.createElement(FormItem, (0, _extends2.default)({
        label: "\u4EFB\u52A1\u63CF\u8FF0"
      }, formItemLayout), getFieldDecorator('taskDesc', {
        initialValue: this.initItem('taskDesc'),
        rules: [{
          required: false,
          message: '请输入任务描述'
        }]
      })(_react.default.createElement(_input.default.TextArea, {
        disabled: this.isView(),
        placeholder: this.initTipMsg('任务描述')
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
  return TaskModal;
}(_react.Component);

var _default = _form.default.create()(TaskModal);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, "FormItem", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
  reactHotLoader.register(initTime, "initTime", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
  reactHotLoader.register(isReservation, "isReservation", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
  reactHotLoader.register(TaskExeTime, "TaskExeTime", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
  reactHotLoader.register(TaskModal, "TaskModal", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\TaskModal.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();