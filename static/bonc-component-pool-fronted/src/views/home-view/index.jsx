import React from 'react'
import { withRouter } from 'react-router-dom'
import StandardHTML from './standard.md'

class HomeView extends React.Component {
  render() {
    return (<div
      dangerouslySetInnerHTML={{
        __html: StandardHTML
      }} />)
  }
}
export default withRouter(HomeView)
