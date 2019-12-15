import React from 'react'
import { Echarts } from '@static/bonc-component-pool-fronted'
import {
  getAnalysisData
} from '../../../services/examples/dashboard/Services.js'

class Analysis extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaddding: true,
      numberCardData: [],
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: []
        }]
      }
    }
  }

  componentWillMount() {
    //请求ajax
    getAnalysisData().then((res) => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Echarts options={this.state.options} data={this.state.data} height='300px' />
      </div>
    )
  }
}

export default Analysis
