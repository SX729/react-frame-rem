"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAuthorizationToken = setAuthorizationToken;
exports.getAuthorizationToken = getAuthorizationToken;
exports.setUserInfo = setUserInfo;
exports.getUserInfo = getUserInfo;
exports.getUserName = getUserName;
exports.getLoginId = getLoginId;
exports.isLogin = isLogin;
exports.logout = logout;
exports.setUserPermissions = setUserPermissions;
exports.getUserPermissions = getUserPermissions;

var _webStorage = _interopRequireDefault(require("webStorage"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * 写入认证令牌登陆
 * @param successFn
 */
function setAuthorizationToken(token) {
  _webStorage.default.setItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN', token);
}
/**
 * 获取认证令牌登陆
 * @param successFn
 */


function getAuthorizationToken() {
  return _webStorage.default.getItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN');
}
/**
 * 写入用户信息
 * @param successFn
 */


function setUserInfo(userInfo) {
  _webStorage.default.setItem('BONC_INDUSTRY_USERINFO', JSON.stringify(userInfo));
}
/**
 * 获取用户信息
 * @param successFn
 */


function getUserInfo() {
  return JSON.parse(_webStorage.default.getItem('BONC_INDUSTRY_USERINFO'));
}
/**
 * 获取用户名字
 * @param successFn
 */


function getUserName() {
  return (getUserInfo() || {})['name'];
}
/**
 * 获取用户登陆名称
 * @param successFn
 */


function getLoginId() {
  return (getUserInfo() || {})['username'];
}
/**
 * 是否登陆
 */


function isLogin() {
  return getAuthorizationToken() != null;
}
/**
 * 登出
 */


function logout() {
  _webStorage.default.removeItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN');

  _webStorage.default.removeItem('BONC_INDUSTRY_USERINFO');
}

function setUserPermissions(permissions) {
  _webStorage.default.setItem('BONC_INDUSTRY_PERMISSIONS', JSON.stringify(permissions));
}

function getUserPermissions(url) {
  var permissions = JSON.parse(_webStorage.default.getItem('BONC_INDUSTRY_PERMISSIONS')) || [];
  var resource = {
    children: []
  };
  permissions.map(function (menu) {
    if (url === menu.href) {
      Object.assign(resource, menu);
    }
  });
  permissions.map(function (menu) {
    if (menu.parentId === resource.id) {
      resource.children.push(Object.assign({}, menu));
    }
  });
  return resource;
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setAuthorizationToken, "setAuthorizationToken", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(getAuthorizationToken, "getAuthorizationToken", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(setUserInfo, "setUserInfo", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(getUserInfo, "getUserInfo", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(getUserName, "getUserName", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(getLoginId, "getLoginId", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(isLogin, "isLogin", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(logout, "logout", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(setUserPermissions, "setUserPermissions", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
  reactHotLoader.register(getUserPermissions, "getUserPermissions", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\Storage.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();