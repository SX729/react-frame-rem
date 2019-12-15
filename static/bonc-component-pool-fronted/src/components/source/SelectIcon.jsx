import React from 'react'
import Config from '../../config'
import jQ from '../../config/jquery-vendor'
import { Icon, Row, Col } from 'antd'
import './SelectIcon.less'

class SelectIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      visible: false,
      selectedIcon: props.selectedIcon,
      icons: Config.icons
    }
  }

  componentDidMount = () => {
    //hide photo selecter when lose foucs
    var _this = this
    jQ('body').click(function (e) {
      if (_this.state.visible) {
        _this.setState({
          visible: false
        })
      }
    })
  }

  clickHandle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleSelect = (iconName) => {
    this.setState({
      selectedIcon: iconName
    })
    this.props.handleSelect(iconName)
  }

  render () {
    return (
      <Row className='select-icon-container'>
          <Col span={16} className=''>
            <div className='selected-icon'>
              <span className={`fa fa-${this.state.selectedIcon} fa-2x`} />
            </div>
          </Col>
          <Col span={8} className='arrow-icon' onClick={this.clickHandle}>
            <Icon type='caret-down' />
          </Col>
          <div className='pop-icons' style={{ display: this.state.visible ? '' : 'none' }} >
            {this.state.icons.map((item, index) => {
              return (<span
                className={`fa fa-${item} fontIcon fa-2x`}
                key={index}
                onClick={() => { this.handleSelect(item) }} />)
            })}
          </div>
      </Row>
    )
  }

}

export default SelectIcon
