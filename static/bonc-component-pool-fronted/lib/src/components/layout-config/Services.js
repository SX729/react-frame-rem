"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryPlate = queryPlate;
exports.deletePlate = deletePlate;
exports.updatePage = updatePage;
exports.addNewPage = addNewPage;
exports.registerCmp = registerCmp;
exports.updateCmp = updateCmp;
exports.deleteCmp = deleteCmp;
exports.addClassify = addClassify;
exports.editClassify = editClassify;
exports.deleteClassify = deleteClassify;
exports.getIndicatorPanelLibData = getIndicatorPanelLibData;
exports.getPageData = getPageData;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../../utils");

var _querystring = require("querystring");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function queryPlate(params) {
  return _utils.axios.post("/pageinfo/search", params);
}

function deletePlate(params) {
  return _utils.axios.get("/pageinfo/delete?".concat((0, _querystring.stringify)(params)));
}

function updatePage(params) {
  return _utils.axios.post("/pageinfo/update", params);
}

function addNewPage(params) {
  return _utils.axios.post("/pageinfo/add", params);
}
/**
 * 注册组件
 * @param {*} params 
 */


function registerCmp(params, sucFn) {
  return _utils.axios.post("/r-pagecomponent/add", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 更新注册组件
 * @param {*} params 
 */


function updateCmp(params, sucFn) {
  return _utils.axios.post("/r-pagecomponent/update", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 删除注册组件
 * @param {*} params 
 */


function deleteCmp(params, sucFn) {
  return _utils.axios.get("/r-pagecomponent/del", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 新增分类
 * @param {*} params 
 */


function addClassify(params, sucFn) {
  return _utils.axios.post("/r-pagecomponentclassify/add", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 编辑分类
 * @param {*} params 
 */


function editClassify(params, sucFn) {
  return _utils.axios.post("/r-pagecomponentclassify/update", _objectSpread({}, params)).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 删除分类
 * @param {*} params 
 */


function deleteClassify(params, sucFn) {
  return _utils.axios.get("/r-pagecomponentclassify/del", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 初始化指标面板库
 * @param {*} params 
 */


function getIndicatorPanelLibData(params, sucFn) {
  return _utils.axios.get("/r-pagecomponent/treeList", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}
/**
 * 获取页面数据
 * @param {*} params 
 */


function getPageData(params, sucFn) {
  return _utils.axios.get("pageinfo/searchById", {
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

  reactHotLoader.register(queryPlate, "queryPlate", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(deletePlate, "deletePlate", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(updatePage, "updatePage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(addNewPage, "addNewPage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(registerCmp, "registerCmp", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(updateCmp, "updateCmp", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(deleteCmp, "deleteCmp", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(addClassify, "addClassify", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(editClassify, "editClassify", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(deleteClassify, "deleteClassify", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(getIndicatorPanelLibData, "getIndicatorPanelLibData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
  reactHotLoader.register(getPageData, "getPageData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\Services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();