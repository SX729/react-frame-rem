import {
  combineReducers
} from 'redux'
import counter from './counter'
import login from './Login'
import page from './Page'

export default combineReducers({
  counter,
  login,
  page
})
