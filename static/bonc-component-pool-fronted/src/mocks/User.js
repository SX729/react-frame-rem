import Mock from 'mockjs'
import Config from '@/config/index'

Mock.mock(`${Config.API_BASE_URL}/user?pageSize=10&pageNum=1`, function () {
  var data = Mock.mock({
    'array|45': [{
      'key': 'dfd@id',
      username: '@name',
      name: '@name',
      password: 'password',
      mobilePhone: '010-1234212',
      telPhone: '13012341234',
      sex: '1',
      mail: 'xxx@bonc.com.cn',
      crtTime: '2019/03/11',
      crtUser: '@name',
      updTime: '2019/03/11',
      updUser: '@name'
    }]
  })
  return {
    list: data['array'],
    total: data['array'].length
  }
})

Mock.mock(`${Config.API_BASE_URL}/api/registerServer2Cas`, function () {
  return {
    register: true
  }
})

Mock.mock(`${Config.API_BASE_URL}/api/sloginUserInfo`, function () {
  return {
    'status': true,
    'data': {
      'id': 1,
      'userName': '管理员'
    }
  }
})

Mock.mock(`${Config.API_BASE_URL}/api/sloginUserExtInfo`, function () {
  return {}
})
