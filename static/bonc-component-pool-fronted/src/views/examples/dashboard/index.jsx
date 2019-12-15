import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import Page from '@/components/page'
import NumberCard from '@/components/number-card'
import TrendLine from '@/components/number-card/trend-line'
import Analysis from './components/Analysis'

import { getNumberCardData } from './Services'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaddding: true,
      numberCardData: [],
      chartOptions: null
    }
  }

  componentWillMount() {
    //请求ajax
    this.timer = setInterval(() => {
      getNumberCardData().then((res) => {
        this.setState({
          numberCardData: res.data
        })
      })
    }, 1000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaddding: false
      })
    }, 300)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  render() {
    const numberCards = this.state.numberCardData.map((item, key) => (<Col key={key} lg={6} md={12}>
      <Card>
        <NumberCard {...{
          title: item.title,
          total: item.total,
          trendComponent: <TrendLine data={item.data} />
        }} />
      </Card>
    </Col>))

    return (<Page className='page' inner loading={this.state.loaddding}>
      <Row gutter={24}>
        {numberCards}
      </Row>
      <Row gutter={24}>
        <Col md={24}>
          <Card>
            <Analysis />
          </Card>
        </Col>
      </Row>
    </Page>)
  }
}

export default withRouter(Dashboard)
