import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Loader extends React.Component {

  render() {
    return (<div className={classNames('bonc-mung-loader', {
      'hidden': !this.props.spinning,
      'fullScreen': this.props.fullScreen
    })}
    >
      <div className='warpper'>
        <div className='inner' />
        <div className='text' >LOADING</div>
      </div>
    </div>)
  }
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool
}

Loader.newInstance = function (properties) {
  let props = properties || {}
  let div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(React.createElement(Loader, props), div)
  return {
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}
let loadingInstance = 0
Loader.getLoadingInstance = function () {
  loadingInstance = loadingInstance || Loader.newInstance({
    spinning: true
  })
  return loadingInstance
}

Loader.open = function () {
  Loader.getLoadingInstance()
}

Loader.close = function () {
  if (loadingInstance) {
    loadingInstance.destroy()
    loadingInstance = null
  }
}

export default Loader
