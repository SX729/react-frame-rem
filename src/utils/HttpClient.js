import axios from 'axios'
import React from 'react'
import config from '@/config/index'
import {
  Loading,
  Storage
} from '@static/bonc-component-pool-fronted'
import {
  message
} from 'antd'
import {
  createHashHistory
} from 'history';

const history = createHashHistory();

//开发模式下开启 mock拦截器
process.env.NODE_ENV === 'development' && !!config.MOCKABLE && require('@/mocks')
//生产模式下开启 mock拦截器
process.env.NODE_ENV === 'production' && !!config.MOCKABLE && require('@/mocks')
const {
  API_BASE_URL
} = config

Object.assign(axios.defaults, {
  baseURL: API_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

axios.defaults.showLoading = true //是否显示遮罩
axios.defaults.showError = true //返回错误时是否显示错误信息
axios.defaults.timeout = 300000 //超时设置

let xhrqueue = []

/**
 * 请求前钩子函数
 */
axios.interceptors.request.use(function (config) {
  //如果定义了showLoading  一般只有showLoading为false 时才需要传   默认不传就是默认显示全局遮罩
  if (config && config.params && config.params.showLoading !== undefined && !config.params.showLoading) {
    //不需要显示遮罩
  } else {
    if (config.showLoading) {
      xhrqueue.push(1)
      Loading.open()
    }
  }
  config.headers['Authorization'] = 'Bearer ' + Storage.getAuthorizationToken()
  return config
})

axios.interceptors.response.use(function (response) {
  //如果定义了showLoading  一般只有showLoading为false 时才需要传   默认不传就是默认显示全局遮罩
  if (response && response.config && response.config.params && response.config.params.showLoading !== undefined && !response.config.params.showLoading) {
    //不需要做任何处理
  } else {
    if (response && response.config && response.config.showLoading) {
      xhrqueue.shift()
      if (xhrqueue.length === 0) {
        Loading.close()
      }
    }
  }
  return response
}, function (error) {
  if (error.config && error.config.showLoading) {
    xhrqueue.shift()
    if (xhrqueue.length === 0) {
      Loading.close()
    }
  }
  if (error.response.status === 401) {
    Storage.logout();
    return history.push('/login');
  }
  if (error.response.status === 400) {
    //用户名密码错误
    return error.response
  }
  if (error && error.response) {
    // notification['error']({
    //   message: '出错了, 错误码: [' + error.response.status + ']',
    //   description: error.response.data.message || '系统内部错误，请联系管理员!'
    // })
    message.warning(error.response.data.message.slice(0, 100), 3);
  }
})

export {
  axios
}
