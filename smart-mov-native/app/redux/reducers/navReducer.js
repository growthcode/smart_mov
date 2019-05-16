// https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc


// Wherever you build your reducers
// CombineReducers.js
import navigation from '~/navigation'

const navReducer = (state, action) => {
  const newState = navigation.router.getStateForAction(action, state)
  return newState || state
}






// ReduxNavigation.js
import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import navigation from '~/navigation'

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <navigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
