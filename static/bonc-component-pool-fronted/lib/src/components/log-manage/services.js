"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logsList = logsList;
exports.logsDelete = logsDelete;

var _utils = require("@/utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function logsList(params) {
  return _utils.axios.post("/sys/logs/list", params);
}

function logsDelete(params) {
  return _utils.axios.post("/sys/logs/delete", params);
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(logsList, "logsList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\log-manage\\services.js");
  reactHotLoader.register(logsDelete, "logsDelete", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\log-manage\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();