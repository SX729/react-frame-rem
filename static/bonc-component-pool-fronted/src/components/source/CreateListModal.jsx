import React from 'react'
import { Divider, Form, Modal, Button, Input, Radio, InputNumber } from 'antd'
import {addMenu} from './services'
import Config from '../../config'
import SelectIcon from './SelectIcon'

class CreateListForm_ extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      selectedIcon: ''
    }
  }

  componentDidMount = () => {}

  // 添加菜单后保存
  handleAddSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.icon = this.state.selectedIcon
        addMenu(values).then((res) => {
          if (res.data === 1) { // 增加菜单成功 关闭modal 刷新页面
            this.props.handleOk()
            this.props.fetchTree({})
          }
        })
      }
    })
  }

  handleSelect = (iconName) => {
    this.setState({
      selectedIcon: iconName
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const RadioGroup = Radio.Group
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
    const {resourceType} = Config
    const resourcekeys = ['folder', 'menu']

    return (
      <Form onSubmit={this.handleAddSubmit} className='create-list-modal'>
            <div style={{ display: 'none' }}>
              <Form.Item label="ID">
                {getFieldDecorator('id', {})(<Input />)}
              </Form.Item>
              <Form.Item label="parentId" >
                {getFieldDecorator('parentId', { initialValue: 0 })(<Input />)}
              </Form.Item>
            </div>
            <Form.Item label="资源编码" {...formItemLayout}>
              {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入资源编码!', whitespace: true }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="资源名字" {...formItemLayout}>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入资源名字!' }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="URL" {...formItemLayout}>
              {getFieldDecorator('href', {
                rules: [{ required: false, message: '' }]
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="图标"
              {...formItemLayout} >
              <SelectIcon handleSelect = {(iconName) => { this.handleSelect(iconName) }} />
            </Form.Item>
            <Form.Item label="资源类型" {...formItemLayout}>
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择资源类型!' }]
              })(
                <RadioGroup >
                  {
                    resourcekeys.map((item, index) => {
                      return (<Radio value={item} key={index} >{resourceType[item]}</Radio>)
                    })
                  }
                </RadioGroup>
              )}
            </Form.Item>
            <Form.Item label="序号" {...formItemLayout}>
              {getFieldDecorator('sort', {
                initialValue: '',
                rules: [{ required: true, message: '请输入序号!' }]
              })(
                <InputNumber />
              )}
            </Form.Item>
            <Form.Item label="描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: '',
                rules: [{ required: false, message: '' }]
              })(
                <Input.TextArea />
              )}
            </Form.Item>
            <Form.Item>
              <Button onClick={this.props.handleCancel}>取消</Button>
              <Divider type='vertical' />
              <Button type="primary" htmlType="submit">保存</Button>
            </Form.Item>
      </Form>
    )
  }

}

const CreateListForm = Form.create({ name: 'CreateListForm' })(CreateListForm_)

export default class CreateListModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<Modal
      title='新建菜单'
      visible={this.props.visible}
      onCancel={this.props.handleCancel}
      footer={null}
      >
        <CreateListForm {...this.props} ref='CreateListForm' />
      </Modal>
    )
  }
}

