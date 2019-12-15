import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Menu, Icon, Layout, Avatar, Row, Col } from 'antd'
import classNames from 'classnames'
import config from '../../../config/index'
import * as loginServices from '../../../services/login'
import Nav from '../nav/Nav'

import {
  Storage
} from '../../../utils'
import './TopHeader.less'

const { SubMenu } = Menu

class TopHeader extends Component {
  // 登出
  logout() {
    loginServices.logout()
  }

  handleClick = ({ key }) => {
    if (key === 'user-pwd') {
      this.props.history.push('/jzc/changePassword')
    } else {
      this.logout()
      this.props.history.push('/login')
    }
  }

  render() {
    const {
      menus
    } = this.props
    return (
      <Layout.Header id="layoutHeader" className={classNames('bonc-mung-layout-top-header')} >
        <Row>
          <Col span={4}>
            <div className="bonc-mung-sider-logo">
              <img alt="logo" src={require('assets/images/logo.svg')} />
              <span>{config.applicationName}</span>
            </div>
          </Col>
          <Col span={14}>
            <Nav menus={menus} mode="horizontal" />
          </Col>
          <Col span={6}>

            <div className='menu-header-btn-container'>
              <div className='menu-header-btn'>
                <Icon type="question-circle" />
              </div>
              <Menu key="user" mode="horizontal" className="menu-header-btn" onClick={this.handleClick} selectable={false}>
                <SubMenu
                  title={
                    <Fragment>
                      <span style={{ marginRight: 4 }}>
                        你好,
                      </span>
                      <span style={{ marginRight: 8 }}>{Storage.getUserName()}</span>
                      <Avatar icon="user" style={{ marginRight: 8 }} />
                    </Fragment>
                  }
                >
                  <Menu.Item key="user-center">
                    <Icon type="user" />个人中心
                  </Menu.Item>
                  <Menu.Item key="user-pwd">
                    <Icon type="setting" />修改密码
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="user-out">
                    <Icon type="logout" />退出
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

TopHeader.propTypes = {
  menus: PropTypes.array,
  collapsed: PropTypes.bool,
  onCollapseChange: PropTypes.func
}

export default withRouter(TopHeader)
