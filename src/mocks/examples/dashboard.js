import Mock from 'mockjs'
import Config from '@/config/index'

/**
 * number板数据
 */
Mock.mock(`${Config.API_BASE_URL}/api/numberCardData`, function () {
  var data = Mock.mock({
    'array|4': [{
      title: '@ctitle',
      total: '@integer(100, 2000)',
      'data|10': ['@integer()']
    }]
  })
  return data['array']
})

/**
 * 分析图数据
 */
Mock.mock(`${Config.API_BASE_URL}/api/analysisData`, function () {
  var data = Mock.mock({
    'data|12': ['@integer(10, 1000)']
  })
  return data['data']
})
