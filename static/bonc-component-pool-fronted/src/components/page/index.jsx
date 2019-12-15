import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Loader from '../../components/loader'
import './index.less'

class Page extends React.Component {
  render() {
    const {
      className,
      children,
      loading = false,
      inner = false
    } = this.props

    const loadingStyle = {
      height: 'calc(100vh - 50vh)',
      overflow: 'hidden'
    }

    return (
      <div
        className={classnames({
          'bonc-mung-view-page': inner,
          [className]: true
        })}
        style={loading ? loadingStyle : null}
      >
        {loading ? <Loader spinning /> : ''}
        {children}
      </div>
    )
  }
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  inner: PropTypes.bool
}

export default Page
