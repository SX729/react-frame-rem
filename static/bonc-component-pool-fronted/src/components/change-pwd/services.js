import {
  axios
} from '../../utils'

export function changePassword(params) {
  return axios.get(`/admin/user/updatePassword`, { params: params })
}
