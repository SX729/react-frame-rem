import {
  axios
} from '../../utils'

export function messageList(params) {
  return axios.get(`/message/list`, { params: params })
}

export function messageDelete(params) {
  return axios.post(`/message/delete`, params)
}
