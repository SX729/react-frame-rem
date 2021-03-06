/**
 * 系统配置类入口
 */
const Config = {
  //服务地址及端口配置
  API_BASE_URL: 'http://localhost:1111',
  //单点登出地址配置
  LOGOUT_URL: '',
  //单点登陆地址配置
  LOGIN_URL: 'http://127.0.0.1/cas/login',
  //开启 mock 拦截器
  MOCKABLE: true,
  applicationName: 'R基础开发框架',
  // 登陆模式 CAS/Form|simulatio
  LONGIN_MODEL: 'CAS',
  //primary|ucb
  LAYOUT_MODE: 'primary',
  // 资源类型
  resourceType: {
    'folder': '菜单目录',
    'menu': '菜单项',
    'button': '按钮'
  },
  icons: [
    'area-chart',
    'bar-chart',
    'line-chart',
    'pie-chart',
    'credit-card',
    'dot-circle-o',
    'plus-square',
    'spinner',
    'file',
    'file-audio-o',
    'ambulance',
    'cab',
    'plane',
    'subway',
    'wheelchair',
    'rocket',
    'ship',
    'motorcycle',
    'truck',
    'pie-chart',
    'phone-square',
    'flag',
    'envelope-open',
    'address-book',
    'archive',
    'bathtub',
    'binoculars',
    'briefcase',
    'camera',
    'cloud',
    'gift',
    'heartbeat',
    'building',
    'coffee',
    'group'
  ]
}

//方便运行时态对配置修改
if (window && window.mungConfig) {
  Object.assign(Config, window.mungConfig)
}

export default Config
