import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PrimaryLayout from '@/views/layout/PrimaryLayout'
import UCBLayout from '@/views/layout/UCBLayout'
import config from '@/config/index'
import './MainView.less'

class MainView extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  layoutMapping() {
    return {
      primary: PrimaryLayout,
      ucb: UCBLayout
    };
  }

  render() {
    let Component = this.layoutMapping()[config['LAYOUT_MODE'] || 'primary'];
    return (
      <Component childRoutes={(this.props.route || {}).childRoutes} />
    )
  }
}
MainView.propTypes = {
  route: PropTypes.object
}
export default MainView
