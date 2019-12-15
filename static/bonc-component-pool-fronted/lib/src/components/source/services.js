"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findMenuTreeList = findMenuTreeList;
exports.updateMenu = updateMenu;
exports.addMenu = addMenu;
exports.deleteMenu = deleteMenu;

var _utils = require("../../utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */
function findMenuTreeList(param) {
  return _utils.axios.post("/admin/menu/list?pageSize=999999&pageNum=1", param).then(function (res) {
    var menus = res.data.list;
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
} // update menu


function updateMenu(param) {
  return _utils.axios.put("/admin/menu", param);
} // update menu


function addMenu(param) {
  return _utils.axios.post("/admin/menu", param);
} // delete menu


function deleteMenu(param) {
  return _utils.axios.delete("/admin/menu/" + param.id, {});
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

  reactHotLoader.register(findMenuTreeList, "findMenuTreeList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\services.js");
  reactHotLoader.register(updateMenu, "updateMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\services.js");
  reactHotLoader.register(addMenu, "addMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\services.js");
  reactHotLoader.register(deleteMenu, "deleteMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\services.js");
  reactHotLoader.register(createMenuNode, "createMenuNode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\source\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();