"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/avatar/style");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

require("antd/es/badge/style");

var _badge = _interopRequireDefault(require("antd/es/badge"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var loginServices = _interopRequireWildcard(require("../../../services/login"));

var _utils = require("../../../utils");

require("./Header.less");

var _services = require("./services");

var _message3 = _interopRequireDefault(require("../../../assets/images/message.png"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SubMenu = _menu.default.SubMenu;

var Header =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Header, _Component);

  function Header(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Header);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      document.addEventListener('click', _this.hidePopBlock);

      _this.getMessageList();

      _this.getOthersMessage();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getOthersMessage", function () {
      var params = {
        pageSize: 4,
        pageNum: 1,
        type: 'othersMessage'
      };
      (0, _services.messageList)(params).then(function (res) {
        if (!res) {
          return;
        }

        var data = res.data;

        _this.setState({
          othersMessage: data.list,
          othersMessageNum: data.total
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getMessageList", function () {
      var params = {
        pageSize: 4,
        pageNum: 1,
        type: _this.state.type
      };
      (0, _services.messageList)(params).then(function (res) {
        var _this$setState;

        if (!res) {
          return;
        }

        var data = res.data;
        var type = _this.state.type;
        var numName = "".concat(type, "Num");

        _this.setState((_this$setState = {}, (0, _defineProperty2.default)(_this$setState, type, data.list), (0, _defineProperty2.default)(_this$setState, numName, data.total), _this$setState), function () {
          console.log(_this.state);
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hidePopBlock", function () {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function (_ref) {
      var key = _ref.key;

      if (key === 'user-pwd') {
        _this.props.history.push('/changePassword');
      } else {
        _this.logout();

        _this.props.history.push('/login');
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTabsChange", function (key) {
      _this.setState({
        type: key
      }, function () {
        _this.getMessageList();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNewsBellClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();

      _this.setState({
        visible: !_this.state.visible
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePopBlockClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNoticeCheckMore", function () {
      _this.props.history.push({
        pathname: '/newsManagement',
        search: 'noticeMessage'
      });

      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNewsCheckMore", function () {
      _this.props.history.push({
        pathname: '/newsManagement',
        search: 'othersMessage'
      });

      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNoticeClear", function () {
      _message2.default.success('标记通知为已读成功');

      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNewsClear", function () {
      (0, _services.markedAsRead)({}, function (res) {
        _this.getMessageList();

        _message2.default.success(res);
      }); // this.setState({
      //   visible: false
      // })
    });
    _this.state = {
      visible: false,
      noticeMessage: [],
      othersMessage: [],
      type: 'noticeMessage',
      //信息类型  noticeMessage    othersMessage
      othersMessageNum: 0,
      noticeMessageNum: 0
    };
    return _this;
  } // 登出


  (0, _createClass2.default)(Header, [{
    key: "logout",
    value: function logout() {
      loginServices.logout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collapsed = _this$props.collapsed,
          onCollapseChange = _this$props.onCollapseChange;
      var TabPane = _tabs.default.TabPane;
      var _this$state = this.state,
          noticeMessageNum = _this$state.noticeMessageNum,
          othersMessageNum = _this$state.othersMessageNum,
          noticeMessage = _this$state.noticeMessage,
          othersMessage = _this$state.othersMessage;
      return _react.default.createElement(_layout.default.Header, {
        id: "layoutHeader",
        className: (0, _classnames.default)('bonc-mung-layout-header', {
          'collapsed': collapsed
        })
      }, _react.default.createElement("div", {
        className: "menu-header-action",
        onClick: onCollapseChange.bind(this, !collapsed)
      }, _react.default.createElement(_icon.default, {
        type: collapsed ? 'menu-unfold' : 'menu-fold'
      })), _react.default.createElement("div", {
        className: "bonc-mnug-header-container"
      }, _react.default.createElement("div", {
        className: "menu-header-action"
      }, _react.default.createElement(_icon.default, {
        type: "question",
        style: {
          border: '1px solid rgba(0, 0, 0, 0.65)',
          borderRadius: '11px',
          fontSize: '12px'
        }
      })), _react.default.createElement("div", {
        className: "news-block"
      }, _react.default.createElement(_badge.default, {
        dot: noticeMessageNum + othersMessageNum > 0
      }, _react.default.createElement(_icon.default, {
        type: "bell",
        onClick: this.handleNewsBellClick
      })), _react.default.createElement("div", {
        className: "news-pop-block",
        style: {
          display: this.state.visible ? '' : 'none'
        },
        onClick: this.handlePopBlockClick
      }, _react.default.createElement(_tabs.default, {
        defaultActiveKey: "1",
        onChange: this.handleTabsChange
      }, _react.default.createElement(TabPane, {
        tab: "\u901A\u77E5(".concat(noticeMessageNum, ")"),
        key: "noticeMessage"
      }, _react.default.createElement("div", {
        className: "notice"
      }, _react.default.createElement(_list.default, {
        style: {
          height: '300px',
          overflow: 'auto'
        },
        dataSource: noticeMessage,
        renderItem: function renderItem(item) {
          return _react.default.createElement(_list.default.Item, null, _react.default.createElement(_list.default.Item.Meta, {
            avatar: _react.default.createElement(_avatar.default, {
              src: _message3.default
            }),
            title: _react.default.createElement("span", null, item.title),
            description: item.content
          }));
        }
      }), _react.default.createElement("div", {
        className: "bottom"
      }, _react.default.createElement("div", {
        className: "more",
        style: {
          width: '100%'
        },
        onClick: this.handleNoticeCheckMore
      }, "\u67E5\u770B\u66F4\u591A")))), _react.default.createElement(TabPane, {
        tab: "\u6D88\u606F(".concat(othersMessageNum, ")"),
        key: "othersMessage"
      }, _react.default.createElement("div", {
        className: "news"
      }, _react.default.createElement(_list.default, {
        style: {
          height: '300px',
          overflow: 'auto'
        },
        dataSource: othersMessage,
        renderItem: function renderItem(item) {
          return _react.default.createElement(_list.default.Item, null, _react.default.createElement(_list.default.Item.Meta, {
            avatar: _react.default.createElement(_avatar.default, {
              src: _message3.default
            }),
            title: _react.default.createElement("span", null, item.title),
            description: _react.default.createElement("div", null, _react.default.createElement("div", null, item.content), _react.default.createElement("div", null, item.createTime))
          }));
        }
      }), _react.default.createElement("div", {
        className: "bottom"
      }, _react.default.createElement("div", {
        className: "clear",
        onClick: this.handleNewsClear
      }, "\u6807\u8BB0\u4E3A\u5DF2\u8BFB"), _react.default.createElement("div", {
        className: "more",
        onClick: this.handleNewsCheckMore
      }, "\u67E5\u770B\u66F4\u591A"))))))), _react.default.createElement(_menu.default, {
        key: "user",
        mode: "horizontal",
        className: "bonc-mnug-header-user-menu",
        onClick: this.handleClick,
        selectable: false
      }, _react.default.createElement(SubMenu, {
        title: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
          style: {
            marginRight: 4
          }
        }, "\u4F60\u597D,"), _react.default.createElement("span", {
          style: {
            marginRight: 8
          }
        }, _utils.Storage.getUserName()), _react.default.createElement(_avatar.default, {
          icon: "user",
          style: {
            marginRight: 8
          }
        }))
      }, _react.default.createElement(_menu.default.Item, {
        key: "user-center"
      }, _react.default.createElement(_icon.default, {
        type: "user"
      }), "\u4E2A\u4EBA\u4E2D\u5FC3"), _react.default.createElement(_menu.default.Item, {
        key: "user-pwd"
      }, _react.default.createElement(_icon.default, {
        type: "setting"
      }), "\u4FEE\u6539\u5BC6\u7801"), _react.default.createElement(_menu.default.Divider, null), _react.default.createElement(_menu.default.Item, {
        key: "user-out"
      }, _react.default.createElement(_icon.default, {
        type: "logout"
      }), "\u9000\u51FA")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Header;
}(_react.Component);

Header.propTypes = {
  collapsed: _propTypes.default.bool,
  onCollapseChange: _propTypes.default.func
};

var _default = (0, _reactRouterDom.withRouter)(Header);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubMenu, "SubMenu", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\Header.jsx");
  reactHotLoader.register(Header, "Header", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\Header.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\main-view\\header\\Header.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();