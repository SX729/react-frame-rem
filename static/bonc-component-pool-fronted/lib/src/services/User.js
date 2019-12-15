"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoginUserInfo = getLoginUserInfo;
exports.getLoginUserExtInfo = getLoginUserExtInfo;

var _utils = require("../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * 获取登陆用户信息
 */
function getLoginUserInfo() {
  return _utils.axios.get('/api/sloginUserInfo');
}
/**
 * 获取登陆用户扩展信息
 */


function getLoginUserExtInfo() {
  return _utils.axios.get('/api/sloginUserExtInfo');
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getLoginUserInfo, "getLoginUserInfo", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\services\\User.js");
  reactHotLoader.register(getLoginUserExtInfo, "getLoginUserExtInfo", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\services\\User.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();