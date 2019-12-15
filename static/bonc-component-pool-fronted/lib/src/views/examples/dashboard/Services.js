"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberCardData = getNumberCardData;
exports.getAnalysisData = getAnalysisData;

var _utils = require("@/utils");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function getNumberCardData(params) {
  return _utils.axios.get('/api/numberCardData', {
    params: params
  });
}

function getAnalysisData(params) {
  return _utils.axios.get('/api/analysisData', {
    params: params
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getNumberCardData, "getNumberCardData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\dashboard\\Services.js");
  reactHotLoader.register(getAnalysisData, "getAnalysisData", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\dashboard\\Services.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();