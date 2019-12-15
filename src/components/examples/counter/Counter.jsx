import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment } from '@/redux/actions/example'

import './Counter.less'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: bindActionCreators(increment, dispatch)
})

const Counter = ({ count, increment }) => (
  <div className='counter'>
    <a
      href='javascript: void(0)'
      onClick={increment}>
      点这里
    </a>
    {count}
  </div>

)

Counter.prototype.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
