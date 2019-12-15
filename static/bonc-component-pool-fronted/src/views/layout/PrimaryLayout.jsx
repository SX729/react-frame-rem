import React, {
  PureComponent, Fragment
} from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import Sider from '../../components/main-view/sider'
import Header from '../../components/main-view/header/Header'
import { findMenuTreeList } from './services'
import './PrimaryLayout.less'
import Config from '@config'

const { Content, Footer } = Layout

const mapStateToProps = state => ({
  collapsed: state.page.collapsed
})

// const menus1 = [{
//   icon: 'user',
//   title: '系统管理',
//   subMenus: [
//     {
//       icon: 'user',
//       title: '用户管理',
//       href: '/user'
//     }, {
//       icon: 'user',
//       title: '角色组管理',
//       href: '/group'
//     }, {
//       icon: 'user',
//       title: '角色类型管理',
//       href: '/groupType'
//     }, {
//       icon: 'user',
//       title: '资源管理',
//       href: '/sourceType'
//     }
//   ]
// }, {
//   icon: 'user',
//   title: '约束说明',
//   href: '/'
// }, {
//   icon: 'user',
//   title: 'Dashboard',
//   href: '/example/dashboard'
// }, {
//   icon: 'user',
//   title: '记数器',
//   href: '/example/counter'
// }]

class PrimaryLayout extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
  }

  componentWillMount() {
    findMenuTreeList({
      classify: Config.SIDE_CLASSIFY
    }).then((menus) => {
      this.setState({
        menus: menus
      })
    })
  }

  /**
   * 页面左侧菜单折叠事件
   */
  onCollapseChange = collapsed => {
    this.props.dispatch({
      type: 'APP_HANDLE_COLLAPSE_CHANGE',
      payload: collapsed
    })
  }

  render() {
    const { onCollapseChange } = this
    const { collapsed, childRoutes } = this.props
    const menus = this.state.menus
    const siderProps = {
      collapsed: collapsed,
      onCollapseChange,
      menus: menus
    }

    return (<Fragment><Layout className="bonc-mung-layout">
      <Sider {...siderProps} />
      <Layout className="bonc-mung-layout-main">
        <Header collapsed={collapsed} onCollapseChange={onCollapseChange} />
        <Content className="bonc-mung-layout-content">
          {renderRoutes(childRoutes)}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright ©2019 北京东方国信科技有限公司
          </Footer>
      </Layout>
    </Layout></Fragment>)
  }
}
export default hot(withRouter(connect(
  mapStateToProps
)(PrimaryLayout)))
