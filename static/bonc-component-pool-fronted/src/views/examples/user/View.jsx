import React from 'react'
import { withRouter } from 'react-router'
import { Breadcrumb, Icon } from 'antd'
import Page from '@/components/page'
import ConcaveCard from '@/components/concave-card'
import './View.less'

class UserView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '东方国信',
      age: 20,
      address: '朝阳区东方国信大厦'
    }
  }

  render() {
    return (
      <Page className='page'>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>
            <Icon type='home' />
          </Breadcrumb.Item>
          <Breadcrumb.Item href='#/example/user'>
            <Icon type='user' />
            <span>用户列表</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            用户
    </Breadcrumb.Item>
        </Breadcrumb>
        <div className="bonc-mung-user-content">
          <div className="form-item">
            <span className='label'>姓名: </span>
            <span>{this.state.name}</span>
          </div>
          <div className="form-item">
            <span className='label'>年龄: </span>
            <span>{this.state.age}</span>
          </div>
          <div className="form-item">
            <span className='label'>地址: </span>
            <span>{this.state.address}</span>
          </div>
        </div>

        <ConcaveCard style={{ width: '400px', height: '400px' }} />
      </Page>
    )
  }
}
export default withRouter(UserView)
