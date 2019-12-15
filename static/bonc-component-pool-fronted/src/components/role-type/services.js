import {
  axios
} from '@/utils'

export function findGroupTypeList(pageNum,params) {
  return axios.post(`/admin/groupType/list?pageSize=10&pageNum=${pageNum}`, params)
}

export function addGroupType(data) {
  return axios.post('/admin/groupType', data)
}

export function updateGroupType(data) {
  return axios.put('/admin/groupType', data)
}

export function deleteGroupType(id) {
  return axios.delete(`/admin/groupType/${id}`)
}

export function checkGroupTypeCode(code) {
  return axios.get(`/admin/groupType/validateByCode/${code}`)
}
