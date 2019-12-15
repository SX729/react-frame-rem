"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findGroupTypeList = findGroupTypeList;
exports.addGroupType = addGroupType;
exports.updateGroupType = updateGroupType;
exports.deleteGroupType = deleteGroupType;
exports.checkGroupTypeCode = checkGroupTypeCode;

var _utils = require("@/utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function findGroupTypeList(pageNum, params) {
  return _utils.axios.post("/admin/groupType/list?pageSize=10&pageNum=".concat(pageNum), params);
}

function addGroupType(data) {
  return _utils.axios.post('/admin/groupType', data);
}

function updateGroupType(data) {
  return _utils.axios.put('/admin/groupType', data);
}

function deleteGroupType(id) {
  return _utils.axios.delete("/admin/groupType/".concat(id));
}

function checkGroupTypeCode(code) {
  return _utils.axios.get("/admin/groupType/validateByCode/".concat(code));
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(findGroupTypeList, "findGroupTypeList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\services.js");
  reactHotLoader.register(addGroupType, "addGroupType", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\services.js");
  reactHotLoader.register(updateGroupType, "updateGroupType", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\services.js");
  reactHotLoader.register(deleteGroupType, "deleteGroupType", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\services.js");
  reactHotLoader.register(checkGroupTypeCode, "checkGroupTypeCode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-type\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();