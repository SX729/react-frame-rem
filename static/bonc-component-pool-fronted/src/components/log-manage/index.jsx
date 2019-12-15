import React, { Fragment } from 'react'
import { Breadcrumb, Button, Col, DatePicker, Row, Table, Divider, Icon, Popconfirm, message, Form, Modal, Input } from 'antd'
import Page from '../../components/page'
import {logsList, logsDelete} from './services'
import moment from 'moment'
import './index.less'

class LogManagement extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0,
        current: 1
      },
      data:[],
      beginTime: '',
      endTime: '',
      selectedRowKeys: [],
      visible: false,
      crtUserName: '',
      detailRows: [
        {
          title: '日志标题',
          code: 'typeName'
        }, {
          title: '操作IP地址',
          code: 'remoteAddr'
        }, {
          title: '请求URI',
          code: 'requestUri'
        }, {
          title: '操作方式',
          code: 'method'
        }, {
          title: '操作提交的数据',
          code: 'params'
        }, {
          title: '操作人',
          code: 'crtUserName'
        }, {
          title: '操作时间',
          code: 'crtTime'
        }
      ]
    }
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
      title: '日志标题',
      dataIndex: 'title'
    }, {
      title: '操作IP地址',
      dataIndex: 'remoteAddr'
    }, {
      title: '请求URI',
      dataIndex: 'requestUri'
    }, {
      title: '操作方式',
      dataIndex: 'method'
    }, {
      title: '操作提交的数据',
      dataIndex: 'params',
      width: 200,
      render: (text) => {
        return (
          <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
            {text}
          </div>
        )
      }
    }, {
      title: '操作人',
      dataIndex: 'crtUserName'
    }, {
      title: '操作时间',
      dataIndex: 'crtTime',
      render: (text) => {
        return moment(text).format('YYYY-MM-DD HH:mm:ss')
      }
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, record) => {
        return (
          <span>
            <a onClick={this.showModal.bind(this, record)}><Icon type='eye' />查看</a>
            <Divider type='vertical' />
            <Popconfirm title="确认删除?" onConfirm={() => this.handleSingleDelete(record.id)}>
              <a href='javascript:;'>
                <Icon type='close' />删除
              </a>
            </Popconfirm>
          </span>
        )
      }
    }]
  }

  componentDidMount = () => {
    this.getLogsList()
  }

  getLogsList = () => {
    let {current, defaultPageSize} = this.state.pagination
    let {beginTime, endTime, pagination, crtUserName} = this.state
    let params = {
      pageSize: defaultPageSize,
      pageNum: current,
      beginTime,
      endTime,
      crtUserName
    }
    logsList(params).then((res) => {
      pagination.total = res.data.total
      this.setState({
        data: res.data.list,
        pagination
      })
    })
  }

  findByCondition = () => {
    let pagination = this.state.pagination
    pagination.current = 1
    this.setState({
      pagination
    })
    this.getLogsList()
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      pagination
    }, () => {
      this.getLogsList()
    })
  }

  handleRangePickerChange = (date, dateString) => {
    this.setState({
      beginTime: dateString[0],
      endTime: dateString[1]
    })
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys })
  }

  handleSingleDelete = (id) => {
    let selectedRowKeys = [id]
    this.setState({
      selectedRowKeys
    }, () => {
      this.handleDelete()
    })
  }

  showModal = (record) => {
    this.setState({
      visible: true,
      detail: record
    })
  }

  handleDelete = () => {
    let param = {
      logIds: this.state.selectedRowKeys
    }
    logsDelete(param).then((res) => {
      message.success('删除成功')
      this.getLogsList()
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  handleOperatorChange = (e) => {
    this.setState({
      crtUserName: e.target.value
    })
  }

  getDetailContent = (code) => {
    const {detail} = this.state
    let retVal = (detail && detail[code]) || ''
    if (code === 'crtTime') {
      retVal = moment(detail[code]).format('YYYY-MM-DD HH:mm:ss')
    }
    return retVal
  }

  render () {
    const { RangePicker } = DatePicker
    const {selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }

    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>日志管理</Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page log-management-container' inner style={{ padding: '24px' }}>
          <Row gutter={24} className='searchBar'>
            <Col span={1} style={{paddingRight: 0, paddingTop: '5px'}}>时间 :</Col>
            <Col span={4} style={{paddingLeft: 0}}>
              <RangePicker onChange={this.handleRangePickerChange} />
            </Col>
            <Col span={1} style={{width: '80px', paddingRight: 0, paddingTop: '5px'}}>操作人 :</Col>
            <Col span={4} style={{paddingLeft: 0}}>
              <Input placeholder='请输入操作人名称' onChange={this.handleOperatorChange} />
            </Col>
            <Col>
              <Row type="flex" align="middle" justify="space-between">
                <div>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.findByCondition.bind(this)}>搜索</Button>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.handleDelete} disabled={selectedRowKeys.length === 0}>批量删除</Button>
                </div>
              </Row>
            </Col>
          </Row>
          <div className='bonc-mung-user-list'>
            <Table 
              rowKey={record => record.id}
              rowSelection={rowSelection}
              bordered className='bonc-mung-ant-table'
              columns={this.getTableColumns()}
              dataSource={this.state.data}
              onChange={this.handleChange}
              pagination={this.state.pagination} />
          </div>
        </Page>
        {this.state.visible
        ? <Modal
          title="详情"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          className='log-management-detail-modal'
          width={600}>
            <div>
              {this.state.detailRows.map((item, index) => {
                return (
                  <Row gutter={24} className='row'>
                    <Col span={6} className='title-col'>{item.title}:</Col>
                    <Col span={12} style={{paddingLeft: 0}}>{this.getDetailContent(item.code)}</Col>
                  </Row>
                )
              })}
              <Row style={{textAlign: 'right'}}>
                <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
              </Row>
            </div>
        </Modal> : null}
      </Fragment>
    )
  }
}

export default Form.create()(LogManagement)
