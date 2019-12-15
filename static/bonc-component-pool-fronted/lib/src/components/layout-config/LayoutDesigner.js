"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRouterDom = require("react-router-dom");

var _jquery = _interopRequireDefault(require("jquery"));

require("jquery-ui/ui/widgets/sortable.js");

var _config = _interopRequireDefault(require("@config"));

require("./LayoutDesigner.less");

var _NewLayoutPage = _interopRequireDefault(require("./NewLayoutPage"));

var _Services = require("./Services");

var _lodash = _interopRequireDefault(require("lodash"));

var _CmpModal = _interopRequireDefault(require("./CmpModal"));

var _ClassifyModal = _interopRequireDefault(require("./ClassifyModal"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TabPane = _tabs.default.TabPane;

var LayoutDesigner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LayoutDesigner, _React$Component);

  function LayoutDesigner(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutDesigner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutDesigner).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleEditTab", function (targetKey, action) {
      //新增组件分类
      if (action === 'add') {
        _this.setState({
          selectClassify: {},
          classifyType: 'new',
          classifyVisible: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTabBar", function (it) {
      return _react.default.createElement("div", {
        onDoubleClick: function onDoubleClick(e) {
          _this.editClassify(e, it);
        }
      }, _react.default.createElement("span", {
        style: {
          marginRight: '20px'
        }
      }, it.title), _react.default.createElement(_icon.default, {
        type: "close",
        onClick: function onClick(e) {
          _this.deleteClassify(e, it);
        }
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deleteClassify", function (e, it) {
      var thiz = (0, _assertThisInitialized2.default)(_this);
      e.stopPropagation();

      _modal.default.confirm({
        title: '您确定要删除吗?',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk: function onOk() {
          (0, _Services.deleteClassify)({
            id: it.id
          }, function (res) {
            _message2.default.success(res);

            thiz.getIndicatorPanelLibData();
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "editClassify", function (e, it) {
      e.stopPropagation();
      console.log(it);

      _this.setState({
        selectClassify: it,
        classifyType: 'edit',
        classifyVisible: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showClassify", function () {
      _this.setState({
        classifyType: 'new',
        selectClassify: {},
        classifyVisible: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCmpModalSubmit", function (params, sucFn) {
      (0, _Services.registerCmp)(_objectSpread({}, params, {
        classify: _this.state.indicatorActiveTab
      }), function (res) {
        _message2.default.success(res);

        sucFn();

        _this.setState({
          cmpModalVisible: false
        }); //刷新指标面板库


        _this.getIndicatorPanelLibData();
      });
    });
    _this.state = {
      classifyType: '',
      //组件分类
      classifyVisible: false,
      selectClassify: {},
      //当前分类
      layoutTpls: _this.getLayoutTpl(),
      //布局模板
      selectTpl: _this.props.layoutConfig.selectTpl,
      indicatorActiveTab: '',
      //
      indicatorTabs: [],
      //指标面板库的数据
      selectIndicators: _this.props.layoutConfig.selectIndicators,
      //已选中的指标
      activeIndicator: {},
      //高亮的指标
      hoverModel: {},
      cmpModalType: '',
      //组件弹框类型:新建:new、编辑:edit
      cmpModalVisible: false //组件弹窗是否可见

    };
    return _this;
  }

  (0, _createClass2.default)(LayoutDesigner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        show: true
      });
      this.loadData();
      this.bindIndocatorsSortable(); //初始化指标面板库的数据

      this.getIndicatorPanelLibData();
      this.updateLayoutConfig({
        selectTpl: this.props.layoutConfig.selectTpl,
        selectIndicators: this.props.layoutConfig.selectIndicators || []
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {}
    /**
     * 返回布局模板
     */

  }, {
    key: "getLayoutTpl",
    value: function getLayoutTpl() {
      return [{
        layoutCode: '12-12',
        layoutName: '一行2列',
        layout: ['1:1', '1:1', '1:1', '1:1']
      }, {
        layoutCode: '8-8-8',
        layoutName: '一行3列',
        layout: ['1:1:1', '1:1:1', '1:1:1', '1:1:1']
      }, {
        layoutCode: '6-6-6-6',
        layoutName: '一行4列',
        layout: ['1:1:1:1', '1:1:1:1', '1:1:1:1', '1:1:1:1']
      }, {
        layoutCode: '6-12-6',
        layoutName: '地图',
        layout: ['1:2:1', '1:2:1', '1:1:1', '1:1:1']
      }];
    } // 新建初始化

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.setState({
        selectModels: [],
        activeModel: {},
        hoverModel: {},
        pageData: {
          pageName: '',
          belongCode: '',
          pageDesc: ''
        },
        isNameValid: true,
        isFatherValid: true
      }, function () {
        _this2.updateSelectLayoutTpl(_this2.state.selectTpl);
      });
    } // 恢复页面原始数据

  }, {
    key: "setOrginalData",
    value: function setOrginalData(context) {
      if (context) {
        var _JSON$parse = JSON.parse(context),
            selectTpl = _JSON$parse.selectTpl,
            selectModels = _JSON$parse.selectModels;

        this.setState({
          orginalData: {
            selectTpl: selectTpl,
            selectModels: selectModels
          }
        });
      }
    }
  }, {
    key: "loadData",
    value: function loadData(nextprops) {
      // 挂载时为新建，但是有激活nav页，需保存激活nav页数据
      if (this.props.pageInfo && this.props.pageInfo.pageContext) {
        this.setOrginalData(this.props.pageInfo.pageContext);
      } // ...忘了


      if (nextprops && nextprops.pageInfo.pageContext) {
        this.setOrginalData(nextprops.pageInfo.pageContext);
      }

      this.init();
    } // 获取年列表

  }, {
    key: "getYears",
    value: function getYears() {
      var arr = [];
      var tem;
      var minYear = 2016;
      var nowYear = (0, _moment.default)().year();
      var num = nowYear - minYear;

      for (var i = 0; i <= num; i++) {
        tem = nowYear - i;
        arr.push({
          id: String(tem),
          text: tem + '年'
        });
      }

      return arr;
    } // 布局数据暴露外部（同步）

  }, {
    key: "propLayout",
    value: function propLayout(data) {
      this.props.updataLayout && this.props.updataLayout(data || {
        selectTpl: this.state.selectTpl,
        selectModels: this.state.selectModels
      });
    } // 刷新外部导航栏页面，isqueryPage为true只请求页面不请求导航栏列表

  }, {
    key: "updateNavlist",
    value: function updateNavlist(isqueryPage) {
      this.props.updateNavlist(isqueryPage);
    }
    /**
     * 绑定指标面板配置排序事件
     */

  }, {
    key: "bindIndocatorsSortable",
    value: function bindIndocatorsSortable() {
      var thiz = this;
      setTimeout(function () {
        var sortArea = (0, _jquery.default)('.layout-designer').find('.list-data');

        if (sortArea) {
          sortArea.sortable({
            stop: function stop(event, ui) {
              var oldSelectIndicators = thiz.state.selectIndicators;
              var newSelectIndicators = [];
              var models = (0, _jquery.default)('.list-data').find('.model-item');
              models.each(function (index, item) {
                var uiKey = item.getAttribute('modelkey');
                var dataIndex = oldSelectIndicators.findIndex(function (model) {
                  return model.id === uiKey;
                });
                newSelectIndicators.push(oldSelectIndicators[dataIndex]);
              });
              thiz.updateLayoutConfig({
                selectIndicators: newSelectIndicators
              });
            }
          });
        }
      }, 500);
    } // 指标库tab页切换

  }, {
    key: "onChangePanelTab",
    value: function onChangePanelTab(e) {
      this.setState({
        selectClassify: {},
        indicatorActiveTab: e
      });
    } // 切换选中模板

  }, {
    key: "onChangeLayoutTpl",
    value: function onChangeLayoutTpl(index) {
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var _this$state$layoutTpl = this.state.layoutTpls[index],
          layoutCode = _this$state$layoutTpl.layoutCode,
          layout = _this$state$layoutTpl.layout;
      var selectTpl = {
        layoutCode: layoutCode,
        layout: layout
      };
      this.updateLayoutConfig({
        selectTpl: selectTpl,
        selectIndicators: selectIndicators
      });
    }
    /**
     * 更新布局配置
     */

  }, {
    key: "updateLayoutConfig",
    value: function updateLayoutConfig(layoutConfig) {
      var _this3 = this;

      this.setState(_objectSpread({}, layoutConfig), function () {
        _this3.props.updateLayoutView(layoutConfig);
      });
    } // 自由布局最低行数限制

  }, {
    key: "getMinRows",
    value: function getMinRows() {
      return this.state.selectTpl.layoutCode === '6-12-6' ? '2' : '1';
    } // 修改自由布局输入框

    /**
     * 布局修改
     * @param e
     * @param index
     */

  }, {
    key: "onChangeInput",
    value: function onChangeInput(e, index) {
      var layoutNew = this.state.selectTpl.layout;
      var value = e.target.value;
      layoutNew[index] = value;
      this.setState({
        selectTpl: _objectSpread({}, this.state.selectTpl, {
          layout: layoutNew
        })
      });
    }
    /**
     * 自由布局增加行
     */

  }, {
    key: "onAddItem",
    value: function onAddItem() {
      var layoutTpls = this.state.layoutTpls;
      var selectTpl = this.props.layoutConfig.selectTpl;
      var layoutCode = selectTpl.layoutCode;

      var newTpl = _lodash.default.filter(layoutTpls, function (item) {
        return item.layoutCode === layoutCode;
      });

      var layoutStr = newTpl[0].layout[0];
      selectTpl.layout.push(layoutStr);
      this.updateLayoutConfig({
        selectTpl: selectTpl
      });
    }
    /**
     * 自由布局删除行
     */

  }, {
    key: "onDeleteItem",
    value: function onDeleteItem() {
      var layoutNew = this.state.selectTpl.layout;
      layoutNew.splice(layoutNew.length - 1, 1);
      this.updateLayoutConfig({
        selectTpl: this.state.selectTpl
      });
    } // 地图模板时前两行不能修改

  }, {
    key: "isLayoutDisable",
    value: function isLayoutDisable(index) {
      return this.state.selectTpl.layoutCode === '6-12-6' && (index === 0 || index === 1);
    } // 更新布局数据

  }, {
    key: "updateSelectLayoutTpl",
    value: function updateSelectLayoutTpl(layoutnew, func) {
      var _this4 = this;

      this.setState({
        selectTpl: Object.assign({}, this.state.selectTpl, layoutnew)
      }, function () {
        _this4.propLayout();

        if (func) func();
      });
    } // 选中or取消选中模型时

  }, {
    key: "onChangeModel",
    value: function onChangeModel(item, e, state) {
      var a = this.state.selectIndicators;
      var indexs = 0;
      a.map(function (items, index) {
        if (items.id === item.id) {
          indexs = index;
        }
      });
      a.splice(indexs, 1);
      this.bindIndocatorsSortable();
      this.upDataSelectModels(a);

      if (state === 'delete') {
        this.onActiveModel({});
        e.stopPropagation();
      }
    } // 更新模型列表数据

  }, {
    key: "upDataSelectModels",
    value: function upDataSelectModels(modelsNew) {
      var _this5 = this;

      this.setState({
        selectIndicators: modelsNew
      }, function () {
        _this5.propLayout();

        _this5.updateLayoutConfig({
          modelsNew: modelsNew
        });
      });
    }
    /**
     * 判断当前指标是否选中
     * @param item
     * @returns {boolean}
     */

  }, {
    key: "isIndicatorSelected",
    value: function isIndicatorSelected(item) {
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var a = false;
      selectIndicators.map(function (value) {
        if (value.id === item.id) {
          a = true;
        }
      });
      return a;
    } // 点击右侧列表中的某个指标时

  }, {
    key: "onActiveModel",
    value: function onActiveModel(item, e) {
      (0, _jquery.default)('.model-size-input').blur();
      this.setState({
        activeIndicator: item
      });
    } // 鼠标浮上指标时显示删除按钮

  }, {
    key: "onHoverModel",
    value: function onHoverModel(item) {
      this.setState({
        hoverModel: item
      });
    }
  }, {
    key: "onLeaveModel",
    value: function onLeaveModel() {
      this.setState({
        hoverModel: {}
      });
    }
    /**
     * 修改选中指标的宽和高
     * @param e
     * @param type
     */

  }, {
    key: "onChangeSize",
    value: function onChangeSize(e, type) {
      var activeIndicator = this.state.activeIndicator;
      activeIndicator[type] = e.target.value;
      this.setState({
        activeIndicator: activeIndicator
      });
    }
    /**
     * 失去焦点时再更新 selectIndicators  和  LayoutView
     */

  }, {
    key: "onUpdateSize",
    value: function onUpdateSize() {
      var _this$state = this.state,
          selectIndicators = _this$state.selectIndicators,
          activeIndicator = _this$state.activeIndicator;
      var index = selectIndicators.findIndex(function (item) {
        return activeIndicator.id === item.id;
      });

      if (index !== -1) {
        selectIndicators.splice(index, 1, activeIndicator);
      }

      this.updateLayoutConfig({
        selectIndicators: selectIndicators
      });
    }
    /**
     * 布局修改后更新布局
     */

  }, {
    key: "onUpdateLayout",
    value: function onUpdateLayout(e, index) {
      var _this$state2 = this.state,
          selectTpl = _this$state2.selectTpl,
          selectIndicators = _this$state2.selectIndicators;
      var layout = selectTpl.layout;
      layout.splice(index, 1, e.target.value);
      this.updateLayoutConfig({
        selectTpl: _objectSpread({}, selectTpl, {
          layout: layout
        }),
        selectIndicators: selectIndicators
      });
    } // 设置取消

  }, {
    key: "onCancelSetting",
    value: function onCancelSetting() {
      // 关闭版面布局设置
      this.updateLayoutConfig({
        selectTpl: {
          layoutCode: '12-12',
          layout: ['1:1', '1:1', '1:1', '1:1']
        },
        selectIndicators: []
      });
      this.props.handleCancel();
    } // 设置保存，编辑时直接保存，新建时打开弹框

  }, {
    key: "onSaveSetting",
    value: function onSaveSetting() {
      var _this6 = this;

      if (this.props.editStatus === 'edit') {
        var _this$props = this.props,
            pageInfo = _this$props.pageInfo,
            layoutConfig = _this$props.layoutConfig;
        var params = {
          belongPage: pageInfo.belongPage,
          pageName: pageInfo.pageName,
          pageDesc: pageInfo.pageDesc,
          validTime: '',
          belongCode: '',
          pageId: pageInfo.pageId,
          pageContext: JSON.stringify(layoutConfig)
        };
        (0, _Services.updatePage)(params).then(function (res) {
          if (res.status === 200) {
            _this6.onCancelSetting();
          }
        });
      } else {
        this.props.saveLayoutConfig();
      }
    } // 板块信息修改

  }, {
    key: "onChangepageData",
    value: function onChangepageData(e, type, func) {
      var newpageData = JSON.parse(JSON.stringify(this.state.pageData));
      var value = e.target ? e.target.value : e;
      newpageData[type] = value;

      if (type === 'belongCode') {
        var belongPage = '';

        if (value !== '') {
          this.state.indicatorTabs.forEach(function (pannel) {
            if (pannel.id === value) {
              belongPage = pannel.title;
            }
          });
        }

        newpageData['belongPage'] = belongPage;
      }

      this.setState({
        pageData: newpageData
      }, function () {
        if (func) {
          func();
        }
      });
    } // 是否有所属板块

  }, {
    key: "onChangeIsFather",
    value: function onChangeIsFather(checked) {
      var _this7 = this;

      if (!checked) {
        this.setState({
          isFatherValid: true // isTimeValid: true

        }, function () {
          _this7.onChangepageData('', 'belongCode');

          _this7.setState({
            isShowTime: checked
          });
        });
      } else {
        this.setState({
          isShowTime: checked
        });
      }
    } // 新建弹框取消,表单重置

  }, {
    key: "onCancelSaveNew",
    value: function onCancelSaveNew() {
      this.setState({
        modalVisible: false,
        pageData: {
          pageName: '',
          belongCode: '',
          pageDesc: ''
        },
        isNameValid: true,
        isFatherValid: true
      });
      this.onCancelSetting();
    } // 表单验证

  }, {
    key: "onValidateForm",
    value: function onValidateForm(e, type) {
      var isValid = true;
      var value = e.target ? e.target.value : e;

      if (type === 'pageName') {
        isValid = !(value === '' || value.length > 15);
        this.setState({
          isNameValid: isValid
        });
      } else if (type === 'belongCode') {
        isValid = value !== '';
        this.setState({
          isFatherValid: isValid
        });
      }

      return isValid;
    }
    /**
     * 返回布局配置
     */

  }, {
    key: "getLayoutConfig",
    value: function getLayoutConfig() {
      return {
        selectTpl: this.state.selectTpl,
        selectModels: this.state.selectModels
      };
    }
    /**
     * 渲染模板布局
     */

  }, {
    key: "renderTplLayout",
    value: function renderTplLayout() {
      var _this8 = this;

      var layoutTpls = this.state.layoutTpls;
      var selectTpl = this.props.layoutConfig.selectTpl;
      return _react.default.createElement("div", {
        className: "layout-left-top"
      }, _react.default.createElement("div", {
        className: "layout-title"
      }, "1.\u6A21\u677F\u5E03\u5C40"), layoutTpls.map(function (item, index) {
        return _react.default.createElement("div", {
          className: "left-item",
          key: index,
          onClick: function onClick() {
            return _this8.onChangeLayoutTpl(index);
          }
        }, item.layoutCode === selectTpl.layoutCode ? _react.default.createElement(_icon.default, {
          className: "item-check",
          type: "check"
        }) : null, _react.default.createElement("div", {
          className: item.layoutCode === selectTpl.layoutCode ? 'item-picture active layout_' + item.layoutCode : 'item-picture layout_' + item.layoutCode
        }), item.layoutName);
      }));
    }
    /**
     * 点击指标（选中或者取消）
     */

  }, {
    key: "onClickIndicator",
    value: function onClickIndicator(item) {
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var arr; //如果不存在，则是选中，若已存在，则是取消选中

      if (!this.isIndicatorSelected(item)) {
        selectIndicators.push(item);
        arr = selectIndicators;
      } else {
        arr = _lodash.default.reject(selectIndicators, function (tem) {
          return tem.id === item.id;
        });
      }

      this.updateLayoutConfig({
        selectIndicators: arr
      });
    }
    /**
     * 点击新增组件（基础组件或者业务组件）
     */

  }, {
    key: "onClickNewAdd",
    value: function onClickNewAdd() {
      this.setState({
        cmpModalType: 'new',
        cmpModalVisible: true,
        cmpData: {}
      });
    }
    /**
     * 点击新增组件保存
     */

  }, {
    key: "handleNewCmpsModalSubmit",
    value: function handleNewCmpsModalSubmit(values, sucFn) {
      (0, _Services.registerCmp)(_objectSpread({}, values, {
        classify: this.state.indicatorActiveTab
      }), function (res) {
        sucFn();

        _message2.default.success(res);
      });
    }
    /**
     * 点击新增组件取消或关闭
     */

  }, {
    key: "handleCmpModalClose",
    value: function handleCmpModalClose(isUpdate) {
      var _this9 = this;

      this.setState({
        cmpModalVisible: false
      }, function () {
        if (isUpdate) {
          _this9.getIndicatorPanelLibData();
        }
      });
    }
    /**
     * 处理编辑组件信息
     */

  }, {
    key: "handleCmpModalEdit",
    value: function handleCmpModalEdit(item) {
      this.setState({
        cmpModalType: 'edit',
        cmpModalVisible: true,
        cmpData: item || {}
      });
    }
    /**
     * 删除组件
     */

  }, {
    key: "handleDeleteCmp",
    value: function handleDeleteCmp(item) {
      var _this10 = this;

      (0, _Services.deleteCmp)({
        id: item.id
      }, function (res) {
        _message2.default.success(res);

        _this10.getIndicatorPanelLibData();
      });
    }
    /**
     * 渲染组件
     */

  }, {
    key: "renderTabItems",
    value: function renderTabItems(cmps) {
      var _this11 = this;

      var arr = [];
      arr.push(_react.default.createElement("div", {
        className: "panel-item-wrapper",
        title: "\u65B0\u589E\u7EC4\u4EF6",
        onClick: function onClick() {
          return _this11.onClickNewAdd();
        }
      }, _react.default.createElement("div", {
        className: "panel-item newAdd"
      }, _react.default.createElement(_icon.default, {
        type: "plus"
      }))));
      cmps.map(function (item, n) {
        var isSelected = _this11.isIndicatorSelected(item);

        arr.push(_react.default.createElement("div", {
          className: "panel-item-wrapper",
          key: n
        }, _react.default.createElement("div", {
          className: isSelected ? 'panel-item active' : 'panel-item'
        }, _react.default.createElement("div", {
          className: "panel-icon",
          onClick: function onClick() {
            return _this11.onClickIndicator(item);
          }
        }, isSelected ? _react.default.createElement(_icon.default, {
          className: "item-check",
          type: "check"
        }) : '+'), _react.default.createElement("div", {
          className: "panel-item-image",
          onClick: function onClick() {
            return _this11.onClickIndicator(item);
          }
        }, _react.default.createElement("img", {
          src: "".concat(_config.default.FILE_BASE_URL).concat(item.img)
        })), _react.default.createElement("div", {
          className: "panel-item-operate"
        }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
          span: 12
        }, _react.default.createElement("a", {
          href: "javascript:void(0)",
          onClick: function onClick() {
            _this11.handleCmpModalEdit(item);
          }
        }, _react.default.createElement(_icon.default, {
          type: "edit"
        }))), _react.default.createElement(_col.default, {
          span: 12
        }, _react.default.createElement(_popconfirm.default, {
          title: "\u786E\u5B9A\u5220\u9664\uFF1F",
          okText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88",
          onConfirm: function onConfirm() {
            _this11.handleDeleteCmp(item);
          }
        }, _react.default.createElement("a", {
          href: "javascript:void(0)"
        }, _react.default.createElement(_icon.default, {
          type: "delete"
        }))))))), _react.default.createElement("div", null, item.title)));
      });
      return arr;
    }
    /**
     * 新增和编辑组件分类
     * @memberof LayoutDesigner
     */

  }, {
    key: "renderIndicatorPanelLib",

    /**
     * 渲染指标面板库
     * @returns {*}
     */
    value: function renderIndicatorPanelLib() {
      var _this12 = this;

      var _this$state3 = this.state,
          indicatorTabs = _this$state3.indicatorTabs,
          indicatorActiveTab = _this$state3.indicatorActiveTab;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "layout-title"
      }, "2.\u6307\u6807\u9762\u677F\u5E93 "), indicatorTabs.length > 0 ? _react.default.createElement(_tabs.default, {
        hideAdd: false,
        type: "editable-card",
        className: "panel-tab",
        activeKey: indicatorActiveTab,
        onEdit: this.handleEditTab,
        onChange: function onChange(e) {
          return _this12.onChangePanelTab(e);
        }
      }, indicatorTabs.map(function (it) {
        return _react.default.createElement(TabPane, {
          tab: _this12.renderTabBar(it),
          key: it.id,
          closable: true
        }, _react.default.createElement("div", {
          className: "panel-content"
        }, _this12.renderTabItems(it.children || [])));
      })) : _react.default.createElement("button", {
        type: "primary",
        onClick: this.showClassify
      }, "\u521B\u5EFA\u5206\u7C7B"));
    }
  }, {
    key: "getIndicatorPanelLibData",

    /**
     * 获取指标面板库数据
     */
    value: function getIndicatorPanelLibData() {
      var _this13 = this;

      (0, _Services.getIndicatorPanelLibData)({}, function (res) {
        var activeTab = '';

        if (res instanceof Array && res.length > 0) {
          activeTab = res[0].id;
        }

        _this13.setState({
          indicatorTabs: res || [],
          indicatorActiveTab: activeTab
        });
      });
    }
  }, {
    key: "renderIndicatorItem",
    value: function renderIndicatorItem() {
      var _this14 = this;

      var _this$state4 = this.state,
          activeIndicator = _this$state4.activeIndicator,
          hoverModel = _this$state4.hoverModel;
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var arr = [];
      selectIndicators.map(function (item, n) {
        arr.push(_react.default.createElement("div", {
          key: item.id,
          modelkey: item.id,
          onClick: function onClick(e) {
            return _this14.onActiveModel(item, e);
          },
          onMouseEnter: function onMouseEnter(e) {
            return _this14.onHoverModel(item);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this14.onLeaveModel();
          },
          className: activeIndicator.id === item.id ? 'model-item active' : 'model-item'
        }, _react.default.createElement("span", {
          className: "model-name"
        }, item.title), activeIndicator.id === item.id || hoverModel.id === item.id ? _react.default.createElement("span", {
          className: "model-delete",
          onClick: function onClick(e) {
            return _this14.onChangeModel(item, e, 'delete');
          }
        }, "\xD7") : null));
      });
      return arr;
    }
    /**
     * 渲染指标面板配置
     */

  }, {
    key: "renderIndicatorPanelConfig",
    value: function renderIndicatorPanelConfig() {
      var _this15 = this;

      var activeIndicator = this.state.activeIndicator;
      var selectIndicators = this.props.layoutConfig.selectIndicators;
      var mapIf = this.props.layoutConfig.selectTpl.layoutCode === '6-12-6';
      var a = 0;
      var b = activeIndicator.height || 250;
      selectIndicators.map(function (item, index) {
        if (item.id === activeIndicator.id) {
          a = index;
        }
      });

      if (mapIf) {
        if (a === 1) {
          b = activeIndicator.height || 500;
        }
      }

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "layout-title"
      }, "\u6307\u6807\u9762\u677F\u914D\u7F6E"), _react.default.createElement("div", {
        className: "layout-right-tab1-content"
      }, _react.default.createElement("div", {
        className: "model-list-wrapper"
      }, "\u8C03\u6574\u987A\u5E8F", _react.default.createElement("div", {
        className: "model-list"
      }, _react.default.createElement("div", {
        className: "list-data"
      }, selectIndicators.length > 0 ? this.renderIndicatorItem() : _react.default.createElement("div", {
        className: "list-nodata"
      }, "\u6682\u65E0\u6570\u636E")))), _react.default.createElement("div", {
        className: "model-size"
      }, "\u5C5E\u6027\u8BBE\u7F6E", _react.default.createElement("div", {
        className: "model-size-form"
      }, _react.default.createElement("div", null, "\u5BBD\u5EA6\uFF1A", _react.default.createElement(_input.default, {
        className: "model-size-input",
        size: "small",
        value: activeIndicator.width || 100,
        onChange: function onChange(e) {
          return _this15.onChangeSize(e, 'width');
        },
        onBlur: function onBlur(e) {
          return _this15.onUpdateSize();
        },
        disabled: activeIndicator.id === undefined,
        style: {
          width: '150px'
        }
      }), "%"), _react.default.createElement("div", null, "\u9AD8\u5EA6\uFF1A", _react.default.createElement(_input.default, {
        className: "model-size-input",
        size: "small",
        value: b,
        onChange: function onChange(e) {
          return _this15.onChangeSize(e, 'height');
        },
        onBlur: function onBlur(e) {
          return _this15.onUpdateSize();
        },
        disabled: activeIndicator.id === undefined,
        style: {
          width: '150px'
        }
      }), "px")))));
    }
    /**
     * 渲染页面布局设置
     */

  }, {
    key: "renderPanelLayoutConfig",
    value: function renderPanelLayoutConfig() {
      var _this16 = this;

      var selectTpl = this.props.layoutConfig.selectTpl;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "layout-title"
      }, "\u81EA\u7531\u5E03\u5C40"), _react.default.createElement("div", {
        className: "layout-right-tab2-content"
      }, _react.default.createElement("span", {
        className: "top-label"
      }, "\u6BD4\u4F8B"), _react.default.createElement("div", {
        className: "item-container"
      }, selectTpl.layout.map(function (item, index, arr) {
        if (index !== selectTpl.layout.length - 1) {
          return _react.default.createElement("div", {
            className: "item",
            key: index
          }, _react.default.createElement("span", {
            className: "item-label"
          }, index + 1, "\u884C"), _react.default.createElement(_input.default, {
            size: "small",
            value: item,
            onBlur: function onBlur(e) {
              return _this16.onUpdateLayout(e, index);
            },
            onChange: function onChange(e) {
              return _this16.onChangeInput(e, index);
            },
            disabled: _this16.isLayoutDisable(index)
          }));
        } else {
          return _react.default.createElement("div", {
            className: "item",
            key: index
          }, _react.default.createElement("span", {
            className: "item-label"
          }, index + 1, "\u884C"), _react.default.createElement(_input.default, {
            size: "small",
            value: item,
            onBlur: function onBlur(e) {
              return _this16.onUpdateLayout(e, index);
            },
            onChange: function onChange(e) {
              return _this16.onChangeInput(e, index);
            },
            disabled: _this16.isLayoutDisable(index)
          }), _react.default.createElement("span", {
            className: "item-handle",
            onClick: function onClick(e) {
              return _this16.onAddItem();
            }
          }, "+"), selectTpl.layout.length > _this16.getMinRows() ? _react.default.createElement("span", {
            className: "item-handle",
            onClick: function onClick(e) {
              return _this16.onDeleteItem();
            }
          }, "-") : null);
        }
      }))));
    }
  }, {
    key: "handleClose",
    value: function handleClose(isRefresh) {
      var _this17 = this;

      this.setState({
        classifyVisible: false
      }, function () {
        //如果需要刷新
        if (isRefresh) {
          _this17.getIndicatorPanelLibData();
        }
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values, type) {
      var _this18 = this;

      if (type === 'add') {
        (0, _Services.addClassify)(values, function (res) {
          _this18.handleClose('classifyNewVisible');

          _message2.default.success(res);
        });
      } else if (type === 'edit') {
        (0, _Services.editClassify)(values, function (res) {
          _this18.handleClose('classifyEditVisible');

          _message2.default.success(res);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this19 = this;

      return _react.default.createElement("div", {
        className: "layout-designer layout-designer-show"
      }, _react.default.createElement("div", {
        className: "layout-designer-content layout-tab1"
      }, _react.default.createElement("div", {
        className: "layout-left"
      }, this.renderTplLayout(), this.renderIndicatorPanelLib()), _react.default.createElement("div", {
        className: "layout-right"
      }, _react.default.createElement(_tabs.default, {
        type: "card",
        className: "panel-tab"
      }, _react.default.createElement(TabPane, {
        tab: "\u6307\u6807\u9762\u677F\u914D\u7F6E",
        key: "models"
      }, this.renderIndicatorPanelConfig()), _react.default.createElement(TabPane, {
        tab: "\u9875\u9762\u5E03\u5C40\u8BBE\u7F6E",
        key: "layout"
      }, this.renderPanelLayoutConfig())), _react.default.createElement("div", {
        className: "layout-footer"
      }, _react.default.createElement(_button.default, {
        key: "saveBtn",
        type: "primary",
        onClick: function onClick(e) {
          return _this19.onSaveSetting();
        }
      }, "\u4FDD\u5B58"), _react.default.createElement(_button.default, {
        key: "cancelBtn",
        onClick: function onClick(e) {
          return _this19.onCancelSetting();
        }
      }, "\u53D6\u6D88")))), _react.default.createElement(_NewLayoutPage.default, null), this.state.cmpModalVisible ? _react.default.createElement(_CmpModal.default, {
        classify: this.state.indicatorActiveTab,
        visible: this.state.cmpModalVisible,
        type: this.state.cmpModalType,
        onOk: function onOk(values, sucFn) {
          _this19.handleCmpModalSubmit(values, sucFn);
        },
        handleClose: function handleClose(isUpdate) {
          _this19.handleCmpModalClose(isUpdate);
        },
        data: this.state.cmpData
      }) : null, this.state.classifyVisible ? _react.default.createElement(_ClassifyModal.default, {
        type: this.state.classifyType,
        visible: this.state.classifyVisible,
        data: this.state.selectClassify,
        handleSubmit: function handleSubmit(values) {
          _this19.handleSubmit(values);
        },
        handleClose: function handleClose(isUpdate) {
          _this19.handleClose(isUpdate);
        }
      }) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return LayoutDesigner;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(LayoutDesigner);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabPane, "TabPane", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutDesigner.jsx");
  reactHotLoader.register(LayoutDesigner, "LayoutDesigner", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutDesigner.jsx");
  reactHotLoader.register(_default, "default", "D:\\bonc-workspace\\bonc-component-pool-fronted\\src\\components\\layout-config\\LayoutDesigner.jsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();