import React, { Fragment } from 'react'
import Page from '../page'
import { Table, Icon, Divider, Popconfirm, Breadcrumb, Form, Button, Input, Row, Col} from 'antd'
import { findMenuTreeList, deleteMenu } from './services'
import './index.less'
import CreateListModal from './CreateListModal'
import EditDetailModal from './EditDetailModal'
import CreateElementModal from './CreateElementModal'
import Config from '../../config'

class MenuMng extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      treedata: [],
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: 0
      },
      loading: false,
      visible: false,
      editable: false,
      addvisible: false,
      inputdisable: false,
      elementvisible: false,
      addtype: '',
      parentId: '',
      selectedRowKeys: [],
      tableExpandedRowKeys: []
    }
  }

  componentDidMount() {
    this.fetchTree({})
  }

  handleDelete(e, record) {
    deleteMenu(record).then((res) => {
      if (res.data === 1) { // delete success refresh
        this.fetchTree({})
      }
    })
  }

  fetchTree = (params) => {
    findMenuTreeList(params).then((data) => {
      let keys = []
      data.map((d) => {
        keys.push(d.id)
      })
      this.setState({
        tableExpandedRowKeys: keys,
        data: data
      })
    })
  }

  fetchMenuList() {
    const title = this.props.form.getFieldValue('stitle')
    this.fetchTree({ title: title })
  }

  // 重置方法
  findMenuByTitleReset() {
    const pager = { ...this.state.pagination }
    this.props.form.resetFields()
    pager.current = 1
    this.setState({
      pagination: pager
    })
    this.fetchTree({})
  }

  /* show edit or view modal */
  showModal = (e, edit) => {
    this.setState({
      visible: true,
      editable: edit,
      inputdisable: !edit,
      addtype: e.type,
      record: e
    })
  }

  /* show add modal */
  showAddModal = () => {
    this.setState({
      addvisible: true,
      addtype: ''
    })
    this.props.form.resetFields()
  }

  // 显示创建元素弹框
  showElementModal = (e, type) => {
    this.setState({
      elementvisible: true,
      addtype: type,
      parentId: e.id
    })
    this.props.form.resetFields()
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false, elementvisible: false, addvisible: false })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({ visible: false, elementvisible: false, addvisible: false })
  }

  render() {

    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16
      }
    }
    const { visible, addvisible, elementvisible } = this.state
    const { getFieldDecorator } = this.props.form
    const columns = [{
      title: '菜单名称',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: '编码',
      dataIndex: 'code',
      key: 'code'
    }, {
      title: '菜单类别',
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        const {resourceType} = Config
        return (<span>{resourceType[text]}</span>)
      }
    }, {
      title: '菜单链接',
      dataIndex: 'href',
      key: 'href'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        const menutype = record.type
        return (
          <span>
            <a onClick={this.showModal.bind(this, record, false)}><Icon type='zoom-in' />查看</a>
            <Divider type='vertical' />
            <a onClick={this.showModal.bind(this, record, true)}><Icon type='edit' />编辑</a>
            <Divider type='vertical' />
            {
              menutype === 'folder'
              ? <Fragment><a onClick={this.showElementModal.bind(this, record, menutype)} style={{ color: '#28a745' }}>
                <Icon type='plus' />创建子项目</a><Divider type='vertical' />
                </Fragment>
              : null
            }
            {
              menutype === 'menu' 
              ? <Fragment><a onClick={this.showElementModal.bind(this, record, menutype)} style={{ color: '#f81c23' }}>
                <Icon type='plus' />创建子元素
              </a><Divider type='vertical' /></Fragment> : null
            }
            
            <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(this, record)}>
              <a href='javascript:;'>
                <Icon type='delete' />删除
              </a>
            </Popconfirm>

          </span>
        )
      }
    }]
    return (
      <Fragment>
        <Breadcrumb style={{ marginBottom: '24px' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item><a href=""> 资源管理</a></Breadcrumb.Item>
        </Breadcrumb>
        <Page className='page' inner style={{ padding: '24px' }}>
          <Row gutter={24}>
            <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
              {getFieldDecorator('stitle', {})(
                <Input.Search
                  placeholder="请输入搜索名字"
                />
              )}
            </Col>
            <Col>
              <Row type="flex" align="middle" justify="space-between">
                <div>
                  <Button type="primary" onClick={this.fetchMenuList.bind(this)}
                    style={{ marginRight: '10px' }}>搜索</Button>
                  <Button onClick={this.findMenuByTitleReset.bind(this)}>重置</Button>
                </div>
                <div>
                  <Button type="primary" onClick={this.showAddModal.bind(this)} style={{ marginRight: '10px' }}><Icon type="plus" />创建</Button>
                </div>
              </Row>
            </Col>
          </Row>
          <div className='bonc-mung-user-list'>
            <Table bordered rowKey={record => record.id}
              defaultExpandedRowKeys={this.state.tableExpandedRowKeys}
              className='bonc-mung-ant-table'
              columns={columns}
              dataSource={this.state.data} pagination='false' />
          </div>
        </Page>

        {this.state.addvisible ? <CreateListModal 
          visible={addvisible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          fetchTree={this.fetchTree}
        /> : null}

        {this.state.visible ? <EditDetailModal
          visible={visible}
          title={this.state.editable === true ? '编辑' : '详情'}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          fetchTree={this.fetchTree}
          record={this.state.record}
          editable={this.state.editable}
          inputdisable={this.state.inputdisable}
          addtype={this.state.addtype}
        /> : null}

        {this.state.elementvisible ? <CreateElementModal
          visible={elementvisible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          fetchTree={this.fetchTree}
          addtype={this.state.addtype}
          parentId={this.state.parentId}
          inputdisable={this.state.inputdisable}
        /> : null}

      </Fragment>

    )
  }
}
export default Form.create()(MenuMng)
