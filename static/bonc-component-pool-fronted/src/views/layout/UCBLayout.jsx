import React, {
  PureComponent, Fragment
} from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import TopHeader from '../../components/main-view/header/TopHeader'
import { findMenuTreeList } from './services'
import './UCBLayout.less'

const { Content, Footer } = Layout

const mapStateToProps = state => ({
  collapsed: state.page.collapsed
})

class UCBLayout extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
  }
  componentWillMount() {
    findMenuTreeList({}).then((menus) => {
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
    const { childRoutes } = this.props
    const menus = this.state.menus

    return (<Fragment><Layout className="bonc-mung-ucb-layout">
      <TopHeader menus={menus} onCollapseChange={onCollapseChange} />
      <Layout className="bonc-mung-layout-main">
        <Content className="bonc-mung-layout-content">
          {renderRoutes(childRoutes)}
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Copyright ©2019 北京东方国信科技有限公司
      </Footer>
    </Layout></Fragment>)
  }
}
export default hot(withRouter(connect(
  mapStateToProps
)(UCBLayout)))
