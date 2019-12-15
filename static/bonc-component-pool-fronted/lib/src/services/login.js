"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;

var _utils = require("../utils");

var _config = _interopRequireDefault(require("../config"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var request = function request(response, successFn) {
  if (!response) {
    return;
  }

  if (response.status === 302) {
    // 重定向
    if (response.request.responseURL.indexOf('registerServer2Cas') > -1) {
      var data = response.data;

      if (typeof data === 'string') {
        if (data.indexOf('loginUrl') !== -1) {
          var url = data.substring(data.indexOf('loginUrl') + 10, data.length - 1);

          _utils.axios.get(url);
        }
      }
    }
  } else if (response.status === 200) {
    if (!response.headers['content-type']) {
      successFn(response);
    } // 跳到登陆页面


    if (response.headers['content-type'].indexOf('text/html') !== -1 && response.request.responseURL.indexOf('/login') > -1) {
      window.top.location.href = _config.default['LOGIN_URL'];
    } else if (response['data'] && response['data'].loginUrl && response['data'].loginUrl.indexOf('/login') > -1) {
      _utils.axios.get(response['data'].loginUrl).then(function (response) {
        request(response, successFn);
      });
    } else {
      if (successFn) {
        successFn(response);
      }
    }
  }
};
/**
 * 注册登陆
 * @param successFn
 */


function login(params) {
  params.password = _utils.AesEncrypt.encrypt(params.password); // if (config.LONGIN_MODEL === 'CAS') {

  return (0, _utils.axios)({
    url: '/api/login',
    method: 'post',
    data: params,
    transformRequest: [function (data) {
      var ret = '';

      for (var it in data) {
        ret += it + '=' + encodeURIComponent(data[it]) + '&';
      }

      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }); // } else {
  //   return axios.get('/api/registerServer2Cas')
  // }
}
/**
 * 登出
 * @returns {*}
 */


function logout() {
  _utils.Storage.logout();

  return _utils.axios.get('/api/logout');
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(request, "request", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\services\\login.js");
  reactHotLoader.register(login, "login", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\services\\login.js");
  reactHotLoader.register(logout, "logout", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\services\\login.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();