"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mockjs = _interopRequireDefault(require("mockjs"));

var _index = _interopRequireDefault(require("@/config/index"));

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * number板数据
 */
_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/api/numberCardData"), function () {
  var data = _mockjs.default.mock({
    'array|4': [{
      title: '@ctitle',
      total: '@integer(100, 2000)',
      'data|10': ['@integer()']
    }]
  });

  return data['array'];
});
/**
 * 分析图数据
 */


_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/api/analysisData"), function () {
  var data = _mockjs.default.mock({
    'data|10': ['@integer(10, 1000)']
  });

  return data['data'];
});