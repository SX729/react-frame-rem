import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
import classNames from 'classnames'

class ConcaveCard extends React.Component {

  render() {
    const {
      style,
      className,
      children
    } = this.props

    return (
      <div className={classNames('bonc-mung-concave-card', {
        [className]: true
      })} style={style}>
        <div className="concave-card-border left" >
          <div className="inner-top" />
          <div className="inner-bottom" />
        </div>
        <div className="concave-card-border top">
          <div className="inner-left" />
          <div className="inner-right" />
        </div>
        <div className="concave-card-border right">
          <div className="inner-top" />
          <div className="inner-bottom" />
        </div>
        <div className="concave-card-border bootom" >
          <div className="inner-left" />
          <div className="inner-right" />
        </div>
        <div className="body">
          {children}
        </div>
        <div className="concave-block top" />
        <div className="concave-block left" />
        <div className="concave-block right" />
        <div className="concave-block bottom" />
        <div className="corner-lt" />
        <div className="corner-rb" />
      </div>
    )
  }
}
ConcaveCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object
}
export default ConcaveCard
