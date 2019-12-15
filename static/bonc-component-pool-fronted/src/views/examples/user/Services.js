import {
  axios
} from '@/utils'

export function findUserList(params) {
  return axios.get('/users', {
    showError: true,
    params: params
  })
}
