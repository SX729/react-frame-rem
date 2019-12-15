import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import {LocaleProvider} from 'antd'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from '@/redux/store'
import App from '@/App'
import './utils/px2rem'
const render = Component => {
  ReactDOM.render(
      <Provider store={store} >
        <LocaleProvider locale={zhCN} >
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer>
              <Component />
            </AppContainer>
          </PersistGate>
        </LocaleProvider>
    </Provider >,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  console.log('更新了')
  module.hot.accept('./App', () => render(App))
}
