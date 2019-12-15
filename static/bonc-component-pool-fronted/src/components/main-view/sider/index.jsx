import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import classNames from 'classnames'
import Nav from '../nav/Nav'
import config from '../../../config/index'
import './index.less'

class Sider extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {
      menus,
      collapsed,
      onCollapseChange
    } = this.props

    return (
      <Layout.Sider
        className="bonc-mung-sider"
        width={256}
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={onCollapseChange}>
        <div className={classNames('bonc-mung-sider-brand', {
          'center': collapsed
        })}>
          <div className="bonc-mung-sider-logo">
            <img alt="logo" src={require('assets/images/logo.svg')} />
            {collapsed ? null : <span>{config.applicationName}</span>}
          </div>
        </div>
        <div className="bonc-mung-sider-menuContainer" >
          <Nav menus={menus} mode="inline" />
        </div>
      </Layout.Sider>
    )
  }
}

Sider.propTypes = {
  menus: PropTypes.array,
  theme: PropTypes.string,
  collapsed: PropTypes.bool,
  onThemeChange: PropTypes.func,
  onCollapseChange: PropTypes.func
}

export default Sider
