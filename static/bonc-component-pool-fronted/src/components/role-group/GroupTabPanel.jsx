import React from 'react'
import { Form, Row, Col, Button, Icon, Divider, Table, Modal, Transfer, Input, Popconfirm, Tree, InputNumber, TreeSelect } from 'antd'
import './index.less'
import {
  findUserList,
  findRoleUserList,
  insertUserRoleBatch,
  deleteUserRoleBatch,
  findGroupList,
  addGroup,
  editGroup,
  deleteGroup,
  findMenuTreeList,
  authMenuToGroup,
  getAuthedMenuList
} from './services'

const { TreeNode } = Tree
const TreeSelectNode = TreeSelect.TreeNode

class GroupTabPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      editvisible: false,
      parentId: '0',
      authorlVisible: false,
      userModalVisible: false,
      userModalListData: [],
      userModalSelectedKeys: [],
      userModalTargetKeys: [],
      userModalData: [],
      tableData: [],
      tableExpandAllRows: true,
      tableAutoExpandParent: true,
      tableExpandedRowKeys: [],
      menuData: [],
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treedata: [],
      sonvisible: false
    }
  }
  componentDidMount() {
    this.fetchTree()
  }

  fetchTree() {
    let getKey = (items, children) => {
      (items.children || []).map((data) => {
        children.push(data.id);
        getKey(data, children)
      })
    }
    findGroupList({ 'groupType': this.props.code }).then((data) => {
      let keys = []
      data.map((d) => {
        keys.push(d.id)
        getKey(d, keys)
      })
      this.setState({
        tableExpandedRowKeys: keys,
        tableData: data
      })
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false,
        editvisible: false,
        authorlVisible: false,
        checkedKeys: []
      })
    }, 3000)
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      editvisible: false,
      authorlVisible: false,
      sonvisible: false,
      checkedKeys: []
    })
  }
  // 保存动作
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        addGroup(values).then((res) => {
          this.setState({ visible: false, sonvisible: false })
          this.fetchTree({})
        })
      }
    })
  }
  // 更新动作
  handleUpdate = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        editGroup(values).then((res) => {
          if (res.data === 1) { // 更新成功 关闭modal 刷新页面
            this.setState({ editvisible: false })
            this.fetchTree({})
          }
        })
      }
    })
  }

  handleDelete(e, record) {
    deleteGroup(record).then((res) => {
      if (res.data === 1) { // delete success refresh
        this.fetchTree({})
      }
    })
  }
  showAddModal = () => {
    this.setState({
      visible: true
    })
    this.props.form.resetFields()
  }

  showEditModal = (e) => {
    const {tableData} = this.state
    const treedata = [{code: '根节点', id: '0',children: [...tableData]}]
    const newData = []
    // treedata.unshift([{code: '一级', id: '0',children: [...tableData]}])
    const dataMap = (value, arr) => {
      value.map((item, index) => {
        if (item.id !== e.id) {
           if (item.children) {
              arr.push({code: item.code, id:item.id, children: dataMap(item.children, [])})
            } else {
              arr.push({code: item.code, id:item.id})
            }
        }       
      })    
      return arr
    }
    this.setState({
      editvisible: true,
      treedata: dataMap(treedata, [])
    }, () => {
      this.props.form.resetFields()
      this.props.form.setFieldsValue(e)
    })
  }

  showUserModal = (e) => {
    this.setState({
      userModalVisible: true,
      userModalData: e
    })
    findUserList().then((res) => {
      this.setState({
        userModalListData: res.data.list
      })
      findRoleUserList(e.id).then((res) => {
        var data = []
        for (var i in res.data) {
          data.push(res.data[i].userId)
        }
        this.setState({
          userModalTargetKeys: data
        })
      })
    })
  }

  cancelUserModal = (e) => {
    this.setState({
      userModalTargetKeys: [],
      userModalVisible: false
    })
  }

  handleSearch = (dir, value) => {
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ userModalTargetKeys: nextTargetKeys })
    if (direction === 'right') {
      insertUserRoleBatch(this.state.userModalData.id, this.state.userModalData.groupType, moveKeys).then((res) => { })
    } else {
      deleteUserRoleBatch(this.state.userModalData.id, this.state.userModalData.groupType, moveKeys).then((res) => { })
    }
  }

  onTableRowExpand(expanded, record) {
  }

  //获取菜单基础数据
  fetchMenuTree(params) {
    findMenuTreeList({}).then((menus) => {
      let expandedKeys = []
      menus.map((menu) => {
        expandedKeys.push(menu.id)
      })
      this.setState({
        expandedKeys: expandedKeys,
        menuData: menus
      })
    }).then((res) => {
      getAuthedMenuList(params).then((keys) => {
        this.setState({
          checkedKeys: keys
        })
      })
    })
  }

  // 用于生成子树
  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.id} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      )
    }
    return <TreeNode title={item.title} key={item.id} dataRef={item} />
  })
    // 用于生成子树
    renderTreeSelectNodes = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeSelectNode title={item.code} key={item.id} value={item.id}>
            {this.renderTreeSelectNodes(item.children)}
          </TreeSelectNode>
        )
      }
      return <TreeSelectNode title={item.code} key={item.id} value={item.id} />
    })

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    })
  }

  onCheck = (checkedKeys) => {
    this.setState({ 
      checkedKeys: checkedKeys.checked
    })
  }

  onSelect = (selectedKeys, info) => {
    this.setState({ selectedKeys })
  }

  showAuthModal = (e) => {
    this.setState({
      authorlVisible: true,
      authModalData: e
    })
    this.props.form.resetFields()
    this.props.form.setFieldsValue(e)        // 设置表单数据
    this.fetchMenuTree({ groupId: e.id })      // 获取菜单树数据 设定选中项
  }
  cancelAuthModal = (e) => {
    this.setState({
      authorlVisible: false,
      checkedKeys: []
    })
  }
  handleAuthSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var params = {
          groupId: this.state.authModalData.id,
          groupType: this.state.authModalData.groupType,
          resourceIds: this.state.checkedKeys
        }
        authMenuToGroup(params).then((res) => {
          if (res.data >= 1) { // 增加成功 关闭modal 刷新页面
            this.setState({ authorlVisible: false })
            this.fetchTree({})
          }
        })
      }
    })
  }

  showSonAddModal = (e) => {
    this.setState({
      sonvisible: true
    }, () => {
      const param = {
        parentId: e.id,
        groupType: e.groupType
      }
      this.props.form.resetFields()
      this.props.form.setFieldsValue(param)
    })
  }

  render() {
    const { userModalTargetKeys, editvisible, sonvisible } = this.state
    const {
      name,
      code
    } = this.props
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
    const columns = [{
      'title': '编码',
      'dataIndex': 'code'
    }, {
      'title': '名称',
      'dataIndex': 'name'
    }, {
      'title': '描述',
      'dataIndex': 'description'
    }, {
      'title': '操作',
      'key': 'action',
      'align': 'center',
      'render': (text, record) => {
        return (
          <div>
            <a onClick={this.showSonAddModal.bind(this, record)}>
              <Icon type='plus' />创建子级
              </a>
            <Divider type='vertical' />
            <a onClick={this.showEditModal.bind(this, record)}>
              <Icon type='minus' />编辑
              </a>
            <Divider type='vertical' />
            <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(this, record)}>
              <a href='javascript:;'>
                <Icon type='delete' />删除
            </a>
            </Popconfirm>
            <Divider type='vertical' />
            <a onClick={this.showAuthModal.bind(this, record)}><Icon type='plus' />授权</a>
            <Divider type='vertical' />
            <a onClick={this.showUserModal.bind(this, record)}><Icon type='plus' />人员</a>
          </div>
        )
      }
    }]
    // console.log(this.state.tableExpandedRowKeys)
    return (
      <div tab={name} key={code} >
        <Row gutter={24} style={{ height: '30px', marginBottom: '12px' }}>
          <Col>
            <Button type="primary" style={{ marginRight: '10px', float: 'right' }} onClick={this.showAddModal.bind(this)} ><Icon type="plus" />创建</Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col>
            <Table
              rowKey={record => record.id} bordered
              columns={columns}
              dataSource={this.state.tableData}
              pagination='false' />
          </Col>
        </Row>
        <Modal title="角色关联人员" visible={this.state.userModalVisible} onCancel={this.cancelUserModal} footer={null} width={'50%'}>
          <Row gutter={24}>
            <Transfer
              rowKey={record => record.id}
              dataSource={this.state.userModalListData}
              listStyle={{
                width: '47%',
                height: 600
              }}
              showSearch
              filterOption={this.filterOption}
              targetKeys={userModalTargetKeys}
              onChange={this.handleChange}
              onSearch={this.handleSearch}
              render={item => item.name + '(' + item.username + ')'}
            />
          </Row>
        </Modal>
        {this.state.authorlVisible ? <Modal title="角色关联资源" visible={this.state.authorlVisible} onCancel={this.cancelAuthModal.bind(this)} footer={null} width={'50%'}>
          <Row gutter={24}>
            <Form onSubmit={this.handleAuthSubmit}>
              {getFieldDecorator('id', {})(
                <div style={{ height: '600px', overflowY: 'auto' }}>
                  <Tree
                    checkable
                    onExpand={this.onExpand}  // 展开/收起节点时触发
                    expandedKeys={this.state.expandedKeys} // 展开指定的树节点
                    autoExpandParent={this.state.autoExpandParent}
                    onCheck={this.onCheck}      // 点击复选框触发
                    checkedKeys={this.state.checkedKeys} // 选中复选框的树节点
                    onSelect={this.onSelect}    // 点击树节点触发
                    selectedKeys={this.state.selectedKeys} // 设置选中的树节点
                    checkStrictly // 节点选择完全受控（父子节点选中状态不再关联）
                  >
                    {this.renderTreeNodes(this.state.menuData)}
                  </Tree>
                </div>
              )}
              <Form.Item>
                <div style={{ marginLeft: '30px' }}>
                  <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                  <Divider type='vertical' />
                  <Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button>
                </div>
              </Form.Item>

            </Form>
          </Row>
        </Modal> : null}
        {this.state.visible ? <Modal
          visible={this.state.visible}
          title='新建'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit}>
            <div style={{ display: 'none' }}>
              <Form.Item label="groupType">
                {getFieldDecorator('groupType', { initialValue: this.props.code })(<Input />)}
              </Form.Item>
              <Form.Item label="parentId" >
                {getFieldDecorator('parentId', { initialValue: this.state.parentId })(<Input />)}
              </Form.Item>
            </div>
            <Form.Item label="角色编码" {...formItemLayout}>
              {getFieldDecorator('code', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色编码!', whitespace: true }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="角色名字" {...formItemLayout}>
              {getFieldDecorator('name', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色名字!' }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="序号" {...formItemLayout}>
              {getFieldDecorator('orders', {
                initialValue: '',
                rules: [{ required: true, message: '请输入序号!' }]
              })(
                <InputNumber />
              )}
            </Form.Item>
            <Form.Item label="角色描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: '',
                rules: [{ required: false, message: '请输入角色描述!' }]
              })(
                <Input.TextArea />
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <div style={{ float: 'right', marginRight: '25px' }}>
                <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                <Divider type='vertical' />
                <Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button>
              </div>
            </Form.Item>
          </Form>
        </Modal> : null}

        {sonvisible ? <Modal
          visible={sonvisible}
          title='新建子角色'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit}>
            <div style={{ display: 'none' }}>
              <Form.Item label="groupType" >
                {getFieldDecorator('groupType', {})(<Input />)}
              </Form.Item>
              <Form.Item label="parentId" >
                {getFieldDecorator('parentId', {})(<Input />)}
              </Form.Item>
            </div>
            <Form.Item label="角色编码" {...formItemLayout}>
              {getFieldDecorator('code', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色编码!', whitespace: true }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="角色名字" {...formItemLayout}>
              {getFieldDecorator('name', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色名字!' }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="序号" {...formItemLayout}>
              {getFieldDecorator('orders', {
                initialValue: '',
                rules: [{ required: true, message: '请输入序号!' }]
              })(
                <InputNumber />
              )}
            </Form.Item>
            <Form.Item label="角色描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: '',
                rules: [{ required: false, message: '请输入角色描述!' }]
              })(
                <Input.TextArea />
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <div style={{ float: 'right', marginRight: '25px' }}>
                <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                <Divider type='vertical' />
                <Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button>
              </div>
            </Form.Item>
          </Form>
        </Modal> : null}

        {editvisible ? <Modal
          visible={editvisible}
          title='编辑'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form onSubmit={this.handleUpdate}>
            <div style={{ display: 'none' }}>
              <Form.Item label="groupType" >
                {getFieldDecorator('groupType', { initialValue: this.props.code })(<Input />)}
              </Form.Item>
              <Form.Item label="ID" >
                {getFieldDecorator('id', {})(<Input />)}
              </Form.Item>
            </div>
            <Form.Item label="角色编码" {...formItemLayout}>
              {getFieldDecorator('code', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色编码!', whitespace: true }]
              })(
                <Input disabled />
              )}
            </Form.Item>
            <Form.Item label="角色名字" {...formItemLayout}>
              {getFieldDecorator('name', {
                initialValue: '',
                rules: [{ required: true, message: '请输入角色名字!' }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="序号" {...formItemLayout}>
              {getFieldDecorator('orders', {
                initialValue: '',
                rules: [{ required: true, message: '请输入序号!' }]
              })(
                <InputNumber />
              )}
            </Form.Item>
            <Form.Item label="指定父级" {...formItemLayout}>
              {getFieldDecorator('parentId', {
                initialValue: '',
                rules: [{ required: false, message: '请选择父级!' }]
              })(
                <TreeSelect>
                  {this.renderTreeSelectNodes(this.state.treedata)}
                </TreeSelect>
              )}
            </Form.Item>
            <Form.Item label="角色描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: '',
                rules: [{ required: false, message: '请输入角色描述!' }]
              })(
                <Input.TextArea />
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <div style={{ float: 'right', marginRight: '25px' }}>
                <Button onClick={this.handleCancel} style={{ width: '120px' }}>取消</Button>
                <Divider type='vertical' />
                <Button type="primary" htmlType="submit" style={{ width: '120px' }}>保存</Button>
              </div>
            </Form.Item>
          </Form>
        </Modal> : null}
      </div >
    )
  }
}
export default Form.create()(GroupTabPanel)
