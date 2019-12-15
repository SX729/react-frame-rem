import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import routes from 'routes/index.jsx'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
