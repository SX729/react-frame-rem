"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mockjs = _interopRequireDefault(require("mockjs"));

var _index = _interopRequireDefault(require("@/config/index"));

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/user?pageSize=10&pageNum=1"), function () {
  var data = _mockjs.default.mock({
    'array|45': [{
      'key': 'dfd@id',
      username: '@name',
      name: '@name',
      password: 'password',
      mobilePhone: '010-1234212',
      telPhone: '13012341234',
      sex: '1',
      mail: 'xxx@bonc.com.cn',
      crtTime: '2019/03/11',
      crtUser: '@name',
      updTime: '2019/03/11',
      updUser: '@name'
    }]
  });

  return {
    list: data['array'],
    total: data['array'].length
  };
});

_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/api/registerServer2Cas"), function () {
  return {
    register: true
  };
});

_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/api/sloginUserInfo"), function () {
  return {
    'status': true,
    'data': {
      'id': 1,
      'userName': '管理员'
    }
  };
});

_mockjs.default.mock("".concat(_index.default.API_BASE_URL, "/api/sloginUserExtInfo"), function () {
  return {};
});