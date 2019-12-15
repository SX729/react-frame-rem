import React, { Component } from 'react'
import { Row, Form, Input, Button, message } from 'antd'
import { changePassword } from './services'
import './index.less'
import { AesEncrypt } from '../../utils'

class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChangePassword = () => {
    this.props.form.validateFields((err, values) => {
      let params = {
        oldPassword: encodeURIComponent(AesEncrypt.encrypt(values.oldPassword)),
        newPassword: encodeURIComponent(AesEncrypt.encrypt(values.newPassword))
      }
      changePassword(params).then((res) => {
        message.success('修改成功!')
      })
    })
  }

  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    let tip = '两次输入不一致！'
    if (value && value !== getFieldValue('newPassword')) {
      callback(tip)
    }

    callback()
  }

  render() {

    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      }
    }

    return (
      <div className='change-password-container'>
        <Form>
          <Form.Item label='旧密码' {...formItemLayout} >
            {getFieldDecorator('oldPassword', {})(
              <Input.Password placeholder='请输入旧密码' />
            )}
          </Form.Item>
          <Form.Item label='新密码' {...formItemLayout}>
            {getFieldDecorator('newPassword', {})(
              <Input.Password placeholder='请输入新密码' />
            )}
          </Form.Item>
          <Form.Item label='再次确认新密码' {...formItemLayout} >
            {getFieldDecorator('newPasswordAgain', {
              rules: [{
                validator: this.handleConfirmPassword
              }]
            })(
              <Input.Password placeholder='请再次输入新密码' />
            )}
          </Form.Item>
        </Form>
        <Row className='button-block'>
          <Button type='primary' onClick={this.handleChangePassword}>确认修改</Button>
        </Row>
      </div>
    )
  }
}

export default Form.create()(ChangePassword)
