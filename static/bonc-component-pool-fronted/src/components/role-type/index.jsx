import React, { Fragment } from 'react'
import { Table, Icon, Divider, Popconfirm, Breadcrumb, Form, Button, Row, Col, Input, Modal, InputNumber } from 'antd'
import Page from '../page'
import './index.less'

import { findGroupTypeList, addGroupType, updateGroupType, deleteGroupType, checkGroupTypeCode } from './services'

class GroupType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      visible: false,
      editable: false,
      add: false
    }
  }

  handleChange = (pagination, filters, sorter) => {
    this.fetchGroupTypeList(pagination.current, {})
  }

  fetchGroupTypeList(pageNum) {
    const name = this.props.form.getFieldValue('s_name')
    findGroupTypeList(pageNum, { name: name }).then((res) => {
      this.setState({
        data: res.data.list,
        pagination: {
          total: res.data.total
        }
      })
    })
  }

  findGroupTypeByName(reset) {
    if (reset) {
      this.props.form.resetFields()
    }
    const pager = { ...this.state.pagination }
    pager.current = 1
    this.setState({
      pagination: pager
    })
    this.fetchGroupTypeList(pager.current)
  }

  componentWillMount() {
    this.findGroupTypeByName(true)
  }

  handleDelete(key) {
    deleteGroupType(key).then((res) => {
      this.findGroupTypeByName(true)
    })
  }

  checkCode(rule, value, callback) {
    if (value) {
      checkGroupTypeCode(value).then((res) => {
        if (res.data !== 0) {
          let msg = '编码已经存在'
          callback(msg)
        } else {
          callback()
        }
      })
    } else {
      callback()
    }
  }

  showModal = (e, editable) => {
    this.setState({
      visible: true,
      editable: editable,
      add: false
    })
    this.props.form.resetFields()
    this.props.form.setFieldsValue(e)
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
      add: false
    })
  }

  showAddModal = (e, editable) => {
    this.setState({
      visible: true,
      editable: editable,
      add: true
    })
    this.props.form.resetFields()
    this.props.form.setFieldsValue(e)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.id) {
          updateGroupType(values).then((res) => {
            this.setState({
              visible: false
            })
            this.findGroupTypeByName(true)
          })
        } else {
          addGroupType(values).then((res) => {
            this.setState({
              visible: false
            })
            this.findGroupTypeByName(true)
          })
        }
      }
    })
  }

  render() {
    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16
      }
    }
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const columns = [
      {
        title: '编码',
        dataIndex: 'code',
        key: 'code'
      }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <span>
            <a onClick={this.showModal.bind(this, record, false)}><Icon type='eye' />查看</a>
            <Divider type='vertical' />
            <a onClick={this.showModal.bind(this, record, true)}><Icon type='edit' />编辑</a>
            <Divider type='vertical' />
            <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record.id)}>
              <a href='javascript:;'>
                <Icon type='close' />删除
              </a>
            </Popconfirm>
          </span>
        )
      }]

    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">角色组类型管理</a></Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page' inner style={{ padding: '24px' }} >
          <Row gutter={24}>
            <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
              {getFieldDecorator('s_name', {})(
                <Input.Search placeholder="请输入搜索名字" />
              )}
            </Col>
            <Col>
              <Row type="flex" align="middle" justify="space-between">
                <div>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.findGroupTypeByName.bind(this, false)}>搜索</Button>
                  <Button onClick={this.findGroupTypeByName.bind(this, true)}>重置</Button>
                </div>
                <div>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.showAddModal.bind(this, { id: null, sex: '1' }, true)}
                  ><Icon type="plus" />创建</Button>
                </div>
              </Row>
            </Col>
          </Row>
          <div className='bonc-mung-user-list'>
            <Table rowKey={record => record.id} bordered className='bonc-mung-ant-table' columns={columns} dataSource={this.state.data} onChange={this.handleChange} pagination={this.state.pagination} />
          </div>
          <Modal title="角色组类型" visible={this.state.visible} onCancel={this.handleCancel} footer={null} >
            <Form onSubmit={this.handleSubmit} >
              <div style={{ display: 'none' }}>
                <Form.Item label="ID">
                  {getFieldDecorator('id', {})(<Input />)}
                </Form.Item>
              </div>
              {
                this.state.add
                  ? <Form.Item label="编码" {...formItemLayout} >
                    {getFieldDecorator('code', {
                      rules: [{ required: true, message: '请输入编码!', whitespace: true }, { validator: this.checkCode.bind(this) }]
                    })(<Input />)}
                  </Form.Item>
                  : <Form.Item label="编码" {...formItemLayout} >
                    {getFieldDecorator('code', {
                      rules: [{ required: true, message: '', whitespace: true }, {}]
                    })(<Input disabled />)}
                  </Form.Item>
              }

              <Form.Item label="序号" {...formItemLayout}>
                {getFieldDecorator('sort', {
                  initialValue: '',
                  rules: [{ required: true, message: '请输入序号!' }]
                })(
                  <InputNumber disabled={!this.state.editable} />
                )}
              </Form.Item>

              <Form.Item label="类型名称" {...formItemLayout} >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入类型名称!', whitespace: true }]
                })(<Input disabled={!this.state.editable} />)}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <div style={{ float: 'right', marginRight: '25px' }}>
                  <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                  {
                    this.state.editable === true ? (<span><Divider type='vertical' /><Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button> </span>) : null
                  }
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </Page>
      </Fragment>

    )
  }
}
export default Form.create()(GroupType)
