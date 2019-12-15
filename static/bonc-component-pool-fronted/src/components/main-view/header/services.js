import {
  axios
} from '../../../utils'

export function messageList(params) {
  return axios.get(`/message/list`, { params: params })
}
