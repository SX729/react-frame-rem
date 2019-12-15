import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入 ECharts 主模块
import echarts from 'echarts'

/**
 * echarts的react组件
 * 可以传入options来渲染echarts
 * 默认宽高均为100%
 *
 * 宽度可以响应式缩放
 * 如需更新echarts数据，可以更新data或者options即可
 *
 */
 class Echarts extends Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
    this.onResize = this.onResize.bind(this)
  }

  onResize() {
    let chartBox = this.refs.chart
    var width = chartBox.clientWidth
     var height = chartBox.clientHeight
    if (width || height) {
      this.myChart.resize()
    }
  }
  initChart(echarts, options) {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(this.refs.chart)
    // 绘制图表
    this.options = options
    this.myChart.setOption(options)
    this.myChart.on('click', this.props.onClick)
    window.addEventListener('resize', this.onResize)
  }
  componentDidMount() {
    let options = this.props.options
    this.initChart(echarts, options)
  }
  componentWillReceiveProps(nextProps, nextState) {
    if ((nextProps.data !== this.props.data) && this.myChart) {
      const data = nextProps.data
      let newOptions = Object.assign({}, this.options)
      if (newOptions.series) {
        newOptions.series[0].data = data
      } else {
        newOptions.series = [{}]
        newOptions.series[0].data = data
      }
      this.myChart.clear()
      this.options = newOptions
      this.myChart.setOption(newOptions)
    }
    if ((nextProps.options !== this.props.options) && this.myChart) {
        this.myChart.clear()
      let newOptions = nextProps.options
      this.myChart.setOption(newOptions)
    }
    if (((nextProps.width !== this.props.width) || (nextProps.height !== this.props.height)) && this.myChart) {
      let newOptions = nextProps.options
      let wid = nextProps.width === 'undefined%' ? '100%' : nextProps.width
      let hei = nextProps.height || '250px'
      let chartBox = this.refs.chart
      chartBox.style.height = hei
      chartBox.style.width = wid
      this.myChart.resize()
    }
    setTimeout(() => { this.myChart.resize() },100)   
    return false
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    return (
      <div ref='chart' className='width-height' style={{ width: this.props.width, height: this.props.height }} />
    )
  }
}
Echarts.defaultProps = {
  width: '100%',
  height: '100%',
  data: [],
  onClick: (param) => { console.log(param) }
}

Echarts.propTypes = {
  options: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  data: PropTypes.array,
  onClick: PropTypes.func
}
export default Echarts
