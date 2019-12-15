import {
    APP_HANDLE_COLLAPSE_CHANGE
  } from '@/redux/constants/ActionTypes'
  
  const initialState = {
    collapsed: false
  }
  
  export default function collapseChange(state = initialState, action) {
    switch (action.type) {
      case APP_HANDLE_COLLAPSE_CHANGE:
        return {
          collapsed: action.payload
        }
      default:
        return state
    }
}
