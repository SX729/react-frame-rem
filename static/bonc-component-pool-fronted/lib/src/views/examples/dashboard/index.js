"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _page = _interopRequireDefault(require("@/components/page"));

var _numberCard = _interopRequireDefault(require("@/components/number-card"));

var _trendLine = _interopRequireDefault(require("@/components/number-card/trend-line"));

var _Analysis = _interopRequireDefault(require("./components/Analysis"));

var _Services = require("./Services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Dashboard);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dashboard).call(this, props));
    _this.state = {
      loaddding: true,
      numberCardData: [],
      chartOptions: null
    };
    return _this;
  }

  (0, _createClass2.default)(Dashboard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      //请求ajax
      this.timer = setInterval(function () {
        (0, _Services.getNumberCardData)().then(function (res) {
          _this2.setState({
            numberCardData: res.data
          });
        });
      }, 1000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          loaddding: false
        });
      }, 300);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var numberCards = this.state.numberCardData.map(function (item, key) {
        return _react.default.createElement(_col.default, {
          key: key,
          lg: 6,
          md: 12
        }, _react.default.createElement(_card.default, null, _react.default.createElement(_numberCard.default, {
          title: item.title,
          total: item.total,
          trendComponent: _react.default.createElement(_trendLine.default, {
            data: item.data
          })
        })));
      });
      return _react.default.createElement(_page.default, {
        className: "page",
        inner: true,
        loading: this.state.loaddding
      }, _react.default.createElement(_row.default, {
        gutter: 24
      }, numberCards), _react.default.createElement(_row.default, {
        gutter: 24
      }, _react.default.createElement(_col.default, {
        md: 24
      }, _react.default.createElement(_card.default, null, _react.default.createElement(_Analysis.default, null)))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Dashboard;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(Dashboard);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dashboard, "Dashboard", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\dashboard\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\dashboard\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();