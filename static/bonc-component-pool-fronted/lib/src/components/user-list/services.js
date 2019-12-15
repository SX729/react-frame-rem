"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserList = findUserList;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.activeUser = activeUser;
exports.deleteUserMore = deleteUserMore;
exports.resetPassword = resetPassword;
exports.checkUsername = checkUsername;

var _utils = require("../../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function findUserList(pageNum, params) {
  return _utils.axios.post("/admin/user/list?pageSize=10&pageNum=".concat(pageNum), params);
}

function addUser(data) {
  return _utils.axios.post('/admin/user', data);
}

function updateUser(data) {
  return _utils.axios.put('/admin/user', data);
}

function deleteUser(id) {
  return _utils.axios.delete("/admin/user/".concat(id));
}

function activeUser(id) {
  return _utils.axios.post("/admin/user/active/".concat(id));
}

function deleteUserMore(data) {
  return _utils.axios.post("/admin/user/more", data);
}

function resetPassword(params) {
  return _utils.axios.get("/admin/user/resetPassword", {
    params: params
  });
}

function checkUsername(username) {
  return _utils.axios.get("/admin/user/username/".concat(username), {
    showLoading: false
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(findUserList, "findUserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(addUser, "addUser", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(updateUser, "updateUser", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(deleteUser, "deleteUser", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(activeUser, "activeUser", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(deleteUserMore, "deleteUserMore", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(resetPassword, "resetPassword", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
  reactHotLoader.register(checkUsername, "checkUsername", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\user-list\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();