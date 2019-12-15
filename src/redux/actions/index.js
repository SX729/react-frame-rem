import * as actionType from '@/redux/constants/ActionTypes'
import {
  userService
} from '@static/bonc-component-pool-fronted'

export const loginLoading = (loading) => ({
  type: actionType.USER_LOGIN_LOADING,
  loginLoading: loading
})

export const loginSuccess = (data) => ({
  type: actionType.USER_LOGIN_SUCCESS,
  data: data
})

export const setUserExtInfo = (userExtInfo) => ({
  type: actionType.SET_USER_EXT_INFO,
  userExtInfo: userExtInfo
})

export const setNewPlateBuildShow = (data) => ({
  type: actionType.UP_NEW_PLATE_BUILD_SHOW,
  data: data
})

export const toggleLayoutConfigVisible = (data) => ({
  type: actionType.TOGGLE_LAYOUT_CONFIG_VISIBLE,
  data: data
})

export const setNewPlateLayoutShow = (data) => ({
  type: actionType.UP_NEW_PLATE_LAYOUT_SHOW,
  data: data
})

export const login = () => {
  return (dispatch) => {
    // 假接口，看看就行
    // dispatch(loginLoading(true));
    return userService.getLoginUserInfo().then((response) => {
      let userData = response['data']
      if (userData) {
        userData = userData['data'] || {}
        // let roles = userData['roles'] || null
        dispatch(loginSuccess({
          isLogin: true,
          loginUserInfo: userData,
          loginUserId: userData['loginId'] || null,
          loginUserName: userData['userName'] || null,
          userRole: userData['roles'] || null,
          isRootRole: userData['isRoot'] || false
        }))
        userService.getLoginUserExtInfo().then((response) => {
          dispatch(setUserExtInfo(response['data']))
          dispatch(loginLoading(false))
        })
      }
    }).catch((e) => {
      dispatch(loginLoading(false))
    })
  }
}
