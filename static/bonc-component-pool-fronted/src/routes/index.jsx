import React from 'react'
import { Redirect } from 'react-router-dom'
import { Storage } from '@/utils'
import config from '@/config/index'

import MainView from '@/views/main-view/MainView'
import HomeView from '@/views/home-view'
import UserModify from '@/views/examples/user/Form'
import UserView from '@/views/examples/user/View'
import Dashboard from '@/views/examples/dashboard'
import Counter from '@/views/examples/counter'
import NewUserList from '@/components/user'
import Login from '@/components/login'
import Group from '@/components/group'
import GroupType from '@/components/group-type'
import Menu from '@/components/menu'
import LogManagement from '@/components/log-management'
import ChangePassword from '@/components/change-password'
import NewsManagement from '@/components/news-management'


const routers = [{
  path: '/login',
  component: Login,
  exact: true,
  isAuth: false
}, {
  component: MainView,
  childRoutes: [{
    path: '/',
    exact: true,
    component: HomeView,
    isAuth: true
  }, {
    path: '/user',
    component: NewUserList,
    isAuth: true
  },
  {
    path: '/group',
    component: Group,
    isAuth: true
  },
  {
    path: '/groupType',
    component: GroupType,
    isAuth: true
  },
  {
    path: '/source',
    component: Menu,
    isAuth: true
  },
  {
    path: '/logManagement',
    component: LogManagement
  },
  {
    path: '/changePassword',
    component: ChangePassword
  },
  {
    path: '/newsManagement',
    component: NewsManagement
  },
  {
    path: '/example/user-edit',
    component: UserModify,
    isAuth: true
  },
  {
    path: '/example/user-view',
    component: UserView,
    isAuth: true
  },
  {
    path: '/example/dashboard',
    component: Dashboard
  },
  {
    path: '/example/counter',
    component: Counter
  }]
}]

function injectAuthenticationRender(routers) {

  let digui = function (object) {
    if (object.isAuth === true) {
      object.render = () => {
        let permission = Storage.getUserPermissions(object.path)

        if (!Storage.isLogin()) {
          return (< Redirect to="/login" />)
        } else {
          let Component = object.component
          return (< Component />)
        }
      }
    }
    if (object.childRoutes) {
      object.childRoutes.map((router) => {
        digui(router)
      })
    }
  }

  routers.map((router) => {
    digui(router)
  })
  return routers
}

export default injectAuthenticationRender(routers)
