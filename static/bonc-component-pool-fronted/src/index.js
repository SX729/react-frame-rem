import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import {LocaleProvider} from 'antd'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from '@/redux/store'
import App from '@/App'
import * as loginService from './services/login'
import * as userService from './services/User'
import {Storage} from './utils'
import page from './redux/reducers/Page'

const render = Component => {
  ReactDOM.render(
      <Provider store={store} >
      <LocaleProvider locale={zhCN} >
        <AppContainer>
          <Component />
        </AppContainer>
      </LocaleProvider>
    </Provider >,
    document.getElementById('root')
  )
}

// render(App)
// ReactDOM.render(<Provider store={store} >
//   <LocaleProvider locale={zhCN} >
//     <App />
//   </LocaleProvider>
// </Provider >, document.getElementById('root'))

// if (module.hot) {
//   console.log('更新了')
//   module.hot.accept('./App', () => render(App))
// }

export {loginService}
export {userService}
export {page}
export {Storage}
export {default as Echarts} from './components/echarts'
export {default as Login} from './components/login'
export {default as HomeView} from './views/home-view'
export {default as UserList} from './components/user-list'
export {default as RoleGroup} from './components/role-group'
export {default as RoleType} from './components/role-type'
export {default as Source} from './components/source'
export {default as LogManage} from './components/log-manage'
export {default as NewsManage} from './components/news-manage'
export {default as changePwd} from './components/change-pwd'
export {default as PrimaryLayout} from './views/layout/PrimaryLayout'
export {default as UCBLayout} from './views/layout/UCBLayout'
export {default as Loading} from './components/loader'

