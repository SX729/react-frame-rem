import webStorage from 'webStorage'


/**
 * 写入认证令牌登陆
 * @param successFn
 */
export function setAuthorizationToken(token) {
  webStorage.setItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN', token)
}

/**
 * 获取认证令牌登陆
 * @param successFn
 */
export function getAuthorizationToken() {
  return webStorage.getItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN')
}


/**
 * 写入用户信息
 * @param successFn
 */
export function setUserInfo(userInfo) {
  webStorage.setItem('BONC_INDUSTRY_USERINFO', JSON.stringify(userInfo))
}


/**
 * 获取用户信息
 * @param successFn
 */
export function getUserInfo() {
  return JSON.parse(webStorage.getItem('BONC_INDUSTRY_USERINFO'))
}

/**
 * 获取用户名字
 * @param successFn
 */
export function getUserName() {
  return (getUserInfo() || {})['name']
}

/**
 * 获取用户登陆名称
 * @param successFn
 */
export function getLoginId() {
  return (getUserInfo() || {})['username']
}


/**
 * 是否登陆
 */
export function isLogin() {
  return getAuthorizationToken() != null
}

/**
 * 登出
 */
export function logout() {
  webStorage.removeItem('BONC_INDUSTRY_AUTHORIZATION_TOKEN')
  webStorage.removeItem('BONC_INDUSTRY_USERINFO')
}


export function setUserPermissions(permissions) {
  webStorage.setItem('BONC_INDUSTRY_PERMISSIONS', JSON.stringify(permissions))
}

export function getUserPermissions(url) {
  let permissions = JSON.parse(webStorage.getItem('BONC_INDUSTRY_PERMISSIONS')) || []
  let resource = {
    children: []
  }
  permissions.map((menu) => {
    if (url === menu.href) {
      Object.assign(resource, menu)
    }
  })
  permissions.map((menu) => {
    if (menu.parentId === resource.id) {
      resource.children.push(Object.assign({}, menu))
    }
  })
  return resource
}
