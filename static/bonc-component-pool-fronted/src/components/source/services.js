import {
  axios
} from '../../utils'

/**
 * 获取菜单list
 * @param {*} param 
 * @param {*} callback 
 */
export function findMenuTreeList(param) {
  return axios.post(`/admin/menu/list?pageSize=999999&pageNum=1`, param).then((res) => {
    let menus = res.data.list
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

// update menu
export function updateMenu(param) {
  return axios.put(`/admin/menu`, param)
}

// update menu
export function addMenu(param) {
  return axios.post(`/admin/menu`, param)
}

// delete menu
export function deleteMenu(param) {
  return axios.delete(`/admin/menu/` + param.id, {})
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
