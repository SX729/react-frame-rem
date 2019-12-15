"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Option = _select.default.Option;
/**
 * 
 * 参数 arrData  [{key:'0',value:'女'}, {key:'1',value:'男'}]
 * 
 * 参数 objData  {0:'女',1:'男'}
 * 
 * 参数arrData与objData 不能同时使用
 * 
 * <BuiSelect placeholder="请选择性别" allowClear={true} arrData={this.state.selectData}/>
 * 
 */

var BuiSelect =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BuiSelect, _React$Component);

  function BuiSelect(props) {
    (0, _classCallCheck2.default)(this, BuiSelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BuiSelect).call(this, props));
  }

  (0, _createClass2.default)(BuiSelect, [{
    key: "getObjData",
    value: function getObjData() {
      var data = this.props.objData;
      return _react.default.createElement(_select.default, this.props, Object.getOwnPropertyNames(data).map(function (key) {
        return _react.default.createElement(Option, {
          key: key
        }, data[key]);
      }));
    }
  }, {
    key: "getArrData",
    value: function getArrData() {
      return _react.default.createElement(_select.default, this.props, this.props.arrData.map(function (subData) {
        return _react.default.createElement(Option, {
          key: subData.key
        }, subData.value);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.objData) {
        return this.getObjData();
      } else {
        return this.getArrData();
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BuiSelect;
}(_react.default.Component);

exports.default = BuiSelect;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\elements\\bui-select\\index.js");
  reactHotLoader.register(BuiSelect, "BuiSelect", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\elements\\bui-select\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();