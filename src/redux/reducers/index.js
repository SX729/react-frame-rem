import counter from './example'
import page from './page'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let rootReducer = combineReducers({
  counter, page
})

export default persistReducer({
  key: 'root',
  storage,
  whitelist: [/**'counter' */] // only navigation will be persisted
}, rootReducer)

