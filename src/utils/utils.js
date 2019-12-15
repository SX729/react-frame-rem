import Container from '$components/Container'
import Resource from './Resource'
import React from 'react'
import Capacity from 'views/jcjsc/pages/Capacity'

export default {
  //返回保留2位小数的新数
  getTwoDecimalValue(value) {
    let type = window.$.type(value)
    //如果是字符串格式且含有百分号
    if (type === 'string' && value.indexOf('%') > -1) {
      return parseFloat(value.substring(0, value.length - 1)).toFixed(2) + '%'
    }
    if (type === 'number') {
      return value.toFixed(2) //保留2位但结果为一个String类型
    }
    return value
  },

  handleEmpty(value) {
    if (value === undefined || value === null || value === '') {
      return '--'
    } else {
      return value
    }
  },
  handleEmptyNum(value) {
    if (!value || value === null || value === '') {
      if (value === 0) {
        return '0'
      } else {
        return '--'
      }
    } else {
      let valueStr = value + ''
      let index = valueStr.indexOf('.') // 若有小数点超过2位保留两位小数
      if (index !== -1 && valueStr.length > index + 3) {
        value = parseFloat(value).toFixed(2)
      }
      return value
    }
  },
  handleEmptyRate(value) {
    if (!value || value === null || value === '') {
      if (value === 0) {
        return '0'
      } else {
        return '--'
      }
    } else {
      let valueStr = value + ''
      let index = valueStr.indexOf('.')
      if (index !== -1 && valueStr.length > index + 3) {
        value = parseFloat(value).toFixed(2)
      }
      return value + '%'
    }
  },
  assemblyConversion(type, width, height, filterDate) {
    let Component = Resource[type]
    if (Component === undefined) {
      Component = ''
    }
    if (type === 'jcjsc_capacity') {
      Component = Capacity
    }
    return <Container content={Component === '' ? '' : <Component filterDate={filterDate} height={height + 'px'} width={width + '%'} />} height={height + 'px'} width={width + '%'} ref='capacity' />
  }
}
