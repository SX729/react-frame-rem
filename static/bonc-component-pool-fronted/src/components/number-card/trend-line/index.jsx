import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class TrendLine extends React.Component {

  render() {
    return (<div>
      <Sparklines {...this.props} >
        <SparklinesLine color="red" />
      </Sparklines>
    </div>)

  }
}

export default TrendLine
