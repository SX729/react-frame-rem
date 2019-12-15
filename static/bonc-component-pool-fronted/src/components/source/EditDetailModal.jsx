import React from 'react'
import { Divider, Form, Modal, Button, Input, Radio, InputNumber } from 'antd'
import {updateMenu} from './services'
import Config from '../../config'
import SelectIcon from './SelectIcon'

class EditDetailForm_ extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      editable: props.editable,
      inputdisable: props.inputdisable,
      selectedIcon: props.record.icon,
      addtype: props.addtype
    }
  }

  componentDidMount = () => {
    this.props.form.resetFields()
    this.props.form.setFieldsValue(this.props.record)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.icon = this.state.selectedIcon
        updateMenu(values).then((res) => {
          if (res.data === 1) { // 更新成功 关闭modal 刷新页面
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
    const elementkeys = ['button']

    return (
      <Form onSubmit={this.handleSubmit} className='edit-detail-modal'>
        <div style={{ display: 'none' }}>
          <Form.Item label="ID" >
            {getFieldDecorator('id', {})(<Input />)}
          </Form.Item>
        </div>
        <div style={{ display: 'none' }}>
          <Form.Item label="parentId" >
            {getFieldDecorator('parentId', {})(<Input />)}
          </Form.Item>
        </div>
        <Form.Item label="资源编码" {...formItemLayout}>
          {getFieldDecorator('code', {
            rules: [{ required: true, message: '请输入资源编码!', whitespace: true }]
          })(
            <Input disabled />
          )}
        </Form.Item>
        <Form.Item label="资源名字" {...formItemLayout}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入资源名字!' }]
          })(
            <Input disabled={this.state.inputdisable} />
          )}
        </Form.Item>
        {this.state.addtype === 'button' ? null
          : <Form.Item label="URL" {...formItemLayout}>
            {getFieldDecorator('href', {
              rules: [{ required: false, message: '' }]
            })(
              <Input disabled={this.state.inputdisable} />
            )}
          </Form.Item>
        }
        <Form.Item label="图标"
          {...formItemLayout} >
          <SelectIcon handleSelect = {(iconName) => { this.handleSelect(iconName) }} selectedIcon={this.state.selectedIcon} />
        </Form.Item>
        <Form.Item label="资源类型" {...formItemLayout}>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '请选择菜单类型!' }]
          })(
            <RadioGroup disabled >
              {
                (this.state.addtype === 'folder' || this.state.addtype === 'menu')
                ? resourcekeys.map((item, index) => {
                  return (<Radio value={item} key={index}>{resourceType[item]}</Radio>)
                })
                : elementkeys.map((item, index) => {
                  return (<Radio value={item} key={index}>{resourceType[item]}</Radio>)
                })
              }
            </RadioGroup>
          )}
        </Form.Item>
        <Form.Item label="序号" {...formItemLayout}>
          {getFieldDecorator('sort', {
            rules: [{ required: true, message: '请输入序号!' }]
          })(
            <InputNumber disabled={this.state.inputdisable} />
          )}
        </Form.Item>
        <Form.Item label="描述" {...formItemLayout}>
          {getFieldDecorator('description', {
            rules: [{ required: false, message: '' }]
          })(
            <Input.TextArea disabled={this.state.inputdisable} />
          )}
        </Form.Item>
        <Form.Item>
          <Button onClick={this.props.handleCancel}>取消</Button>
          <Divider type='vertical' />
          {
            this.state.editable === true ? <Button type="primary" htmlType="submit">保存</Button> : null
          }
        </Form.Item>
      </Form>
    )
  }

}

const EditDetailForm = Form.create({ name: 'EditDetailForm' })(EditDetailForm_)

export default class EditDetailModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<Modal
      title={this.props.title}
      visible={this.props.visible}
      onCancel={this.props.handleCancel}
      footer={null}
      >
        <EditDetailForm {...this.props} ref='EditDetailForm' />
      </Modal>
    )
  }
}

