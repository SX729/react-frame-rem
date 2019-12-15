import React from 'react'
import { Redirect } from 'react-router-dom'
import MainView from '@/views/main-view/MainView'
import Dashboard from '@/views/examples'
import { LayoutManage, TaskList, Login, HomeView, UserList, RoleGroup, RoleType, Source, LogManage, changePwd, Storage, NewsManage } from '@static/bonc-component-pool-fronted'
// import LayoutManage from '@/components/layout-config'
import Portal from '@/views/portal/Portal.jsx'
const routers = [{
  path: '/login',
  component: Login,
  exact: true,
  isAuth: false
}, {
  component: MainView,
  childRoutes: [{
    path: '/home',
    exact: true,
    component: HomeView,
    isAuth: true
  }, {
    path: '/',
    exact: true,
    component: HomeView,
    isAuth: true
  }, {
    path: '/user',
    component: UserList,
    isAuth: true
  },
  {
    path: '/group',
    component: RoleGroup,
    isAuth: true
  },
  {
    path: '/groupType',
    component: RoleType,
    isAuth: true
  },
  {
    path: '/source',
    component: Source,
    isAuth: true
  },
  {
    path: '/pageManage',
    component: LayoutManage,
    isAuth: true
  },
  {
    path: '/logManagement',
    component: LogManage
  },
  {
    path: '/changePassword',
    component: changePwd
  },
  {
    path: '/newsManagement',
    component: NewsManage
  },
  {
    path: '/taskList',
    component: TaskList
  },
  {
    path: '/example/dashboard',
    component: Dashboard
  },
  {
    path: '/portal',
    component: Portal
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

export default routers
