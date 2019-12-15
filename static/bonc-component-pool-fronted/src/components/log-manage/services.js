import {
  axios
} from '@/utils'

export function logsList(params) {
  return axios.post(`/sys/logs/list`, params)
}

export function logsDelete(params) {
  return axios.post(`/sys/logs/delete`, params)
}
