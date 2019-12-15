"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageList = messageList;
exports.markedAsRead = markedAsRead;

var _utils = require("../../../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function messageList(params) {
  return _utils.axios.get("/message/loginUserList", {
    params: params
  });
}
/**
 * 标记为已读
 * @param {} params 
 */


function markedAsRead(params, sucFn) {
  return _utils.axios.get("/message/changeReadState", {
    params: params
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

  reactHotLoader.register(messageList, "messageList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\services.js");
  reactHotLoader.register(markedAsRead, "markedAsRead", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();