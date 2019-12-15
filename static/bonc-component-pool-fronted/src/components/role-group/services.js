import {
  axios
} from '@/utils'

export function findGroupTypeList() {
  return axios.post(`/admin/groupType/list?pageSize=9999999&pageNum=1`, {})
}
export function findUserList() {
  return axios.post(`/admin/user/list?pageSize=9999999&pageNum=1`, {
    enabled: 1
  })
}

export function findRoleUserList(groupId) {
  return axios.post(`/admin/userGroupRel/list?pageSize=9999999&pageNum=1`, {
    groupId: groupId
  })
}

export function insertUserRoleBatch(groupId, groupType, list) {
  return axios.post(`/admin/userGroupRel/insertBatch`, {
    groupId: groupId,
    groupType: groupType,
    userIds: list
  })
}

export function deleteUserRoleBatch(groupId, groupType, list) {
  return axios.post(`/admin/userGroupRel/deleteBatch`, {
    groupId: groupId,
    groupType: groupType,
    userIds: list
  })
}
export function findGroupList(params) {
  return axios.post(`/admin/group/list?pageSize=9999999&pageNum=1`, params).then((res) => {
    let items = res.data.groupPageInfo.list
    let data = []
    let parentIds = res.data.parentId
    parentIds.map((parItem, parIndex) => {
      items.map((item) => {
        if (item.parentId === parItem) { //获取父元素
          let o = createMenuNode(item, items)
          data.push(o)
        }
      })
    })
    return data
  })
}
export function addGroup(params) {
  return axios.post(`/admin/group/`, params)
}
export function deleteGroup(params) {
  return axios.delete(`/admin/group/` + params.id, {})
}
export function editGroup(params) {
  return axios.put(`/admin/group/`, params)
}
/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */
export function findMenuTreeList(param) {
  return axios.post(`/admin/menu/list?pageSize=999999&pageNum=1`, param).then((res) => {
    let items = res.data.list
    let menus = []
    items.map((item) => {
      menus.push(Object.assign({}, item))
    })
    return menus
  }).then((menus) => {
    let menutrees = []
    menus.map((item) => {
      if (item.parentId === '0') { //获取父元素
        let o = createMenuNode(item, menus)
        menutrees.push(o)
      }
    })
    return menutrees
  })
}
/**
 * 获取已授权的菜单list 不分页
 * @param {*} param 
 */
export function getAuthedMenuList(param) {
  return axios.post(`/admin/groupResourceRel/list`, param).then((res) => {
    let keys = []
    res.data.map((item) => {
      keys.push(item.resourceId)
    })
    console.log(res)
    return keys
  })
}
// 授权动作
export function authMenuToGroup(param) {
  return axios.post(`/admin/groupResourceRel/insertBatch`, param)
}


/**
 * 递归遍历生成菜单节点
 * @param {*} item 
 * @param {*} items 
 */
function createMenuNode(item, items) {
  var children = []
  items.map((data) => {
    if (data.parentId === item.id) {
      createMenuNode(data, items)
      children.push(data)
    }
  })
  if (children.length > 0) {
    item.children = children
  }
  return item
}
