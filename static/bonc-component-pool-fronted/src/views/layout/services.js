import {
  axios,
  Storage
} from '../../utils'

/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */
export function findMenuTreeList(param) {
  return axios.get(`/admin/menu/permissionList`, param).then((res) => {
    if (!res) return []
    if (!res.data) return []
    let items = res.data.list
    let menus = []
    Storage.setUserPermissions(items)
    items.map((item) => {
      if (item.type === 'menu' || item.type === 'folder') {
        menus.push(Object.assign({}, item))
      }
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
    item.subMenus = children
  }
  return item
}
