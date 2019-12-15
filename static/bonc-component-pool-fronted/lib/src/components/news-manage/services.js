"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageList = messageList;
exports.messageDelete = messageDelete;
exports.getMsgData = getMsgData;
exports.addMsg = addMsg;
exports.getUserList = getUserList;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function messageList(params) {
  return _utils.axios.get("/message/list", {
    params: params
  });
}

function messageDelete(params) {
  return _utils.axios.post("/message/delete", params);
}

function getMsgData(params, sucFn) {
  return _utils.axios.get("/message/detail", {
    params: _objectSpread({}, params)
  }).then(function (res) {
    sucFn(res.data);
  });
}

function addMsg(params, sucFn) {
  return _utils.axios.post("/message/add", params).then(function (res) {
    sucFn(res.data);
  });
}

function getUserList(params, sucFn) {
  return _utils.axios.get("/message/users", {
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

  reactHotLoader.register(messageList, "messageList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\services.js");
  reactHotLoader.register(messageDelete, "messageDelete", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\services.js");
  reactHotLoader.register(getMsgData, "getMsgData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\services.js");
  reactHotLoader.register(addMsg, "addMsg", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\services.js");
  reactHotLoader.register(getUserList, "getUserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\news-manage\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();