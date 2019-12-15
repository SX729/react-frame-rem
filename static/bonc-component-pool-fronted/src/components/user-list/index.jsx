import React, { Fragment } from 'react'
import { Breadcrumb, Button, Col, Divider, Form, Icon, Input, Modal, Popconfirm, Row, Select, Table, notification } from 'antd'
import Page from '../page'
import { findUserList, addUser, updateUser, deleteUser, deleteUserMore, activeUser, resetPassword, checkUsername } from './services'
import { Storage } from '../../utils'
import './index.less'

const { Option } = Select

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      data: [],
      selectedRowKeys: [],
      role_admin_user_add: false,
      role_admin_user_upd: false,
      role_admin_user_und: false,
      role_admin_user_rpa: false,
      role_admin_user_unm: false,
      role_admin_user_act: false,
      visible: false,
      editable: false
    }
  }

  changePage = (page) => {
    const pager = { ...this.state.pagination }
    pager.current = page
    this.setState({
      pagination: pager
    })
    this.fetchUserList(pager.current)
  }

  componentWillMount() {
    this.findUserByName(true)
    const permission = Storage.getUserPermissions('/user')
    if (permission && permission) {
      permission.children.map((itme) => {
        let o = {}
        o[itme['code'].toLowerCase()] = true
        this.setState(o)
      })
    }
  }

  findUserByName(reset) {
    if (reset) {
      this.props.form.resetFields()
    }
    const pager = { ...this.state.pagination }
    pager.current = 1
    this.setState({
      pagination: pager
    })
    this.fetchUserList(pager.current)
  }

  fetchUserList(pageNum) {
    const username = this.props.form.getFieldValue('s_username')
    findUserList(pageNum, { username: username }).then((res) => {
      this.setState({
        data: res.data.list,
        pagination: {
          total: res.data.total
        }
      })
    })
  }

  showModal = (e, editable) => {
    this.setState({
      visible: true,
      editable: editable
    })
    this.props.form.resetFields()
    this.props.form.setFieldsValue(e)
  }

  handleCancel = (e) => {
    this.setState({
      visible: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var data = this.props.form.getFieldsValue()
        if (data.id) {
          updateUser(data).then((res) => {
            this.setState({
              visible: false
            })
            this.findUserByName(true)
          })
        } else {
          addUser(data).then((res) => {
            this.setState({
              visible: false
            })
            this.findUserByName(true)
          })
        }
      }
    })
  }

  showConfirm() {
    const confirm = Modal.confirm
    const that = this
    const {selectedRowKeys} = this.state
    let title = selectedRowKeys.length === 1 ? '确认禁用?' : '批量禁用?'
    let content = selectedRowKeys.length === 1 ? '请您确认是否禁用选中用户！' : '请您确认是否批量禁用选中用户！'
    confirm({
      title,
      content,
      onOk() {
        that.handleDeleteAll()
      },
      onCancel() { }
    })
  }

  handleDelete(key) {
    let {selectedRowKeys} = this.state
    selectedRowKeys.map((item, index) => {
      if (item === key) {
        selectedRowKeys.splice(index, 1)
      }
    })
    deleteUser(key).then((res) => {
      this.findUserByName(true)
      this.setState({
        selectedRowKeys
      })
    })
  }

  resetPassword(key) {
    let params = {
      id: key
    }
    resetPassword(params).then((res) => {
      if (res) {
        notification['success']({
          message: '密码重置',
          description: '操作成功'
        })
      }
    })
  }

  handleActive(key) {
    activeUser(key).then((res) => {
      this.findUserByName(true)
    })
  }

  handleDeleteAll() {
    deleteUserMore(this.state.selectedRowKeys).then((res) => {
      this.setState({
        selectedRowKeys: []
      })
      this.findUserByName(true)
    })
  }

  handleChange = (pagination, filters, sorter) => {
    this.fetchUserList(pagination.current, {})
  }

  /**
   * 行选择事件
   * @param {*} selectedRowKeys
   */
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys })
  }

  getTableColumns() {
    return [{
      title: '登陆名',
      dataIndex: 'username'
    }, {
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '性别',
      dataIndex: 'sex',
      render: text => {
        return text === '0' ? '女' : '男'
      }
    }, {
      title: '移动电话',
      dataIndex: 'telPhone'
    }, {
      title: '邮箱',
      dataIndex: 'email'
    }, {
      title: '状态',
      dataIndex: 'enabled',
      align: 'center',
      render: text => {
        return text === 0 ? <span style={{ color: 'red' }}>禁用</span> : <span style={{ color: '#28a745' }}>正常</span>
      }
    }, {
      title: '操作',
      key: 'action',
      width: 350,
      align: 'center',
      render: (text, record) => (
        <span>
          <a onClick={this.showModal.bind(this, record, 'view')}><Icon type='eye' />查看</a>
          <Divider type='vertical' />
          {
            this.state.role_admin_user_upd ? (<a onClick={this.showModal.bind(this, record, 'edit')}><Icon type='edit' />编辑</a>) : null
          }
          {
            this.state.role_admin_user_upd ? (<Divider type='vertical' />) : null
          }
          <Popconfirm title="确认重置密码?" onConfirm={() => this.resetPassword(record.id)}>
            <a href="javascript:">
              <Icon type='unlock' />重置密码
            </a>
          </Popconfirm>
          <Divider type='vertical' />
          {
            this.state.role_admin_user_act ? (<span>
              {record.enabled === 0 ? (
                <Popconfirm title="确认启用?" onConfirm={() => this.handleActive(record.id)}>
                  <a href="javascript:" style={{ color: '#28a745' }}>
                    <Icon type='redo' />启用
                </a>
                </Popconfirm>
              ) : (
                  <Popconfirm title="确认禁用?" onConfirm={() => this.handleDelete(record.id)}>
                    <a href="javascript:" style={{ color: '#f81c23' }}>
                      <Icon type='close' />禁用
                </a>
                  </Popconfirm>
                )
              }
            </span>) : null
          }
        </span>
      )
    }]
  }

  checkUsername(rule, value, callback) {
    if (value && this.state.editable === 'add') {
      checkUsername(value).then((res) => {
        if (res.data.length !== 0) {
          let msg = '登录名已经存在'
          callback(msg)
        } else {
          callback()
        }
      })
    } else {
      callback()
    }
  }

  render() {
    const { selectedRowKeys } = this.state
    const { getFieldDecorator } = this.props.form
    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16
      }
    }
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange.bind(this),
      getCheckboxProps: record => ({
        disabled: record.enabled === 0 // Column configuration not to be checked
      })
    }
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

    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page' inner style={{ padding: '24px' }}>
          <Row gutter={24}>
            <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
              {getFieldDecorator('s_username', {})(
                <Input.Search
                  placeholder="请输入搜索名字"
                />
              )}
            </Col>
            <Col>
              <Row type="flex" align="middle" justify="space-between">
                <div>
                  <Button type="primary" style={{ marginRight: '10px' }} onClick={this.findUserByName.bind(this, false)}>搜索</Button>
                  <Button onClick={this.findUserByName.bind(this, true)}>重置</Button>
                </div>
                <div>
                  {
                    this.state.role_admin_user_add ? (<Button type="primary" style={{ marginRight: '10px' }} onClick={this.showModal.bind(this, { id: null, sex: '1' }, 'add')}
                    ><Icon type="plus" />创建</Button>) : null
                  }
                  <Button type="danger" onClick={this.showConfirm.bind(this)} disabled={
                    selectedRowKeys.length === 0
                  }><Icon type="close" />禁用</Button>
                </div>
              </Row>
            </Col>
          </Row>
          <div className='bonc-mung-user-list'>
            <Table rowKey={record => record.id} rowSelection={rowSelection} bordered className='bonc-mung-ant-table' columns={this.getTableColumns()} dataSource={this.state.data} onChange={this.handleChange} pagination={this.state.pagination} />
          </div>

          <Modal title="用户信息" visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
            <Form onSubmit={this.handleSubmit} labelAlign="right">
              <div style={{ display: 'none' }}>
                <Form.Item label="ID"  {...formItemLayout} >
                  {getFieldDecorator('id', {})(<Input />)}
                </Form.Item>
                <Form.Item label="enabled" {...formItemLayout} >
                  {getFieldDecorator('enabled', {})(<Input />)}
                </Form.Item>
              </div>
              <Form.Item label="登录名" {...formItemLayout} >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入登录名!', whitespace: true }, { validator: this.checkUsername.bind(this) }]
                })(<Input disabled={this.state.editable !== 'add'} placeholder="请输入登录名,不能为中文" />)}
              </Form.Item>
              <Form.Item label="姓名" {...formItemLayout} >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入姓名!', whitespace: true }]
                })(<Input placeholder="请输入姓名" />)}
              </Form.Item>
              <Form.Item label="移动电话" {...formItemLayout} >
                {getFieldDecorator('telPhone', {
                  rules: [{ pattern: new RegExp('^[1]{1}[0-9]{1}[0-9]{9}$'), required: true, message: '请输入移动电话!', whitespace: true }]
                })(<Input placeholder="请输入移动电话" />)}
              </Form.Item>
              <Form.Item label="性别" {...formItemLayout} >
                {getFieldDecorator('sex', {})(
                  <Select placeholder="请选择性别">
                    <Option value="1">男</Option>
                    <Option value="0">女</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="电话" {...formItemLayout} >
                {getFieldDecorator('mobilePhone', {})(<Input />)}
              </Form.Item>
              <Form.Item label="邮箱" {...formItemLayout} >
                {getFieldDecorator('email', {
                  rules: [{ type: 'email', message: '请输入正确的邮箱地址!' }]
                })(<Input />)}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <div style={{ float: 'right', marginRight: '25px' }}>
                  <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                  {
                    this.state.editable !== 'view' ? (<span><Divider type='vertical' /><Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button> </span>) : null
                  }
                </div>
              </Form.Item>
            </Form>
          </Modal>
        </Page>
      </Fragment >
    )
  }
}

export default Form.create()(UserList)
