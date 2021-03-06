import {
  axios
} from '@/utils'

/**
 * 获取登陆用户信息
 */
export function getLoginUserInfo() {
  return axios.get('/api/sloginUserInfo')
}

/**
 * 获取登陆用户扩展信息
 */
export function getLoginUserExtInfo() {
  return axios.get('/api/sloginUserExtInfo')
}
