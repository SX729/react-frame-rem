"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findMenuTreeList = findMenuTreeList;

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

/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */
function findMenuTreeList(param) {
  return _utils.axios.get("/admin/menu/permissionList", {
    params: _objectSpread({}, param)
  }).then(function (res) {
    if (!res) return [];
    if (!res.data) return [];
    var items = res.data.list;
    var menus = [];

    _utils.Storage.setUserPermissions(items);

    items.map(function (item) {
      if (item.type === 'menu' || item.type === 'folder') {
        menus.push(Object.assign({}, item));
      }
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
    item.subMenus = children;
  }

  return item;
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(findMenuTreeList, "findMenuTreeList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\services.js");
  reactHotLoader.register(createMenuNode, "createMenuNode", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\layout\\services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();