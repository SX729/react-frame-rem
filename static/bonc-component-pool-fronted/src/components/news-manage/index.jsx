import React, { Fragment } from 'react'
import {Tabs, Breadcrumb, Col, Row, Button, Table, Popconfirm, Icon, message} from 'antd'
import Page from '../../components/page'
import {messageList, messageDelete} from './services'

class NewsManagement extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0,
        current: 1
      },
      type: props.location.search.slice(1) || 'noticeMessage', //信息类型  noticeMessage    othersMessage
      selectedRowKeys: [],
      visible: false,
      defaultKey: props.location.search.slice(1) || 'noticeMessage'
    }
  }

  componentDidMount () {
    this.getMessageList()
  }

  getMessageList = () => {
    let {current, defaultPageSize} = this.state.pagination
    let {pagination} = this.state
    let params = {
      pageSize: defaultPageSize,
      pageNum: current,
      type: this.state.type
    }
    messageList(params).then((res) => {
      let data = res.data
      pagination.total = data.total
      this.setState({
        data: data.list,
        pagination
      })
    })
  }

  handleSingleDelete = (id) => {
    let selectedRowKeys = [id]
    this.setState({
      selectedRowKeys
    }, () => {
      this.handleDelete()
    })
  }

  handleDelete = () => {
    let param = {
      messageIds: this.state.selectedRowKeys,
      type: this.state.type
    }
    messageDelete(param).then((res) => {
      message.success('删除成功')
      this.setState({selectedRowKeys: []})
      this.getMessageList()
    })
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  handleTabsChange = (key) => {
    this.setState({
      type: key
    }, () => {
      this.getMessageList()
    })
  }

  getTableColumns() {
    return [{
      title: '序号',
      dataIndex: 'number',
      render: (text, record, index) => {
        let page = this.state.pagination.current
        return (page - 1) * 10 + index + 1
      }
    }, {
      title: '消息标题',
      dataIndex: 'title'
    }, {
      title: '消息内容',
      dataIndex: 'content',
      render: (text) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
            {text}
          </div>
        )
      }
    }, {
      title: '发送时间',
      dataIndex: 'createTime',
      width: 200
    }, {
      title: '操作',
      dataIndex: 'operate',
      width: 200,
      render: (text, record) => {
        return (
          <span>
            <Popconfirm title="确认删除?" onConfirm={() => this.handleSingleDelete(record.messageId)}>
              <a href='javascript:;'>
                <Icon type='close' />删除
              </a>
            </Popconfirm>
          </span>
        )
      }
    }]
  }

  render () {
    const {selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const TabPane = Tabs.TabPane
    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>消息管理</Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page news-management-container' inner style={{ padding: '24px' }}>
          <Row gutter={24} className='searchBar'>
            <Col>
              <Row type="flex" align="middle" justify="space-between">
                <div>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.handleDelete} disabled={selectedRowKeys.length === 0}>批量删除</Button>
                </div>
              </Row>
            </Col>
          </Row>
          <div>
            <Tabs defaultActiveKey={this.state.defaultKey} onChange={this.handleTabsChange}>
              <TabPane tab={`通知`} key='noticeMessage'>
                <Table
                  rowKey={record => record.messageId}
                  rowSelection={rowSelection}
                  bordered className='bonc-mung-ant-table'
                  columns={this.getTableColumns()}
                  dataSource={this.state.data}
                  onChange={this.handleChange}
                  pagination={this.state.pagination} />
              </TabPane>
              <TabPane tab={`消息`} key='othersMessage'>
                <Table
                  rowKey={record => record.messageId}
                  rowSelection={rowSelection}
                  bordered className='bonc-mung-ant-table'
                  columns={this.getTableColumns()}
                  dataSource={this.state.data}
                  onChange={this.handleChange}
                  pagination={this.state.pagination} />
              </TabPane>
            </Tabs>
          </div>
        </Page>
      </Fragment>
    )
  }
}

export default NewsManagement
