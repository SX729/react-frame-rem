"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _LayoutView = _interopRequireDefault(require("./LayoutView"));

var _LayoutDesigner = _interopRequireDefault(require("./LayoutDesigner"));

var _SaveLayoutModal = _interopRequireDefault(require("./SaveLayoutModal"));

require("./NewLayoutPage.less");

var _Services = require("./Services");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var NewLayoutPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NewLayoutPage, _React$Component);

  function NewLayoutPage(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NewLayoutPage);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewLayoutPage).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOk", function (e) {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function (e) {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.updateLayoutView({
        selectTpl: {
          layoutCode: '12-12',
          layout: ['1:1', '1:1', '1:1', '1:1']
        },
        selectIndicators: []
      });

      _this.props.handleCancel();
    });
    _this.state = {
      saveLayoutModalVisible: false,
      layoutConfig: _this.props.layoutConfig
    };
    return _this;
  }

  (0, _createClass2.default)(NewLayoutPage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.layoutConfig !== nextProps.layoutConfig) {
        this.setState({
          layoutConfig: nextProps.layoutConfig
        });
      }
    }
  }, {
    key: "updateLayoutView",

    /**
     * 更新布局
     * @param layoutConfig
     */
    value: function updateLayoutView(layoutConfig) {
      this.setState({
        layoutConfig: _objectSpread({}, this.state.layoutConfig, {}, layoutConfig)
      });
    }
  }, {
    key: "toggleVisible",
    value: function toggleVisible(flag) {
      this.setState({
        saveLayoutModalVisible: flag
      });
    }
  }, {
    key: "saveLayoutConfig",
    value: function saveLayoutConfig() {
      this.toggleVisible(true);
    }
    /**
     * 保存布局配置
     * @param params
     */

  }, {
    key: "saveLayout",
    value: function saveLayout(params) {
      var _this2 = this;

      var data = {
        belongPage: params.belongPage,
        pageName: params.pageName,
        pageDesc: params.pageDesc,
        pageContext: JSON.stringify(this.state.layoutConfig),
        validTime: '',
        belongCode: ''
      };
      (0, _Services.addNewPage)(data).then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            saveLayoutModalVisible: false
          }, function () {
            _this2.props.handleCancel();

            _this2.props.getList();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_modal.default, {
        title: this.props.editStatus === 'check' ? '预览页面' : this.props.editStatus === 'edit' ? '编辑页面' : '新建页面',
        width: "100%",
        height: "100%",
        visible: this.props.layoutPageVisible,
        onOk: this.props.handleOk,
        onCancel: this.handleCancel,
        className: "new-layout-page",
        footer: false
      }, this.props.editStatus === 'check' ? null : _react.default.createElement(_LayoutDesigner.default, {
        saveLayoutConfig: function saveLayoutConfig() {
          _this3.saveLayoutConfig();
        },
        updateLayoutView: function updateLayoutView(layoutConfig) {
          _this3.updateLayoutView(layoutConfig);
        },
        handleCancel: this.props.handleCancel,
        pageInfo: this.props.pageInfo,
        layoutConfig: this.state.layoutConfig,
        editStatus: this.props.editStatus
      }), _react.default.createElement(_LayoutView.default, {
        layoutConfig: this.state.layoutConfig,
        handleCancel: this.props.handleCancel
      }), _react.default.createElement(_SaveLayoutModal.default, {
        handleOk: function handleOk(params) {
          _this3.saveLayout(params);
        },
        toggleVisible: function toggleVisible(flag) {
          _this3.toggleVisible(flag);
        },
        saveLayoutModalVisible: this.state.saveLayoutModalVisible
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return NewLayoutPage;
}(_react.default.Component);

exports.default = NewLayoutPage;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewLayoutPage, "NewLayoutPage", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\NewLayoutPage.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();