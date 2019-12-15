"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _echarts = _interopRequireDefault(require("echarts"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 * echarts的react组件
 * 可以传入options来渲染echarts
 * 默认宽高均为100%
 *
 * 宽度可以响应式缩放
 * 如需更新echarts数据，可以更新data或者options即可
 *
 */
var Echarts =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Echarts, _Component);

  function Echarts(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Echarts);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Echarts).call(this, props));
    _this.state = {};
    _this.onResize = _this.onResize.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Echarts, [{
    key: "onResize",
    value: function onResize() {
      var chartBox = this.refs.chart;
      var width = chartBox.clientWidth;
      var height = chartBox.clientHeight;

      if (width || height) {
        this.myChart.resize();
      }
    }
  }, {
    key: "initChart",
    value: function initChart(echarts, options) {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.refs.chart); // 绘制图表

      this.options = options;
      this.myChart.setOption(options);
      this.myChart.on('click', this.props.onClick);
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options || {};
      this.initChart(_echarts.default, options);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _this2 = this;

      if (nextProps.data !== this.props.data && this.myChart) {
        var data = nextProps.data;
        var newOptions = Object.assign({}, this.options);

        if (newOptions.series) {
          newOptions.series[0].data = data;
        } else {
          newOptions.series = [{}];
          newOptions.series[0].data = data;
        }
        if (!this.props.noClear) {
          this.myChart.clear();
        }  
        this.options = newOptions;
        this.myChart.setOption(newOptions);
      }

      if (nextProps.options !== this.props.options && this.myChart) {
        if (!this.props.noClear) {
          this.myChart.clear();
        }  
        var _newOptions = nextProps.options;
        this.myChart.setOption(_newOptions);
      }

      if ((nextProps.width !== this.props.width || nextProps.height !== this.props.height) && this.myChart) {
        var _newOptions2 = nextProps.options;
        var wid = nextProps.width === 'undefined%' ? '100%' : nextProps.width;
        var hei = nextProps.height || '250px';
        var chartBox = this.refs.chart;
        chartBox.style.height = hei;
        chartBox.style.width = wid;
        this.myChart.resize();
      }

      setTimeout(function () {
        _this2.myChart.resize();
      }, 100);
      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: "chart",
        className: "width-height",
        style: {
          width: this.props.width,
          height: this.props.height
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Echarts;
}(_react.Component);

Echarts.defaultProps = {
  width: '100%',
  height: '100%',
  data: [],
  onClick: function onClick(param) {
    console.log(param);
  }
};
Echarts.propTypes = {
  options: _propTypes.default.object,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  data: _propTypes.default.array,
  onClick: _propTypes.default.func
};
var _default = Echarts;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Echarts, "Echarts", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\echarts\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\echarts\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();