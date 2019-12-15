import React from 'react'
import './index.less'

class NumberCard extends React.Component {

  render() {

    const { title, total, trendComponent, descComponent } = this.props

    return (<div className='bonc-mung-number-card' >

      <div className="number-card-top">
        <div className="number-card-title">
          <span>{title}</span>
        </div>
        <div className="number-card-data">
          <span>{total}</span>
        </div>
      </div>

      <div className='number-card-content'>
        <div>
          {trendComponent}
        </div>
      </div>
      <div className='number-card-footer'>
        <div>
          {descComponent}
        </div>
      </div>
    </div >)
  }
}
export default NumberCard
