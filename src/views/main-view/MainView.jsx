import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { PrimaryLayout, UCBLayout } from '@static/bonc-component-pool-fronted'
// import config from '@/config/index'
import { renderRoutes } from 'react-router-config'
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
    /* let Component = this.layoutMapping()[config['LAYOUT_MODE'] || 'primary'];*/
    return (
      /* <Component childRoutes={(this.props.route || {}).childRoutes} />*/
      <div className="main-view-cls">
        {renderRoutes(this.props.route.childRoutes)}
      </div>
    )
  }
}
MainView.propTypes = {
  route: PropTypes.object
}
export default MainView
