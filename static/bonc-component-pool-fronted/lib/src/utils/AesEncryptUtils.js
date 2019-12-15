"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = encrypt;
exports.decrypt = decrypt;

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var key = _cryptoJs.default.enc.Utf8.parse('7890123456qazwsx');
/**
 * 加密
 *  @param {*} word 
 */


function encrypt(word) {
  var srcs = _cryptoJs.default.enc.Utf8.parse(word);

  var encrypted = _cryptoJs.default.AES.encrypt(srcs, key, {
    mode: _cryptoJs.default.mode.ECB,
    padding: _cryptoJs.default.pad.Pkcs7
  });

  return encrypted.toString();
}
/**
 * 解密
 * @param {*} word 
 */


function decrypt(word) {
  var decrypt = _cryptoJs.default.AES.decrypt(word, key, {
    mode: _cryptoJs.default.mode.ECB,
    padding: _cryptoJs.default.pad.Pkcs7
  });

  return _cryptoJs.default.enc.Utf8.stringify(decrypt).toString();
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(key, "key", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\AesEncryptUtils.js");
  reactHotLoader.register(encrypt, "encrypt", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\AesEncryptUtils.js");
  reactHotLoader.register(decrypt, "decrypt", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\utils\\AesEncryptUtils.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();