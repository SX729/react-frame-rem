"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "axios", {
  enumerable: true,
  get: function get() {
    return _axios.default;
  }
});

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("@/config/index"));

var _boncComponentPoolFronted = require("bonc-component-pool-fronted");

var _history = require("history");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var history = (0, _history.createHashHistory)(); //开发模式下开启 mock拦截器

process.env.NODE_ENV === 'development' && !!_index.default.MOCKABLE && require('@/mocks'); //生产模式下开启 mock拦截器

process.env.NODE_ENV === 'production' && !!_index.default.MOCKABLE && require('@/mocks');
var API_BASE_URL = _index.default.API_BASE_URL;
Object.assign(_axios.default.defaults, {
  baseURL: API_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
});
_axios.default.defaults.showLoading = true; //是否显示遮罩

_axios.default.defaults.showError = true; //返回错误时是否显示错误信息

_axios.default.defaults.timeout = 300000; //超时设置

var xhrqueue = [];
/**
 * 请求前钩子函数
 */

_axios.default.interceptors.request.use(function (config) {
  //如果定义了showLoading  一般只有showLoading为false 时才需要传   默认不传就是默认显示全局遮罩
  if (config && config.params && config.params.showLoading !== undefined && !config.params.showLoading) {//不需要显示遮罩
  } else {
    if (config.showLoading) {
      xhrqueue.push(1);

      _boncComponentPoolFronted.Loading.open();
    }
  }

  config.headers['Authorization'] = 'Bearer ' + _boncComponentPoolFronted.Storage.getAuthorizationToken();
  return config;
});

_axios.default.interceptors.response.use(function (response) {
  //如果定义了showLoading  一般只有showLoading为false 时才需要传   默认不传就是默认显示全局遮罩
  if (response && response.config && response.config.params && response.config.params.showLoading !== undefined && !response.config.params.showLoading) {//不需要做任何处理
  } else {
    if (response && response.config && response.config.showLoading) {
      xhrqueue.shift();

      if (xhrqueue.length === 0) {
        _boncComponentPoolFronted.Loading.close();
      }
    }
  }

  return response;
}, function (error) {
  if (error.config && error.config.showLoading) {
    xhrqueue.shift();

    if (xhrqueue.length === 0) {
      _boncComponentPoolFronted.Loading.close();
    }
  }

  if (error.response.status === 401) {
    _boncComponentPoolFronted.Storage.logout();

    return history.push('/login');
  }

  if (error.response.status === 400) {
    //用户名密码错误
    return error.response;
  }

  if (error && error.response) {
    // notification['error']({
    //   message: '出错了, 错误码: [' + error.response.status + ']',
    //   description: error.response.data.message || '系统内部错误，请联系管理员!'
    // })
    _message2.default.warning(error.response.data.message.slice(0, 100), 3);
  }
});

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(history, "history", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\HttpClient.js");
  reactHotLoader.register(API_BASE_URL, "API_BASE_URL", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\HttpClient.js");
  reactHotLoader.register(xhrqueue, "xhrqueue", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\HttpClient.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();