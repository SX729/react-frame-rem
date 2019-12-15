"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskTpls = getTaskTpls;
exports.addNewTask = addNewTask;
exports.updateTask = updateTask;
exports.getTaskData = getTaskData;
exports.getTaskListData = getTaskListData;
exports.getTaskIncetanceListData = getTaskIncetanceListData;
exports.executeTask = executeTask;
exports.deleteTask = deleteTask;
exports.stopTask = stopTask;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("@/utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * 获取任务模板下拉数据
 * @returns {*}
 */
function getTaskTpls(params, sucFn) {
  return _utils.axios.get("/r-task/template", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 新增任务
 * @param params
 * @returns {*}
 */


function addNewTask(params, sucFn) {
  return _utils.axios.post("/r-task/add", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 编辑任务
 * @param params
 * @returns {*}
 */


function updateTask(params, sucFn) {
  return _utils.axios.post("/r-task/update", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 获取任务详情
 * @param params
 * @returns {*}
 */


function getTaskData(params, sucFn) {
  return _utils.axios.get("/r-task/detail", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 任务列表
 * @param params
 * @returns {*}
 */


function getTaskListData(params, sucFn) {
  return _utils.axios.get("/r-task/listPage", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 任务实例列表
 * @param params
 * @returns {*}
 */


function getTaskIncetanceListData(params, sucFn) {
  return _utils.axios.get("/r-taskInstance/listPage", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 任务执行
 * @param params
 * @returns {*}
 */


function executeTask(params, sucFn) {
  return _utils.axios.get("/r-task/execute", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 任务删除
 * @param params
 * @returns {*}
 */


function deleteTask(params, sucFn) {
  return _utils.axios.get("/r-task/del", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 任务停止
 * @param params
 * @returns {*}
 */


function stopTask(params, sucFn) {
  return _utils.axios.get("/r-task/stop", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTaskTpls, "getTaskTpls", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(addNewTask, "addNewTask", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(updateTask, "updateTask", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(getTaskData, "getTaskData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(getTaskListData, "getTaskListData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(getTaskIncetanceListData, "getTaskIncetanceListData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(executeTask, "executeTask", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(deleteTask, "deleteTask", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
  reactHotLoader.register(stopTask, "stopTask", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\task-list\\Services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();