import {
  axios
} from '../../utils'

export function findUserList(pageNum,params) {
  return axios.post(`/admin/user/list?pageSize=10&pageNum=${pageNum}`, params)
}

export function addUser(data) {
  return axios.post('/admin/user', data)
}

export function updateUser(data) {
  return axios.put('/admin/user', data)
}

export function deleteUser(id) {
  return axios.delete(`/admin/user/${id}`)
}

export function activeUser(id) {
  return axios.post(`/admin/user/active/${id}`)
}

export function deleteUserMore(data) {
  return axios.post(`/admin/user/more`, data)
}

export function resetPassword(params) {
  return axios.get(`/admin/user/resetPassword`,{params: params})
}

export function checkUsername(username) {
  return axios.get(`/admin/user/username/${username}`,{showLoading:false})
}
