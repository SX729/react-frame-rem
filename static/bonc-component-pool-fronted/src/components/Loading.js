import React from 'react'

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return <div className='tzs-loadding'>正在加载...</div>
  }
}
