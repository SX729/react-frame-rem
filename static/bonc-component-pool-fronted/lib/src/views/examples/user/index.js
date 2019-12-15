"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _page = _interopRequireDefault(require("@/components/page"));

var _Services = require("./Services");

require("./index.less");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var UserList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UserList, _React$Component);

  function UserList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserList).call(this, props));
    _this.state = {
      loaddding: true,
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      data: [] //Lodash工具类用户法

    };
    console.log(_lodash.default.join(['a', 'b', 'c'], '@@'));
    return _this;
  }

  (0, _createClass2.default)(UserList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchUserList({
        pageSize: 10,
        pageNum: 1
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "fetchUserList",
    value: function fetchUserList(params) {
      var _this2 = this;

      //请求ajax
      this.setState({
        loaddding: true
      });
      (0, _Services.findUserList)(params).then(function (res) {
        _this2.setState({
          loaddding: false,
          data: res.data.list,
          pagination: {
            total: res.data.total
          }
        });
      });
    }
  }, {
    key: "onViewClick",
    value: function onViewClick() {
      this.props.history.push({
        pathname: '/example/user-view',
        params: {
          'userId': 1
        }
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(key) {}
  }, {
    key: "handleTableChange",
    value: function handleTableChange(pagination, filters, sorter) {
      var pager = _objectSpread({}, this.state.pagination);

      pager.current = pagination.current;
      this.setState({
        pagination: pager
      });
      this.fetchUserList({
        pageSize: 10,
        pageNum: pager.current
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var columns = [{
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        render: function render(text) {
          return _react.default.createElement("a", {
            href: "javascript:;"
          }, text);
        }
      }, {
        title: '登陆名',
        dataIndex: 'loginId',
        key: 'loginId'
      }, {
        title: '密码',
        dataIndex: 'password',
        key: 'password'
      }, {
        title: '电话',
        dataIndex: 'mobile',
        key: 'mobile'
      }, {
        title: '姓别',
        dataIndex: 'sex',
        key: 'sex'
      }, {
        title: '邮箱',
        dataIndex: 'mail',
        key: 'mail'
      }, {
        title: 'Action',
        key: 'action',
        render: function render(text, record) {
          return _react.default.createElement("span", null, _react.default.createElement("a", {
            onClick: _this3.onViewClick.bind(_this3)
          }, _react.default.createElement(_icon.default, {
            type: "plus"
          }), "\u67E5\u770B"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "minus"
          }), "\u7F16\u8F91"), _react.default.createElement(_divider.default, {
            type: "vertical"
          }), _react.default.createElement(_popconfirm.default, {
            title: "\u786E\u8BA4\u5220\u9664?",
            onConfirm: function onConfirm() {
              return _this3.handleDelete(record.key);
            }
          }, _react.default.createElement("a", {
            href: "javascript:;"
          }, _react.default.createElement(_icon.default, {
            type: "close"
          }), "\u5220\u9664")));
        }
      }];
      return _react.default.createElement(_page.default, {
        className: "page",
        inner: true
      }, _react.default.createElement("div", {
        className: "bonc-mung-user-list"
      }, _react.default.createElement(_table.default, {
        className: "bonc-mung-ant-table",
        loading: this.state.loaddding,
        columns: columns,
        dataSource: this.state.data,
        pagination: this.state.pagination,
        onChange: this.handleTableChange.bind(this)
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
  return UserList;
}(_react.default.Component);

var _default = UserList;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserList, "UserList", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\user\\index.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\views\\examples\\user\\index.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();