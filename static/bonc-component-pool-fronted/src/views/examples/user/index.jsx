import React from 'react'
import { Table, Icon, Divider, Popconfirm } from 'antd'
import Lodash from 'lodash'
import Page from '@/components/page'
import { findUserList } from './Services'
import './index.less'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaddding: true,
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      data: []
    }
    //Lodash工具类用户法
    console.log(Lodash.join(['a', 'b', 'c'], '@@'))
  }

  componentWillMount() {
    this.fetchUserList({
      pageSize: 10,
      pageNum: 1
    })
  }

  componentDidMount() {
  }

  fetchUserList(params) {
    //请求ajax
    this.setState({
      loaddding: true
    })
    findUserList(params).then((res) => {
      this.setState({
        loaddding: false,
        data: res.data.list,
        pagination: {
          total: res.data.total
        }
      })
    })
  }

  onViewClick() {
    this.props.history.push({
      pathname: '/example/user-view',
      params: {
        'userId': 1
      }
    })
  }

  handleDelete(key) {

  }

  handleTableChange(pagination, filters, sorter) {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({
      pagination: pager
    })
    this.fetchUserList({
      pageSize: 10,
      pageNum: pager.current
    })
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName',
      render: text => <a href='javascript:;'>{text}</a>
    }, {
      title: '登陆名',
      dataIndex: 'loginId',
      key: 'loginId'
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password'
    }, {
      title: '电话',
      dataIndex: 'mobile',
      key: 'mobile'
    }, {
      title: '姓别',
      dataIndex: 'sex',
      key: 'sex'
    }, {
      title: '邮箱',
      dataIndex: 'mail',
      key: 'mail'
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={this.onViewClick.bind(this)}><Icon type='plus' />查看</a>
          <Divider type='vertical' />
          <a href='javascript:;'><Icon type='minus' />编辑</a>
          <Divider type='vertical' />
          <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record.key)}>
            <a href='javascript:;'>
              <Icon type='close' />删除
            </a>
          </Popconfirm>

        </span>
      )
    }]
    return (
      <Page className='page' inner>
        <div className='bonc-mung-user-list'>
          <Table className='bonc-mung-ant-table' loading={this.state.loaddding} columns={columns} dataSource={this.state.data} pagination={this.state.pagination} onChange={this.handleTableChange.bind(this)} />
        </div>
      </Page>
    )
  }
}
export default UserList
