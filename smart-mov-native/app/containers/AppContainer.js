import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/redux/actions'
import Navigation from '~/navigation'
import { View } from 'react-native'

class AppContainer extends Component {
  isLoggedIn () {
    return (this.props.authToken || '').length > 0
  }

  render () {
    return ( <Navigation /> )
  }
}

// For Actions...
// mapping dispatch into this Container's Props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

// For State...
// mapping parts of the global state into this Container's props
// the state argument is the "global state"
// and we "return" the part of the state that we want to use in props
export default connect(
  (state, { authToken }) => {
    return {}
  },
  mapDispatchToProps
)(AppContainer)
