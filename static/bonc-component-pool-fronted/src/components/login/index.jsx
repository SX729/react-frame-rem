import React from 'react'
import { Input, Button, message } from 'antd'
import { login } from '../../services/login'
import {Storage} from '../../utils'
import config from '../../config/index'
import './index.less'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    Storage.logout()
  }

  // 用户名
  handleUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  // 密码
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  // 登录
  handleLogin = () => {
    login({
      username: this.state.userName,
      password: this.state.password
    }).then((response) => {
      Storage.setAuthorizationToken(response.data.token)
      Storage.setUserInfo(response.data.userInfo)
      this.props.history.push('/')
    }).catch((error) => {
      console.log(error)
    })
  }
  // 回车事件
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (this.state.password !== '' && this.state.userName !== '') {
        this.handleLogin()
      } else {
        message.warning('请输入用户名或密码')
      }
    }
  }

  render() {
    let disabled = this.state.password === '' || this.state.userName === ''
    return (
      <div className='sign-in'>
        <div className='sign-in-container'>
          <h1 className='title'>{config.applicationName}</h1>
          <div className='user-name'>
            {/* <span className='label'>用户名 : </span> */}
            <Input onKeyUp={(e) => this.handleEnter(e)} onChange={(e) => this.handleUserName(e)} className='user-input' type="user" placeholder="请输入用户名" />
          </div>
          <div className='user-name'>
            {/* <span className='label'>密码 : </span> */}
            <Input onKeyUp={(e) => this.handleEnter(e)} onChange={(e) => this.handlePassword(e)} className='user-input' type="password" placeholder="请输入密码" />
          </div>
          <div className='login-btn-border'>
            <Button disabled={disabled} onClick={() => this.handleLogin()} className='login-btn' type="primary">登录</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginPage
