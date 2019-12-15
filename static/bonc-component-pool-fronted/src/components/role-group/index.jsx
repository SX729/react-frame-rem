import React, { Fragment } from 'react'
import { Breadcrumb, Form, Tabs } from 'antd'
import Page from '../page'
import GroupTabPanel from './GroupTabPanel'
import './index.less'
import { findGroupTypeList } from './services'
const TabPane = Tabs.TabPane

class Group extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'top',
      tabs: []
    }
  }

  componentWillMount() {
    findGroupTypeList().then((res) => {
      this.setState({
        tabs: res.data.list
      })
    })
  }

  handleModeChange = (e) => {
    const mode = e.target.value
    this.setState({ mode })
  }

  render() {
    const { mode } = this.state
    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">角色组管理</a></Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page' inner style={{ padding: '24px' }}>
          <Tabs defaultActiveKey="role" tabPosition={mode}>
            {
              this.state.tabs.map((tab) => {
                return (<TabPane tab={tab.name} key={tab.code} >
                  <GroupTabPanel {...tab} />
                </TabPane>)
              })
            }
          </Tabs>
        </Page>
      </Fragment>

    )
  }
}
export default Form.create()(Group)
