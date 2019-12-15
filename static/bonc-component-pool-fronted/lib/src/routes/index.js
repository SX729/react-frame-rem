"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _utils = require("@/utils");

var _index = _interopRequireDefault(require("@/config/index"));

var _MainView = _interopRequireDefault(require("@/views/main-view/MainView"));

var _homeView = _interopRequireDefault(require("@/views/home-view"));

var _Form = _interopRequireDefault(require("@/views/examples/user/Form"));

var _View = _interopRequireDefault(require("@/views/examples/user/View"));

var _dashboard = _interopRequireDefault(require("@/views/examples/dashboard"));

var _counter = _interopRequireDefault(require("@/views/examples/counter"));

var _user = _interopRequireDefault(require("@/components/user"));

var _login = _interopRequireDefault(require("@/components/login"));

var _group = _interopRequireDefault(require("@/components/group"));

var _groupType = _interopRequireDefault(require("@/components/group-type"));

var _menu = _interopRequireDefault(require("@/components/menu"));

var _logManagement = _interopRequireDefault(require("@/components/log-management"));

var _changePassword = _interopRequireDefault(require("@/components/change-password"));

var _newsManagement = _interopRequireDefault(require("@/components/news-management"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var routers = [{
  path: '/login',
  component: _login.default,
  exact: true,
  isAuth: false
}, {
  component: _MainView.default,
  childRoutes: [{
    path: '/',
    exact: true,
    component: _homeView.default,
    isAuth: true
  }, {
    path: '/user',
    component: _user.default,
    isAuth: true
  }, {
    path: '/group',
    component: _group.default,
    isAuth: true
  }, {
    path: '/groupType',
    component: _groupType.default,
    isAuth: true
  }, {
    path: '/source',
    component: _menu.default,
    isAuth: true
  }, {
    path: '/logManagement',
    component: _logManagement.default
  }, {
    path: '/changePassword',
    component: _changePassword.default
  }, {
    path: '/newsManagement',
    component: _newsManagement.default
  }, {
    path: '/example/user-edit',
    component: _Form.default,
    isAuth: true
  }, {
    path: '/example/user-view',
    component: _View.default,
    isAuth: true
  }, {
    path: '/example/dashboard',
    component: _dashboard.default
  }, {
    path: '/example/counter',
    component: _counter.default
  }]
}];

function injectAuthenticationRender(routers) {
  var digui = function digui(object) {
    if (object.isAuth === true) {
      object.render = function () {
        var permission = _utils.Storage.getUserPermissions(object.path);

        if (!_utils.Storage.isLogin()) {
          return _react.default.createElement(_reactRouterDom.Redirect, {
            to: "/login"
          });
        } else {
          var Component = object.component;
          return _react.default.createElement(Component, null);
        }
      };
    }

    if (object.childRoutes) {
      object.childRoutes.map(function (router) {
        digui(router);
      });
    }
  };

  routers.map(function (router) {
    digui(router);
  });
  return routers;
}

var _default = injectAuthenticationRender(routers);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routers, "routers", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\routes\\index.jsx");
  reactHotLoader.register(injectAuthenticationRender, "injectAuthenticationRender", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\routes\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\routes\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();