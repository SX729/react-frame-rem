// 设计器
import {
    axios
} from '../utils'
import Config from '../config/index'
/**
 * 获取tab页列表
 */
export function getPanelList (sucFn) {
    return axios.get('admin/menu/folderList', {
        params: {
            id: Config.FOLDER_LIST_ID
        }
    }).then(function (res) {
        sucFn(res.data)
    })
}
/**
 * 获取tab页下子模块
 */
// export function getPanelModels (params, sucFn) {
//     console.log(params)
//     return axios.post('/admin/menu/list', {params}).then(function (res) {
//         sucFn(res.data)
//     })
// }
export function queryVerifyPage (params, sucFn) {
    console.log(params)
    return axios.get('/pageInfo/verifyPage', {params}).then(function (res) {
        sucFn(res.data)
    })
}

/**
 * 新建保存
 */
export function queryAddPage (params, sucFn) {
    console.log(params)
    return axios.post('/pageInfo/addPlate', params).then(function (res) {
        sucFn(res.data)
    })
}
export function queryUpdatePage (params, sucFn) {
    console.log(params)
    return axios.post('/pageInfo/editPlate', params).then(function (res) {
        sucFn(res.data)
    })
}
//导航条
export function navBarShow (sucFn) {
    return axios.get('admin/menu/navbar', {
        params: {
            id: Config.FOLDER_LIST_ID
        }}).then(function (res) {
        sucFn(res.data)
    })
}
//请求页面
export function queryPageshow (params, sucFn) {
    return axios.get('pageInfo/queryPage', {params}).then(function (res) {
        sucFn(res.data)
    })
}
