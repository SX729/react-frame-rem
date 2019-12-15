"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

require("./LayoutView.less");

var _lodash = _interopRequireDefault(require("lodash"));

var _component = _interopRequireDefault(require("@/utils/component"));

var _echarts = _interopRequireDefault(require("../echarts"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_component.default.echarts = _echarts.default;

var LayoutView =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LayoutView, _React$Component);

  function LayoutView(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutView).call(this, props));
    _this.state = {};
    return _this;
  }
  /**
   * 渲染行
   * @param item
   * @param index
   * @returns {*}
   */


  (0, _createClass2.default)(LayoutView, [{
    key: "renderLayoutRow",
    value: function renderLayoutRow(item, rowIndex, indicatorIndexArr) {
      var _this2 = this;

      var layoutConfig = this.props.layoutConfig;

      if (!layoutConfig) {
        return null;
      }

      var selectTpl = layoutConfig.selectTpl;

      if (!selectTpl) {
        return null;
      }

      var layout = selectTpl.layout;
      var layoutArr = layout[rowIndex].split(':');
      var larr = [];

      for (var i = 0; i < layoutArr.length; i++) {
        larr.push(Number(layoutArr[i]));
      }

      var sum = _lodash.default.sum(larr);

      return _react.default.createElement(_row.default, {
        key: 'row-' + rowIndex
      }, larr.map(function (tem, colIndex) {
        return _this2.renderLayoutCol(rowIndex, colIndex, "".concat(100 * (tem / sum), "%"), indicatorIndexArr);
      }));
    }
    /**
     * 渲染列
     * @param tem
     * @param i
     * @returns {*}
     */

  }, {
    key: "renderLayoutCol",
    value: function renderLayoutCol(rowIndex, colIndex, colSpan, indicatorIndexArr) {
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var indicatorData = selectIndicators[indicatorIndexArr[rowIndex][colIndex]] || {};

      if (Object.prototype.toString.call(indicatorData) !== '[object Object]') {
        indicatorData = {};
      }

      var _cmpConfig = indicatorData.config || {};

      var cmpConfig = JSON.parse(_cmpConfig.config || '{}');
      var a = indicatorData.component;
      var Component = _component.default[a];
      var height = indicatorData.height ? indicatorData.height : 250;
      var width = indicatorData.width ? indicatorData.width : 100;
      return _react.default.createElement(_col.default, {
        style: {
          width: colSpan,
          float: 'left'
        },
        key: colIndex
      }, _react.default.createElement("div", {
        style: {
          padding: '10px',
          height: "".concat(height, "px"),
          width: '100%'
        }
      }, _react.default.createElement("div", {
        style: {
          backgroundColor: '#fff',
          boxShadow: '6px 11px 41px -28px #a99de7',
          height: '100%',
          width: '100%',
          borderRadius: '10px',
          padding: '5px'
        }
      }, Component ? _react.default.createElement(Component, (0, _extends2.default)({}, cmpConfig, {
        width: "".concat(indicatorData.width, "%"),
        height: "".concat(height, "px")
      })) : null)));
    }
    /**
     * 返回指标对应的序号
     */

  }, {
    key: "getIndicatorIndexArr",
    value: function getIndicatorIndexArr(type) {
      var tplLayouts = this.props.layoutConfig.selectTpl.layout || [];
      var newArr = [];
      var index;

      if (type === 'rule') {
        //规则布局
        index = 0;

        for (var i = 0; i < tplLayouts.length; i++) {
          var temArr = tplLayouts[i].split(':');
          var inArr = [];

          for (var j = 0; j < temArr.length; j++) {
            inArr.push(index++);
          }

          newArr.push(inArr);
        }
      } else {
        //地图
        //第一行和第二行放入空的数据，只是占位使用
        newArr.push([]);
        newArr.push([]);
        index = 5;

        for (var _i = 2; _i < tplLayouts.length; _i++) {
          var _temArr = tplLayouts[_i].split(':');

          var _inArr = [];

          for (var _j = 0; _j < _temArr.length; _j++) {
            _inArr.push(index++);
          }

          newArr.push(_inArr);
        }
      }

      return newArr;
    }
  }, {
    key: "renderCmp",
    value: function renderCmp(arr, indiData) {
      if (arr) {
        var Cmp = arr[0];
        var cmpConfig = arr[1];
        return _react.default.createElement(Cmp, (0, _extends2.default)({}, cmpConfig, {
          width: "".concat(indiData.width ? indiData.width : 100, "%") || '100%',
          height: "".concat(indiData.height ? indiData.height : 250, "px") || '100%'
        }));
      }

      return null;
    }
  }, {
    key: "renderBlock",
    value: function renderBlock(index, cmpMaps, indiDataMap) {
      var arr = cmpMaps.get("Component".concat(index));
      var indiData = indiDataMap.get("indicatorData".concat(index));
      return _react.default.createElement("div", {
        style: {
          padding: '10px',
          height: "".concat(indiData && indiData.height ? indiData.height : index === 4 ? 500 : 250, "px")
        }
      }, _react.default.createElement("div", {
        style: {
          backgroundColor: '#fff',
          boxShadow: '6px 11px 41px -28px #a99de7',
          height: '100%',
          borderRadius: '10px',
          padding: '5px'
        }
      }, this.renderCmp(arr, indiData)));
    }
    /**
     * 渲染地图
     */

  }, {
    key: "renderLayoutMapRow",
    value: function renderLayoutMapRow() {
      var layoutConfig = this.props.layoutConfig;
      var selectIndicators = layoutConfig.selectIndicators;
      var cmpMaps = new Map();
      var indiDataMap = new Map();

      for (var i = 0; i < selectIndicators.length; i++) {
        var cmpConfig = {};

        try {
          cmpConfig = JSON.parse(selectIndicators[i].config.config || '{}');
        } catch (error) {
          cmpConfig = {};
        } //组件map


        cmpMaps.set("Component".concat(i), [_component.default[selectIndicators[i].component], cmpConfig]);
        indiDataMap.set("indicatorData".concat(i), selectIndicators[i]);
      }

      return _react.default.createElement(_row.default, {
        key: "map"
      }, _react.default.createElement(_col.default, {
        span: 6
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, null, this.renderBlock(0, cmpMaps, indiDataMap))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, null, this.renderBlock(1, cmpMaps, indiDataMap)))), _react.default.createElement(_col.default, {
        span: 12
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, null, this.renderBlock(4, cmpMaps, indiDataMap)))), _react.default.createElement(_col.default, {
        span: 6
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, null, this.renderBlock(2, cmpMaps, indiDataMap))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, null, this.renderBlock(3, cmpMaps, indiDataMap)))));
    }
    /**
     * 渲染布局
     * @returns {Array}
     */

  }, {
    key: "renderLayout",
    value: function renderLayout() {
      var _this3 = this;

      var rows = [];
      var layoutConfig = this.props.layoutConfig;

      if (!layoutConfig || JSON.stringify(layoutConfig) === '{}') {
        return;
      }

      var selectTpl = layoutConfig.selectTpl;
      var layoutCode = selectTpl.layoutCode;
      var tplLayouts = selectTpl.layout || []; //此处有点死板？

      if (layoutCode === '6-12-6') {
        //地图布局（需要特殊处理）
        var indicatorIndexArr = this.getIndicatorIndexArr('map');
        rows.push(this.renderLayoutMapRow(tplLayouts, indicatorIndexArr));
        tplLayouts.map(function (item, index) {
          if (index > 1) {
            rows.push(_this3.renderLayoutRow(item, index, indicatorIndexArr));
          }
        });
      } else {
        //规则的布局
        var _indicatorIndexArr = this.getIndicatorIndexArr('rule');

        tplLayouts.map(function (item, index) {
          rows.push(_this3.renderLayoutRow(item, index, _indicatorIndexArr));
        });
      }

      return rows;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.renderLayout());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return LayoutView;
}(_react.default.Component);

var _default = LayoutView;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LayoutView, "LayoutView", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutView.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutView.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();