/**
 * 登陆用户服务类
 */
import {
  axios,
  Storage,
  AesEncrypt
} from '../utils'
import config from '../config'

const request = (response, successFn) => {
  if (!response) {
    return
  }
  if (response.status === 302) { // 重定向
    if (response.request.responseURL.indexOf('registerServer2Cas') > -1) {
      let data = response.data
      if (typeof data === 'string') {
        if (data.indexOf('loginUrl') !== -1) {
          let url = data.substring(data.indexOf('loginUrl') + 10, data.length - 1)
          axios.get(url)
        }
      }
    }
  } else if (response.status === 200) {
    if (!response.headers['content-type']) {
      successFn(response)
    }
    // 跳到登陆页面
    if (response.headers['content-type'].indexOf('text/html') !== -1 && response.request.responseURL.indexOf('/login') > -1) {
      window.top.location.href = config['LOGIN_URL']
    } else if (response['data'] && response['data'].loginUrl && response['data'].loginUrl.indexOf('/login') > -1) {
      axios.get(response['data'].loginUrl).then((response) => {
        request(response, successFn)
      })
    } else {
      if (successFn) {
        successFn(response)
      }
    }
  }
}

/**
 * 注册登陆
 * @param successFn
 */
export function login(params) {
  params.password = AesEncrypt.encrypt(params.password)

  // if (config.LONGIN_MODEL === 'CAS') {
  return axios({
    url: '/api/login',
    method: 'post',
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += it + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  // } else {
  //   return axios.get('/api/registerServer2Cas')
  // }
}

/**
 * 登出
 * @returns {*}
 */
export function logout() {
  Storage.logout()
  return axios.get('/api/logout')
}
