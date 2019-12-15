import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import routes from 'routes/index.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '@/redux/actions'
import '@/App.less'

class App extends PureComponent {

  render() {
    return (
      <Router>
        {
          renderRoutes(routes)
        }
      </Router>
    )
  }
}

App.propTypes = {
  login: PropTypes.func
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
