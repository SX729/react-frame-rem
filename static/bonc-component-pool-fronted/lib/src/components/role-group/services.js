"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findGroupTypeList = findGroupTypeList;
exports.findUserList = findUserList;
exports.findRoleUserList = findRoleUserList;
exports.insertUserRoleBatch = insertUserRoleBatch;
exports.deleteUserRoleBatch = deleteUserRoleBatch;
exports.findGroupList = findGroupList;
exports.addGroup = addGroup;
exports.deleteGroup = deleteGroup;
exports.editGroup = editGroup;
exports.findMenuTreeList = findMenuTreeList;
exports.getAuthedMenuList = getAuthedMenuList;
exports.authMenuToGroup = authMenuToGroup;

var _utils = require("@/utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function findGroupTypeList() {
  return _utils.axios.post("/admin/groupType/list?pageSize=9999999&pageNum=1", {});
}

function findUserList() {
  return _utils.axios.post("/admin/user/list?pageSize=9999999&pageNum=1", {
    enabled: 1
  });
}

function findRoleUserList(groupId) {
  return _utils.axios.post("/admin/userGroupRel/list?pageSize=9999999&pageNum=1", {
    groupId: groupId
  });
}

function insertUserRoleBatch(groupId, groupType, list) {
  return _utils.axios.post("/admin/userGroupRel/insertBatch", {
    groupId: groupId,
    groupType: groupType,
    userIds: list
  });
}

function deleteUserRoleBatch(groupId, groupType, list) {
  return _utils.axios.post("/admin/userGroupRel/deleteBatch", {
    groupId: groupId,
    groupType: groupType,
    userIds: list
  });
}

function findGroupList(params) {
  return _utils.axios.post("/admin/group/list?pageSize=9999999&pageNum=1", params).then(function (res) {
    var items = res.data.groupPageInfo.list;
    var data = [];
    var parentIds = res.data.parentId;
    parentIds.map(function (parItem, parIndex) {
      items.map(function (item) {
        if (item.parentId === parItem) {
          //获取父元素
          var o = createMenuNode(item, items);
          data.push(o);
        }
      });
    });
    return data;
  });
}

function addGroup(params) {
  return _utils.axios.post("/admin/group/", params);
}

function deleteGroup(params) {
  return _utils.axios.delete("/admin/group/" + params.id, {});
}

function editGroup(params) {
  return _utils.axios.put("/admin/group/", params);
}
/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */


function findMenuTreeList(param) {
  return _utils.axios.post("/admin/menu/list?pageSize=999999&pageNum=1", param).then(function (res) {
    var items = res.data.list;
    var menus = [];
    items.map(function (item) {
      menus.push(Object.assign({}, item));
    });
    return menus;
  }).then(function (menus) {
    var menutrees = [];
    menus.map(function (item) {
      if (item.parentId === '0') {
        //获取父元素
        var o = createMenuNode(item, menus);
        menutrees.push(o);
      }
    });
    return menutrees;
  });
}
/**
 * 获取已授权的菜单list 不分页
 * @param {*} param 
 */


function getAuthedMenuList(param) {
  return _utils.axios.post("/admin/groupResourceRel/list", param).then(function (res) {
    var keys = [];
    res.data.map(function (item) {
      keys.push(item.resourceId);
    });
    console.log(res);
    return keys;
  });
} // 授权动作


function authMenuToGroup(param) {
  return _utils.axios.post("/admin/groupResourceRel/insertBatch", param);
}
/**
 * 递归遍历生成菜单节点
 * @param {*} item 
 * @param {*} items 
 */


function createMenuNode(item, items) {
  var children = [];
  items.map(function (data) {
    if (data.parentId === item.id) {
      createMenuNode(data, items);
      children.push(data);
    }
  });

  if (children.length > 0) {
    item.children = children;
  }

  return item;
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(findGroupTypeList, "findGroupTypeList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(findUserList, "findUserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(findRoleUserList, "findRoleUserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(insertUserRoleBatch, "insertUserRoleBatch", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(deleteUserRoleBatch, "deleteUserRoleBatch", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(findGroupList, "findGroupList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(addGroup, "addGroup", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(deleteGroup, "deleteGroup", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(editGroup, "editGroup", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(findMenuTreeList, "findMenuTreeList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(getAuthedMenuList, "getAuthedMenuList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(authMenuToGroup, "authMenuToGroup", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
  reactHotLoader.register(createMenuNode, "createMenuNode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\role-group\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();